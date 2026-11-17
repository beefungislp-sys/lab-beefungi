# Catálogo gráfico y mapa del código

Generado con `npm run catalog` desde la fuente única. Los enlaces apuntan a las líneas actuales del código en GitHub; regenerar después de formatear o mover funciones. No editar `docs/` ni `dist/` a mano.

## Cómo abordar el pulido visual

1. Elegir una estación de la tabla y revisar su función de dibujo.
2. Revisar también sus geometrías de interacción y marcos de faltantes: dibujo y zona activa deben corresponder.
3. Probar estados vacío, parcial, trabajando, listo, falta de material, mejora y arrastre.
4. Verificar en horizontal/vertical, generar catálogo y ejecutar pruebas/build.

El juego dibuja sus sprites en canvas de 320 × 240 mediante código; no usa una colección externa de imágenes para estos objetos. Las capturas de QA no son recursos de juego.

## Estaciones y elementos

| Área | Entrada gráfica | Elementos |
|---|---|---|
| Sala principal | [`drawBaseScene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L922) | Suelo, paredes, puertas, estaciones, cestos, protagonista, asistentes y relojes |
| Triturador | [`drawBaseScene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L922) | Pacas, tolva, motor, cesto de paja desordenada, cola, selección y carga |
| Mezcla | [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1232) | Vitrina, micelios, cesto, bandeja/llenadora, bacterias, limpieza, bolsa y salida |
| Pasteurizado | [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1482) | Tanque por capacidad, agua, llave, cal, paja, reserva, guía y reloj |
| Oficina | [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1683) | Inventario, ficha de especie, colores y acceso a pedidos |
| Cultivo: sala | [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1756) | Estantes, división de áreas, puerta y personaje |
| Incubación | [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1958) | Bolsas, colonización blanca, manchas verdes, espacios, clima y carritos |
| Fructificación | [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2293) | Frutos por especie, flushes, cosecha, composta, espacios y clima |
| Cuarto estéril | [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3460) | Mesas de acero, puertas, agitación y personaje |
| Preparación estéril | [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3706) | Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos |
| Medios especiales | [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6047) | Frascos, CL y sustrato Cordyceps; mezcla y expansión |
| Esterilizador | [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3842) | Pool preparado, olla, tapa, agua, vapor y reloj |
| Inoculación | [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4240) | Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación |
| Agitación | [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5596) | Frascos CL, puestos, progreso, crecimiento y reservas |
| Química: sala | [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6325) | Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes |
| Extracción | [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6579) | Especie, hongos, molino, material molido, destilador, mechero y matraz |
| Envasado | [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6773) | Matraces, llenadora y cuatro goteros con llenado |
| Nutrientes | [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6990) | Selector de receta, sales A/B, recipiente, mezcla y existencias |
| Espirulina | [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7290) | Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas |
| Tienda | [`drawShop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7910) | Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida |
| Avisos | [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7708) | Marcos temporales sobre requisitos; sin cartel explicativo |

## Todos los dibujantes y sprites compartidos

Incluye protagonistas/batas/asistentes, especies, recipientes, muebles, líquidos, bacterias, relojes, monedas, marcos, indicadores y ayudas. Una función puede componer varias piezas; se enumera su punto de entrada, no cada rectángulo/píxel individual.

- [`text`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L877)
- [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L882)
- [`drawBaseScene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L922)
- [`bench`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L993)
- [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1216)
- [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1232)
- [`drawBacteria`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1338)
- [`drawCleaningKit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1346)
- [`drawTreatedBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1466)
- [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1482)
- [`drawProcessClock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1635)
- [`drawPlayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1653)
- [`roomBase`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1666)
- [`smallText`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1676)
- [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1683)
- [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1756)
- [`drawGrowBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1904)
- [`drawBagCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1946)
- [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1958)
- [`drawFruitCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2077)
- [`drawOysterCluster`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2112)
- [`drawSpeciesFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2206)
- [`drawFruitBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2274)
- [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2293)
- [`drawLockedShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3188)
- [`drawChamberControl`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3197)
- [`drawShopPerson`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3399)
- [`drawCustomerOrder`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3410)
- [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3460)
- [`drawSawdustPile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3621)
- [`drawEmptySubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3639)
- [`drawPreparedSubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3656)
- [`drawWoodGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3690)
- [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3706)
- [`drawStainlessTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3775)
- [`drawPressurePot`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3787)
- [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3842)
- [`drawGloveGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4207)
- [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4240)
- [`drawGloveAnimation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4369)
- [`drawWoodStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4407)
- [`drawAutoMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4619)
- [`drawHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4845)
- [`drawWoodFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4973)
- [`drawWalkTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4992)
- [`drawHopperBar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5193)
- [`drawCoat`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5199)
- [`drawLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5421)
- [`drawLiquidDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5457)
- [`drawPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5569)
- [`drawLiquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5581)
- [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5596)
- [`drawLiquidHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5644)
- [`drawEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6007)
- [`drawCordyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6019)
- [`drawPreparedContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6038)
- [`drawIncubationContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6043)
- [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6047)
- [`drawCordyBlockHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6151)
- [`drawRicePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6185)
- [`drawPreparedPool`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6206)
- [`drawChemistryDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6296)
- [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6325)
- [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6508)
- [`drawExtractFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6512)
- [`drawDistiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6534)
- [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6579)
- [`drawDropper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6753)
- [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6773)
- [`drawSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6979)
- [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6990)
- [`drawSpirulinaFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7261)
- [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7290)
- [`drawSpirulinaJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7415)
- [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7708)
- [`drawShopProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7882)
- [`drawCoin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7887)
- [`drawCoinAmount`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7904)
- [`drawMissingOutline`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8227)
- [`drawLooseStraw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8847)
- [`drawDragHarvest`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8865)
- [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9028)
- [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9312)
- [`scene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9330)

## Interfaz nativa: botones, paneles y contadores

| Elemento | Tipo | Código |
|---|---|---|
| wallet | output | [`wallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L468) |
| upgrade-menu | button | [`upgrade-menu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L469) |
| upgrade-title | span | [`upgrade-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L475) |
| upgrade-count | span | [`upgrade-count`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L476) |
| station-mode | button | [`station-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L477) |
| prep-remove | button | [`prep-remove`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L478) |
| back | button | [`back`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L479) |
| unlock-notice | div | [`unlock-notice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L487) |
| unlock-message | span | [`unlock-message`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L488) |
| unlock-next | button | [`unlock-next`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L488) |
| upgrades-panel | section | [`upgrades-panel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L492) |
| close-upgrades | button | [`close-upgrades`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L501) |
| upgrade-items | div | [`upgrade-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L503) |
| more | button | [`more`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L506) |
| shop-species | button | [`shop-species`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L507) |
| shop-serve | button | [`shop-serve`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L509) |
| test-chamber | button | [`test-chamber`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L511) |
| test-straw | button | [`test-straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L513) |
| tank-upgrade | button | [`tank-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L514) |
| module-upgrade | button | [`module-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L515) |
| assistant-buy | button | [`assistant-buy`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L516) |
| test-coins | button | [`test-coins`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L517) |
| test-lab-unlock | button | [`test-lab-unlock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L518) |
| lab-hire | button | [`lab-hire`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L520) |
| liquid-room | button | [`liquid-room`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L522) |
| test-mode | button | [`test-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L528) |
| sound-toggle | button | [`sound-toggle`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L529) |
| status | p | [`status`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L530) |
| orders | dialog | [`orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L549) |
| order-balance | p | [`order-balance`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L551) |
| order-items | div | [`order-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L552) |
| species-info | p | [`species-info`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L553) |
| close-orders | button | [`close-orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L554) |
| mycelium-inventory | dialog | [`mycelium-inventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L556) |
| mycelium-list | div | [`mycelium-list`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L558) |
| close-mycelium | button | [`close-mycelium`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L559) |

Los estilos están en el bloque `<style>`: marco de juego, barra superior, botones, pedidos/tablas, diálogos, Ayuda y reglas móviles. Los controles de prueba se mantienen separados del modo normal.

## Interfaz generada desde JavaScript

Pedidos y sus botones de compra/especie: [`renderOrders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2364). Inventario de micelios: [`openMyceliumInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2389). Menú superior de mejoras: [`updateUpgradeMenu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8754), [`availableUpgradeEntries`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8706) y [`buyMenuUpgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8799). Los controles históricos ocultos siguen en [`updateUpgradeControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4863). Economía/saldo y modo prueba: [`updateEconomyControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8419) y [`updateWallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8403). Controles del cuarto estéril: [`updateK0Controls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5772). Entregas de tienda: [`updateShopControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3360). Preferencia de sonido: [`updateSoundButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7722). Avisos de desbloqueo: [`renderUnlockNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8580). Visibilidad del recorrido: [`updateProgressionControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8663) y [`refreshProgression`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8586). Flecha encadenada: [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9312), [`routeGuideTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9146) y [`currentRouteStep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9128). Los pasos específicos de Cordyceps distinguen vista, medio y especie en [`currentRouteModule`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9122).

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: [`beginDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8824), [`updateDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8836), [`point`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L870), [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6508), [`playerAction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7695). Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: `mixBasket`, `jarCase`, `mixTray`, `bagSlot`, `pasteurTankRect`, `incSlots`, `woodStations`, `preparedPoolCards`, `gloveRect`, `chemistryBenches`, `extractionRects`, `nutrientRects`, `spirulinaRects`, `shopInventoryCards` y `missingItemRects`.

