const fs = require('fs'), vm = require('vm'), assert = require('assert');
const harness = fs.readFileSync('tests/game.cjs', 'utf8').split('function check(name,code)')[0];
const fresh = new Function('require', harness + ';return fresh;')(require);
const setup = `
function pendingRoute(id){routeGuide.completed.clear();for(const step of routeModules){if(step.id===id)break;completeRouteStep(step.id)}progression.notices=[];drag=null;upgradeMenuOpen=false;productRevealQueue.length=0}
progression.sterile=true;progression.reishi=true;liquidUnlocked=true;
liquidHoodJob=woodBagJob=null;gloveLevel=3;gloveJar='Reishi';gloveJarQueue=['Melena de leon'];gloveWood=true;
selectedSpecies='Cordyceps';liquidPending=[];liquidStirrers.fill(null);liquidReady=0;
incubation.fill(null);fruitShelves.fill(null);fruitingCart=[];waitingBagData=[];
`;
function check(name, code) { const env=fresh(false,true);env.assert=assert;vm.runInContext(setup+code,env);console.log('OK Guia contextual: '+name); }
check('Petri sin desvio hacia reservas de madera; flecha fuera del selector', `
pendingRoute('cordyLiquidInoculate');hoodMode='liquid';liquidSterile=1;micelio=1;micelioStock=0;
const before=JSON.stringify([gloveJar,gloveJarQueue,gloveWood]);const p=routeRecoveryPlan();
assert.equal(p.step.id,'cordyLiquidInoculate');assert(!p.order);assert(p.point[1]>60);assert(p.point[1]+15>=70);
assert.equal(JSON.stringify([gloveJar,gloveJarQueue,gloveWood]),before);
`);
check('CL maduro se dirige a sustrato Cordy aunque quede otro micelio dentro', `
pendingRoute('cordySubstrateInoculate');hoodMode='cordy';sterileCordy=1;liquidReady=1;
const p=routeRecoveryPlan();assert.equal(p.step.id,'cordySubstrateInoculate');assert(!p.order);assert(p.point[1]>60);
`);
check('si falta Petri pide Cordy y no suministros de Reishi', `
pendingRoute('cordyLiquidInoculate');hoodMode='liquid';liquidSterile=1;micelio=micelioStock=0;
const p=routeRecoveryPlan();assert.equal(p.order.id,'micelio');assert.equal(p.order.species,'Cordyceps');
`);
check('tienda senala solo el producto que pide un cliente listo', `
pendingRoute('shop');shopUnlocked=true;auxView='shop';shopGuideDone=false;
harvestCart=[{species:'Pleurotus',grams:500},{species:'Reishi',grams:500}];dropperStock={};spirulinaHarvest=0;
shopQueue=[{id:1,product:'mushroom',species:'Reishi',y:shopQueueY(0),remaining:1}];
const p=routeRecoveryPlan(), card=visibleShopCards().find(c=>c.species==='Reishi');assert.equal(p.point[0],card.r[0]+card.r[2]/2);
shopQueue[0].y=300;assert(routeRecoveryPlan().wait);shopQueue=[];assert(routeRecoveryPlan().wait);
`);
check('venta no se confunde con faltantes del recorrido Cordy; salir retoma el hito', `
pendingRoute('cordyLiquidInoculate');hoodMode='liquid';liquidSterile=1;micelio=micelioStock=0;
shopUnlocked=true;auxView='shop';shopGuideDone=false;harvestCart=[{species:'Pleurotus',grams:250}];
shopQueue=[{id:1,product:'mushroom',species:'Pleurotus',y:shopQueueY(0),remaining:1}];
const before=JSON.stringify([...routeGuide.completed]);let p=routeRecoveryPlan();assert.equal(p.step.id,'shop');assert(p.point);assert(!p.order);assert.equal(guideOrderTarget(),null);
shopGuideDone=true;assert(routeRecoveryPlan().wait);auxView='glovebox';p=routeRecoveryPlan();assert.equal(p.order.species,'Cordyceps');assert.equal(JSON.stringify([...routeGuide.completed]),before);
`);
check('tienda distingue goteros de setas de la misma especie', `
pendingRoute('shop');progression.chemistry=true;shopUnlocked=true;auxView='shop';harvestCart=[{species:'Reishi',grams:500}];dropperStock={Reishi:2};spirulinaHarvest=0;
shopQueue=[{id:1,product:'dropper',species:'Reishi',y:shopQueueY(0),remaining:1}];
const card=visibleShopCards().find(c=>c.species==='Reishi'&&c.product==='dropper'),p=routeRecoveryPlan();assert(card);assert.equal(p.point[0],card.r[0]+card.r[2]/2);assert.equal(p.point[1],card.r[1]-19);
`);
check('madera en existencia cambia solo la fila paja sin compras', `
pendingRoute('woodPrep');auxView='woodPrep';prepMode='wood';woodStock=2;selectedSubstrate='paja';woodPrepState={bag:false,sawdust:false,nutrients:false,water:0,blend:0};document.querySelector('#orders').open=true;
const snap=()=>JSON.stringify([saleCoins,bales,woodStock,cordySubStock,[...routeGuide.completed]]),before=snap();
assert(!routeRecoveryPlan().order);assert.equal(guideOrderTarget(),document.querySelector('#order-items [data-substrate]'));
selectedSubstrate='cordy';assert.equal(guideOrderTarget(),document.querySelector('#order-items [data-substrate]'));
selectedSubstrate='madera';assert.equal(guideOrderTarget(),document.querySelector('#close-orders'));assert.equal(snap(),before);
`);
check('arroz y CL cambian el modo de mesa sin pedir material existente', `
for(const [id,mode] of [['cordySubstratePrep','cordy'],['cordyLiquidPrep','liquid']]){pendingRoute(id);auxView='woodPrep';prepMode='wood';woodPrepState={bag:false,sawdust:false,nutrients:false,water:0,blend:0};cordySubStock=2;woodStock=0;bales=3;nutrientStock=2;liquidEmpty=2;let p=routeRecoveryPlan();assert.equal(p.action,'selector');assert(!p.order);setPrepRecipeMode(mode);p=routeRecoveryPlan();assert(!p.order);document.querySelector('#orders').open=true;selectedSubstrate='paja';if(mode==='cordy'){assert.equal(guideOrderTarget(),document.querySelector('#order-items [data-substrate]'));selectedSubstrate='cordy'}assert.equal(guideOrderTarget(),document.querySelector('#close-orders'));document.querySelector('#orders').open=false;}
`);
check('campana cambia a CL antes de pedir Petri y respeta las reservas Cordy', `
pendingRoute('cordyLiquidInoculate');auxView='glovebox';gloveJar=null;gloveJarQueue=[];gloveWood=false;liquidSterile=1;setSpecies('Melena de leon');hoodMode='solid';speciesStocks.Cordyceps={visible:1,reserve:0};
let p=routeRecoveryPlan();assert.equal(p.action,'selector');assert(!p.order);document.querySelector('#orders').open=true;assert.equal(guideOrderTarget(),document.querySelector('#order-items [data-species]'));setSpecies('Reishi');assert.equal(guideOrderTarget(),document.querySelector('#order-items [data-species]'));setSpecies('Cordyceps');hoodMode='liquid';assert.equal(guideOrderTarget(),document.querySelector('#close-orders'));document.querySelector('#orders').open=false;p=routeRecoveryPlan();assert(p.point);assert(!p.order);assert.equal(speciesStockTotal('Cordyceps'),1);
micelio=micelioStock=0;assert.equal(routeRecoveryPlan().order.species,'Cordyceps');
`);