## Iconos de cada tipo de arrastre

32 tipos explícitos en un único catálogo. Render común: [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9028); tamaño, desplazamiento para dedo y límites: [`dragPreviewLayout`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9002). Los módulos ya no dibujan vistas previas por separado.

| Tipo de arrastre | Icono | Código |
|---|---|---|
| `bale` | Paca de paja | [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8885) |
| `raw` | Paja triturada | [`raw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8886) |
| `straw` | Paja pasteurizada | [`straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8887) |
| `mixture` | Paja con micelio | [`mixture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8888) |
| `lime` | Bote de cal | [`lime`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8889) |
| `jar` | Micelio | [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8893) |
| `cleaning` | Spray y trapo | [`cleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8897) |
| `incbag` | Bolsa sin incubar | [`incbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8898) |
| `readybag` | Bolsa de incubación | [`readybag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8905) |
| `fruitbag` | Bloque para fructificar | [`fruitbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8912) |
| `harvestbag` | Hongos o bloque para composta | [`harvestbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8915) |
| `woodRaw` | Aserrín o arroz | [`woodRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8916) |
| `woodBag` | Bolsa o frasco vacío | [`woodBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8921) |
| `woodNutrients` | Nutrientes | [`woodNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8926) |
| `woodPrepared` | Recipiente preparado | [`woodPrepared`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8929) |
| `gloveInoculum` | Micelio interior | [`gloveInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8932) |
| `gloveWood` | Bolsa esterilizada | [`gloveWood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8936) |
| `gloveJar` | Frasco de micelio | [`gloveJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8939) |
| `gloveClean` | Limpieza de cabina | [`gloveClean`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8943) |
| `cordyInoculum` | Cultivo líquido maduro | [`cordyInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8946) |
| `liquidPetri` | Placa Petri | [`liquidPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8949) |
| `liquidJar` | Cultivo líquido inoculado | [`liquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8950) |
| `chemRaw` | Hongos para extracción | [`chemRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8953) |
| `chemGround` | Hongos molidos | [`chemGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8956) |
| `chemFlask` | Matraz de extracto | [`chemFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8966) |
| `chemSalt` | Sales A o B | [`chemSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8969) |
| `spirulinaFeed` | Solución nutritiva | [`spirulinaFeed`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8978) |
| `spirulinaCrop` | Espirulina cosechada | [`spirulinaCrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8981) |
| `spirulinaMother` | Matraz madre | [`spirulinaMother`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8984) |
| `spirulinaInoculum` | Matraz de inoculación | [`spirulinaInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8987) |
| `shopInventory` | Producto de tienda | [`shopInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8990) |
| `shopcustomer` | Cliente seleccionado | [`shopcustomer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8993) |

En celular/lápiz la tarjeta intenta medir 76 píxeles CSS y queda separada 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Paleta actual

552 colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

`#142632` · `#17283a` · `#233e4b` · `#243b49` · `#243b4d` · `#243e48` · `#243f50` · `#24434f` · `#263f4c` · `#304554` · `#314654` · `#324c60` · `#334f60` · `#344655` · `#344b62` · `#344d5e` · `#355968` · `#364e5c` · `#375c65` · `#385868` · `#385e70` · `#395a68` · `#3b5968` · `#3c5969` · `#3c5b69` · `#3d5d6a` · `#3e5865` · `#3e5966` · `#3f8159` · `#405a65` · `#405f6b` · `#415966` · `#416674` · `#425b68` · `#425d67` · `#426674` · `#438458` · `#456772` · `#456b7b` · `#456c73` · `#456c79` · `#485b68` · `#486d7c` · `#496874` · `#496c4d` · `#4d707c` · `#4f7959` · `#518e68` · `#526d79` · `#526f7e` · `#536c79` · `#547c8c` · `#548272` · `#557585` · `#557f80` · `#558c65` · `#576d72` · `#577784` · `#577e87` · `#587b87` · `#5a7780` · `#5b7887` · `#5c6e86` · `#5c7780` · `#607e83` · `#617b86` · `#618a94` · `#63766f` · `#638591` · `#638a83` · `#638d9b` · `#648691` · `#655c41` · `#658b8d` · `#66523b` · `#667570` · `#668a8b` · `#668d87` · `#67828e` · `#678591` · `#678b87` · `#688995` · `#688d8c` · `#689199` · `#694f36` · `#6994a0` · `#69b794` · `#6a8d91` · `#6a929b` · `#6aab87` · `#6b5438` · `#6b7e83` · `#6b8c86` · `#6c8e95` · `#6d8794` · `#6d919c` · `#6d9aa5` · `#6da9ba` · `#6e8c8b` · `#6f858e` · `#6f969e` · `#708b96` · `#718b96` · `#718d99` · `#71928d` · `#72684f` · `#72826c` · `#728580` · `#728d8c` · `#7297a3` · `#7298a6` · `#729994` · `#729a97` · `#729b9f` · `#73887e` · `#73929a` · `#7397a5` · `#73988d` · `#748d89` · `#7495a3` · `#75674f` · `#759b98` · `#76959c` · `#77543e` · `#77563d` · `#789ba7` · `#789ca2` · `#78c9d2` · `#79523e` · `#79664c` · `#79ae64` · `#79bfc8` · `#7c9ca5` · `#7ca6ae` · `#7cb68b` · `#7e938a` · `#7e939d` · `#7e959e` · `#7e9995` · `#7ea8ae` · `#7fb3ac` · `#7fb7be` · `#82918c` · `#82a9b6` · `#82c9d2` · `#83a5aa` · `#83b9df` · `#83bfc7` · `#83c4cf` · `#83c6ad` · `#83d8ec` · `#84928b` · `#849ba3` · `#859e95` · `#85c3ca` · `#879a9f` · `#87a6ac` · `#87aab7` · `#87aeb3` · `#88754d` · `#889b90` · `#89c5d6` · `#8aabb0` · `#8aada3` · `#8aafb3` · `#8b9e9d` · `#8bada9` · `#8bafb3` · `#8bc5d2` · `#8c784e` · `#8caaa0` · `#8d755b` · `#8d9e9c` · `#8da89f` · `#8db4a5` · `#8dbbb9` · `#8e714b` · `#8e7953` · `#8ea2a7` · `#8eacb2` · `#8eafad` · `#8ecea6` · `#8f7547` · `#8f773f` · `#8f827b` · `#8f9b89` · `#8fa7af` · `#8fa9ac` · `#8fa9af` · `#8fadb2` · `#8fc8df` · `#907b4f` · `#90b3b8` · `#91afaa` · `#91b1aa` · `#91c49f` · `#923e36` · `#927858` · `#92a9b0` · `#92e3d0` · `#93512f` · `#93babd` · `#94b8b6` · `#966e42` · `#96765c` · `#96774f` · `#96c69c` · `#97bdbb` · `#987145` · `#9abcb9` · `#9b8353` · `#9bb6b4` · `#9cb4bb` · `#9d743c` · `#9db7b6` · `#9e7b4c` · `#9ed3aa` · `#9fB1b6` · `#a0bab4` · `#a28e61` · `#a2b5bc` · `#a2c2bc` · `#a34f3a` · `#a37e5a` · `#a4cfcb` · `#a4e2e4` · `#a5c4bc` · `#a5ccca` · `#a687ad` · `#a6bec1` · `#a6c59f` · `#a6c8bf` · `#a6cfd1` · `#a7b6aa` · `#a7bdbf` · `#a7d8bc` · `#a8793f` · `#a9aea6` · `#a9bdc3` · `#a9c6c2` · `#aabcc0` · `#ab7957` · `#acc0bf` · `#accac5` · `#accfd5` · `#ad7a51` · `#adc6bc` · `#adc6bd` · `#add2ba` · `#ae7e3d` · `#aec3c6` · `#af8056` · `#b18a4f` · `#b1e5e4` · `#b27652` · `#b2b491` · `#b2bca7` · `#b2cd9f` · `#b2d3cc` · `#b38a49` · `#b38c56` · `#b39b68` · `#b3c6be` · `#b3cbc8` · `#b3d9d7` · `#b4655b` · `#b49055` · `#b4d5be` · `#b4dce2` · `#b58a43` · `#b59173` · `#b5aa8a` · `#b5b5a0` · `#b5ccc2` · `#b5e0dc` · `#b6965c` · `#b6cbc2` · `#b6ccc5` · `#b6d8c8` · `#b7985d` · `#b7b294` · `#b7cbc5` · `#b7cbd0` · `#b7cfb8` · `#b7cfbf` · `#b7d0cd` · `#b7dcd8` · `#b88562` · `#b8a564` · `#b8b49a` · `#b8d4d6` · `#b8eef0` · `#b99b59` · `#b9a770` · `#b9b799` · `#b9b9aa` · `#b9c8b9` · `#b9cecd` · `#b9cfbe` · `#b9d5cd` · `#b9d5d4` · `#b9d6cf` · `#b9d8cc` · `#bac7c9` · `#bad4c3` · `#bad6bc` · `#bbd0c6` · `#bc8539` · `#bc8a43` · `#bd845a` · `#bd934b` · `#bd965d` · `#bd9b58` · `#bd9c62` · `#bd9d60` · `#bdad83` · `#bdcfbf` · `#bdcfca` · `#bdd3c8` · `#be9b64` · `#c0d98c` · `#c19c5c` · `#c1c5ab` · `#c1cdae` · `#c1d4cd` · `#c1d6cb` · `#c1d8b6` · `#c2a67d` · `#c2d2bc` · `#c2d6c9` · `#c2dfd7` · `#c2e2dc` · `#c2e3dc` · `#c3d6cd` · `#c4ae75` · `#c4d3b6` · `#c4d6bc` · `#c4d9a3` · `#c54442` · `#c59a4f` · `#c5b891` · `#c5d7ce` · `#c5d9ce` · `#c5d9d0` · `#c5d9d1` · `#c5e4df` · `#c6cdb1` · `#c6d7d1` · `#c6d9c8` · `#c74443` · `#c7b27d` · `#c7bc9c` · `#c8d4bc` · `#c8d5cb` · `#c8d9cd` · `#c8dace` · `#c9b083` · `#c9cdb1` · `#c9d6d4` · `#c9d7b5` · `#c9d9ce` · `#cac7b8` · `#cad0ba` · `#cadbd1` · `#cbb67d` · `#cc6247` · `#cdd5af` · `#cdd6a5` · `#cee2d7` · `#cee6dc` · `#d0b17a` · `#d0b478` · `#d1c29a` · `#d1dfda` · `#d2d6bb` · `#d2ded0` · `#d2e5df` · `#d3a554` · `#d3bb77` · `#d3bf88` · `#d3c79e` · `#d3dfd3` · `#d3e5df` · `#d4ac5b` · `#d4b76f` · `#d4bd85` · `#d4c28a` · `#d5b17a` · `#d5cbb1` · `#d5ccb0` · `#d5e0da` · `#d5e0dc` · `#d5e6bd` · `#d6c8a0` · `#d6ccad` · `#d6e2cc` · `#d7772e` · `#d7b57d` · `#d7b582` · `#d7bd8a` · `#d7d7bb` · `#d7e1c8` · `#d7e3ce` · `#d7e6d3` · `#d8857f` · `#d89a6d` · `#d8af5c` · `#d8afa1` · `#d9b981` · `#d9c39b` · `#d9e6dc` · `#d9e8cf` · `#dad3bd` · `#dbe5d8` · `#dcd8c3` · `#dce9d7` · `#ddbc6f` · `#deece2` · `#dfad45` · `#dfbd8d` · `#dfcb8d` · `#dfebcf` · `#dfebe1` · `#e0cd96` · `#e0dfc7` · `#e0e6cf` · `#e0e8dc` · `#e0e9e5` · `#e0ebce` · `#e0ecd0` · `#e1df9b` · `#e1e6ce` · `#e1e9d7` · `#e2a25a` · `#e2b77d` · `#e2c37b` · `#e2c88f` · `#e2e5ce` · `#e2ebdf` · `#e3514e` · `#e3cc8b` · `#e3e9d8` · `#e3ebe5` · `#e4c47c` · `#e4e9d9` · `#e4ece0` · `#e4efda` · `#e58b5d` · `#e5c18c` · `#e5cd8a` · `#e5d5ad` · `#e5dfc6` · `#e5ead8` · `#e5ece0` · `#e6bf6d` · `#e6e0ca` · `#e6e9c8` · `#e7b858` · `#e7bf97` · `#e7c85e` · `#e7d5b4` · `#e7dfc7` · `#e7e6cb` · `#e7ead4` · `#e7f1df` · `#e7f6e9` · `#e8ba79` · `#e8c17b` · `#e8c779` · `#e8cb92` · `#e8ddbf` · `#e8edcf` · `#e9bf66` · `#e9d8b5` · `#e9dba4` · `#e9ead6` · `#eaa554` · `#eac8a0` · `#ead29b` · `#eadbb0` · `#ecc59c` · `#ece0af` · `#ecebd3` · `#ed9c77` · `#edbd69` · `#edc29a` · `#edc858` · `#ede1b8` · `#edf0dd` · `#edf0de` · `#eec767` · `#eee0b6` · `#eee1ba` · `#eee6c7` · `#eee9ce` · `#eef0dc` · `#ef9461` · `#ef9b3b` · `#efc991` · `#efcc78` · `#eff2df` · `#f0ce7c` · `#f0e7cf` · `#f0e9ce` · `#f17860` · `#f1cd7f` · `#f1e3bb` · `#f1e4bd` · `#f1e9cb` · `#f2cd6f` · `#f2ce7b` · `#f2d5a0` · `#f2e7c9` · `#f2ead6` · `#f3e7bd` · `#f3ead4` · `#f3f0d5` · `#f4d8a5` · `#f4efcf` · `#f4f0db` · `#f5d98e` · `#f5e5a1` · `#f5eccf` · `#f5edcc` · `#f6dc91` · `#f6eed4` · `#f6efd1` · `#f7eed8` · `#f8dc90` · `#f8efd3` · `#f8f0d6` · `#fbf4df` · `#ff8580` · `#ffd27b` · `#ffd475` · `#ffe098` · `#ffe16a` · `#ffe195` · `#ffe1a0` · `#ffe6a0` · `#ffe6a3` · `#ffe7a0` · `#fff0cb` · `#fff0cc` · `#fff0cd` · `#fff1a2` · `#fff1ab` · `#fff1cd` · `#fff4d7` · `#fff6de` · `#fff8e4` · `#fffbea`

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
