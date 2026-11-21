# Catálogo gráfico y mapa del código

Generado con `npm run catalog` desde la fuente única. Los enlaces apuntan a las líneas actuales del código en GitHub; regenerar después de formatear o mover funciones. No editar `docs/` ni `dist/` a mano.

## Cómo abordar el pulido visual

1. Elegir una estación de la tabla y revisar su función de dibujo.
2. Revisar también sus geometrías de interacción y marcos de faltantes: dibujo y zona activa deben corresponder.
3. Probar estados vacío, parcial, trabajando, listo, falta de material, mejora y arrastre.
4. Verificar en horizontal/vertical, generar catálogo y ejecutar pruebas/build.

El juego conserva un mundo lógico de 320 × 240 y dibuja sus sprites mediante código sobre un canvas de 640 × 480; no usa una colección externa de imágenes para estos objetos. Las capturas de QA no son recursos de juego.

## Estaciones y elementos

| Área | Entrada gráfica | Elementos |
|---|---|---|
| Sala principal | [`drawMainRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1505) | Suelo, paredes, puertas, estaciones, cestos, protagonista, asistentes y relojes |
| Triturador | [`drawCrusherStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1890) | Pacas, tolva, motor, cesto de paja desordenada, cola, selección y carga |
| Mezcla | [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2006) | Vitrina, micelios, cesto, bandeja/llenadora, bacterias, limpieza, bolsa y salida |
| Pasteurizado | [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2860) | Tanque por capacidad, agua, llave, cal, paja, reserva, guía y reloj |
| Oficina | [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3035) | Inventario, ficha de especie, colores y acceso a pedidos |
| Cultivo: sala | [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3231) | Estantes, división de áreas, puerta y personaje |
| Incubación | [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3495) | Bolsas, colonización blanca, manchas verdes, espacios, clima y carritos |
| Fructificación | [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3928) | Frutos por especie, flushes, cosecha, composta, espacios y clima |
| Cuarto estéril | [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5805) | Mesas de acero, puertas, agitación y personaje |
| Preparación estéril | [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6265) | Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos |
| Medios especiales | [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10348) | Frascos, CL y sustrato Cordyceps; mezcla y expansión |
| Esterilizador | [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6642) | Pool preparado, olla, tapa, agua, vapor y reloj |
| Inoculación | [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7599) | Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación |
| Agitación | [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9882) | Frascos CL, puestos, progreso, crecimiento y reservas |
| Química: sala | [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10647) | Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes |
| Extracción | [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11313) | Especie, hongos, molino, material molido, destilador, mechero y matraz |
| Envasado | [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11729) | Matraces, llenadora y cuatro goteros con llenado |
| Nutrientes | [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12243) | Selector de receta, sales A/B, recipiente, mezcla y existencias |
| Espirulina | [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12868) | Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas |
| Tienda | [`drawShop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14000) | Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida |
| Personaje y selector | [`paintLabCharacter`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5110) | Dos apariencias, bata común, cuatro direcciones, reposo y caminata; miniaturas y salas comparten sprite |
| Avisos | [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13413) | Marcos temporales sobre requisitos; sin cartel explicativo |

## Todos los dibujantes y sprites compartidos

Incluye protagonistas/batas/asistentes, especies, recipientes, muebles, líquidos, bacterias, relojes, monedas, marcos, indicadores y ayudas. Una función puede componer varias piezas; se enumera su punto de entrada, no cada rectángulo/píxel individual.

- [`text`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1118)
- [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1123)
- [`drawFloorTexture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1266)
- [`drawWallTexture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1306)
- [`drawWarmTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1322)
- [`drawWarmWindow`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1365)
- [`drawStrawStem`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1381)
- [`drawStrawField`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1400)
- [`drawStrawFibers`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1428)
- [`drawWarmBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1431)
- [`drawWarmPlant`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1459)
- [`drawWarmStationBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1475)
- [`drawMainRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1505)
- [`drawBaseScene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1624)
- [`drawStrawCrusher`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1681)
- [`drawCrusherStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1890)
- [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1997)
- [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2006)
- [`drawBacteria`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2107)
- [`drawCleaningKit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2115)
- [`drawTreatedBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2462)
- [`drawLimeCan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2478)
- [`drawPasteurBasin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2582)
- [`drawLabFaucet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2762)
- [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2860)
- [`drawProcessClock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2994)
- [`drawPlayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3012)
- [`roomBase`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3018)
- [`smallText`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3028)
- [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3035)
- [`drawChamberRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3110)
- [`drawChamberRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3140)
- [`drawChamberFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3170)
- [`drawClimatePanel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3189)
- [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3231)
- [`drawGrowBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3367)
- [`drawBagCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3483)
- [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3495)
- [`drawChamberCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3610)
- [`drawFruitCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3638)
- [`drawMushroomFan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3673)
- [`drawDetailedOysterFan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3733)
- [`drawOysterCluster`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3788)
- [`drawLionsMane`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3817)
- [`drawReishiFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3836)
- [`drawCordyFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3852)
- [`drawSpeciesFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3893)
- [`drawFruitBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3908)
- [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3928)
- [`drawChamberControl`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4820)
- [`paintLabCharacter`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5110)
- [`drawLabAvatar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5405)
- [`drawPixelShopAvatar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5421)
- [`drawShopPerson`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5664)
- [`drawCustomerOrder`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5691)
- [`drawSterileBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5742)
- [`drawSterileHousingDetail`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5752)
- [`drawSterileShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5776)
- [`drawPrepFaucet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5784)
- [`drawSterileMiniCaption`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5800)
- [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5805)
- [`drawSawdustPile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5988)
- [`drawEmptySubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6006)
- [`drawPreparedSubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6023)
- [`drawWoodGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6042)
- [`drawSubstratePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6059)
- [`drawSubstrateNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6102)
- [`drawSubstrateEmptyBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6126)
- [`drawSubstrateEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6173)
- [`drawSubstrateHopper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6192)
- [`drawSubstrateJarGlints`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6255)
- [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6265)
- [`drawStainlessTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6333)
- [`drawStainlessTableLeg`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6455)
- [`drawPressurePot`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6466)
- [`drawPressureLid`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6604)
- [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6642)
- [`drawGloveGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7013)
- [`drawLaminarFace`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7047)
- [`drawLaminarSteel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7056)
- [`drawLaminarHoodFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7088)
- [`drawLaminarFlowHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7181)
- [`drawSterileWorkroom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7197)
- [`drawLaminarRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7287)
- [`drawLaminarOval`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7291)
- [`drawLaminarJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7305)
- [`drawLaminarBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7365)
- [`drawGloveEnclosure`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7466)
- [`drawGlovePorts`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7547)
- [`drawInoculationBurner`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7563)
- [`drawInoculationCleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7596)
- [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7599)
- [`drawGloveAnimation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7714)
- [`drawWoodStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7752)
- [`drawMixContents`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7976)
- [`drawMixFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8010)
- [`drawAutoMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8234)
- [`drawHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8538)
- [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8551)
- [`drawSubstrateMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8678)
- [`drawWoodFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8770)
- [`drawWalkTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8784)
- [`drawHopperBar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8979)
- [`drawCoat`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8985)
- [`drawLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9408)
- [`drawLiquidDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9453)
- [`drawPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9560)
- [`drawLiquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9628)
- [`drawMagneticStirrer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9728)
- [`drawAgitationShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9778)
- [`drawAgitationRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9797)
- [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9882)
- [`drawLiquidHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9896)
- [`drawEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10289)
- [`drawCordyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10301)
- [`drawPreparedContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10339)
- [`drawIncubationContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10344)
- [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10348)
- [`drawCordyBlockHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10451)
- [`drawRicePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10483)
- [`drawPreparedPool`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10504)
- [`drawChemistryDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10600)
- [`drawChemistryBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10629)
- [`drawChemistryTray`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10639)
- [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10647)
- [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10825)
- [`drawExtractFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10829)
- [`drawExtractGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10918)
- [`drawExtractMill`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10956)
- [`drawDistiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11082)
- [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11313)
- [`drawDropper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11477)
- [`drawBottlingMachine`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11575)
- [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11729)
- [`drawSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11916)
- [`drawNutrientStirPlate`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12060)
- [`drawNutrientBeaker`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12104)
- [`drawNutrientMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12229)
- [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12243)
- [`drawSpirulinaFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12505)
- [`drawSpirulinaCarboy`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12625)
- [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12868)
- [`drawSpirulinaJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12936)
- [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13413)
- [`drawShopBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13621)
- [`drawShopWallShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13741)
- [`drawShopArtFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13806)
- [`drawShopPottedPlant`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13817)
- [`drawShopWallLayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13872)
- [`drawShopCounter`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13881)
- [`drawShopDisplayProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13927)
- [`drawShopCharacterLayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13953)
- [`drawWarmShopRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13968)
- [`drawShopProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13972)
- [`drawCoin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13977)
- [`drawCoinAmount`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13994)
- [`drawMissingOutline`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14277)
- [`drawLooseStraw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15058)
- [`drawDragHarvest`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15076)
- [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15270)
- [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16131)
- [`scene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16149)
- [`drawDiscoveryOysterFan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16213)
- [`drawDiscoveryPleurotus`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16364)
- [`drawDiscoveryLionsMane`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16444)
- [`drawDiscoveryReishi`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16616)
- [`drawDiscoveryCordyceps`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L17129)
- [`drawProductPortrait`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L17148)

## Interfaz nativa: botones, paneles y contadores

| Elemento | Tipo | Código |
|---|---|---|
| wallet | output | [`wallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L619) |
| upgrade-menu | button | [`upgrade-menu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L620) |
| upgrade-title | span | [`upgrade-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L626) |
| upgrade-count | span | [`upgrade-count`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L627) |
| tester-unlock | button | [`tester-unlock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L628) |
| station-mode | button | [`station-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L633) |
| prep-remove | button | [`prep-remove`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L634) |
| back | button | [`back`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L635) |
| unlock-notice | div | [`unlock-notice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L643) |
| unlock-message | span | [`unlock-message`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L644) |
| unlock-next | button | [`unlock-next`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L644) |
| upgrades-panel | section | [`upgrades-panel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L648) |
| close-upgrades | button | [`close-upgrades`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L657) |
| upgrade-items | div | [`upgrade-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L659) |
| more | button | [`more`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L662) |
| shop-species | button | [`shop-species`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L663) |
| shop-serve | button | [`shop-serve`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L665) |
| test-chamber | button | [`test-chamber`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L667) |
| test-straw | button | [`test-straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L669) |
| tank-upgrade | button | [`tank-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L670) |
| module-upgrade | button | [`module-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L671) |
| assistant-buy | button | [`assistant-buy`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L672) |
| test-coins | button | [`test-coins`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L673) |
| test-lab-unlock | button | [`test-lab-unlock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L674) |
| lab-hire | button | [`lab-hire`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L676) |
| liquid-room | button | [`liquid-room`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L678) |
| test-mode | button | [`test-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L684) |
| sound-toggle | button | [`sound-toggle`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L685) |
| music-toggle | button | [`music-toggle`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L686) |
| save-now | button | [`save-now`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L687) |
| new-game | button | [`new-game`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L688) |
| save-status | p | [`save-status`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L689) |
| status | p | [`status`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L692) |
| avatar-picker | dialog | [`avatar-picker`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L715) |
| avatar-title | h2 | [`avatar-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L716) |
| avatar-start | button | [`avatar-start`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L727) |
| save-menu | dialog | [`save-menu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L729) |
| save-title | h2 | [`save-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L730) |
| save-summary | p | [`save-summary`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L731) |
| continue-game | button | [`continue-game`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L732) |
| start-new-game | button | [`start-new-game`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L733) |
| reset-save | dialog | [`reset-save`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L735) |
| reset-title | h2 | [`reset-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L736) |
| cancel-reset | button | [`cancel-reset`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L738) |
| confirm-reset | button | [`confirm-reset`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L739) |
| orders | dialog | [`orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L741) |
| order-balance | p | [`order-balance`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L743) |
| order-items | div | [`order-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L744) |
| species-info | p | [`species-info`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L745) |
| close-orders | button | [`close-orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L746) |
| mycelium-inventory | dialog | [`mycelium-inventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L748) |
| mycelium-list | div | [`mycelium-list`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L750) |
| close-mycelium | button | [`close-mycelium`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L751) |
| product-reveal | dialog | [`product-reveal`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L753) |
| product-reveal-close | button | [`product-reveal-close`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L754) |
| product-reveal-art | canvas | [`product-reveal-art`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L757) |
| product-reveal-name | h2 | [`product-reveal-name`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L763) |
| route-pointer | div | [`route-pointer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L765) |

Los estilos están en el bloque `<style>`: marco de juego, barra superior, botones, pedidos/tablas, diálogos, Ayuda y reglas móviles. Los controles de prueba se mantienen separados del modo normal.

## Interfaz generada desde JavaScript

Pedidos y sus botones de compra/especie: [`renderOrders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3994). Inventario de micelios: [`openMyceliumInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4019). Menú superior de mejoras: [`updateUpgradeMenu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14948), [`availableUpgradeEntries`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14891) y [`buyMenuUpgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15000). Los controles históricos ocultos siguen en [`updateUpgradeControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8564). Economía/saldo y modo prueba: [`updateEconomyControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14507) y [`updateWallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14491). Controles del cuarto estéril: [`updateK0Controls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10021). Entregas de tienda: [`updateShopControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5050). Preferencia de sonido: [`updateSoundButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13427). Avisos de desbloqueo: [`renderUnlockNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14675). Visibilidad del recorrido: [`updateProgressionControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14848) y [`refreshProgression`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L14681). Flecha encadenada: [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16131), [`routeGuideTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L16046) y [`currentRouteStep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15369). Los pasos específicos de Cordyceps distinguen vista, medio y especie en [`currentRouteModule`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15363).

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: [`beginDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15029), [`updateDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15041), [`point`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1111), [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10825), [`playerAction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L13392). Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: `mixBasket`, `jarCase`, `mixTray`, `bagSlot`, `pasteurTankRect`, `incSlots`, `woodStations`, `preparedPoolCards`, `gloveRect`, `chemistryBenches`, `extractionRects`, `nutrientRects`, `spirulinaRects`, `shopInventoryCards` y `missingItemRects`.

## Iconos de cada tipo de arrastre

32 tipos explícitos en un único catálogo. Render común: [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15270); tamaño, centro del mouse y separación/límites para dedo: [`dragPreviewLayout`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15248). Todos los tipos dibujan sólo el objeto, sin tarjeta opaca ni marco adicional; `bare: true` es la política por defecto. Los módulos ya no dibujan vistas previas por separado. El inventario previo y las familias pendientes están en [AUDITORIA-ASSETS-REMODELACION.md](AUDITORIA-ASSETS-REMODELACION.md).

| Tipo de arrastre | Icono | Fondo adicional | Código |
|---|---|---|---|
| `bale` | Paca de paja | Ninguno | [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15096) |
| `raw` | Paja triturada | Ninguno | [`raw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15097) |
| `straw` | Paja pasteurizada | Ninguno | [`straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15098) |
| `mixture` | Paja con micelio | Ninguno | [`mixture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15099) |
| `lime` | Bote de cal | Ninguno | [`lime`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15100) |
| `jar` | Micelio | Ninguno | [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15101) |
| `cleaning` | Spray y trapo | Ninguno | [`cleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15109) |
| `incbag` | Bolsa sin incubar | Ninguno | [`incbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15110) |
| `readybag` | Bolsa de incubación | Ninguno | [`readybag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15120) |
| `fruitbag` | Bloque para fructificar | Ninguno | [`fruitbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15130) |
| `harvestbag` | Hongos o bloque para composta | Ninguno | [`harvestbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15140) |
| `woodRaw` | Aserrín o arroz | Ninguno | [`woodRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15143) |
| `woodBag` | Bolsa o frasco vacío | Ninguno | [`woodBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15148) |
| `woodNutrients` | Nutrientes | Ninguno | [`woodNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15156) |
| `woodPrepared` | Recipiente preparado | Ninguno | [`woodPrepared`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15164) |
| `gloveInoculum` | Micelio interior | Ninguno | [`gloveInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15169) |
| `gloveWood` | Bolsa esterilizada | Ninguno | [`gloveWood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15177) |
| `gloveJar` | Frasco de micelio | Ninguno | [`gloveJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15182) |
| `gloveClean` | Limpieza de cabina | Ninguno | [`gloveClean`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15190) |
| `cordyInoculum` | Cultivo líquido maduro | Ninguno | [`cordyInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15195) |
| `liquidPetri` | Placa Petri | Ninguno | [`liquidPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15200) |
| `liquidJar` | Cultivo líquido inoculado | Ninguno | [`liquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15201) |
| `chemRaw` | Hongos para extracción | Ninguno | [`chemRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15206) |
| `chemGround` | Hongos molidos | Ninguno | [`chemGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15209) |
| `chemFlask` | Matraz de extracto | Ninguno | [`chemFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15212) |
| `chemSalt` | Sales A o B | Ninguno | [`chemSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15215) |
| `spirulinaFeed` | Solución nutritiva | Ninguno | [`spirulinaFeed`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15224) |
| `spirulinaCrop` | Espirulina cosechada | Ninguno | [`spirulinaCrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15227) |
| `spirulinaMother` | Matraz madre | Ninguno | [`spirulinaMother`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15230) |
| `spirulinaInoculum` | Matraz de inoculación | Ninguno | [`spirulinaInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15233) |
| `shopInventory` | Producto de tienda | Ninguno | [`shopInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15236) |
| `shopcustomer` | Cliente seleccionado | Ninguno | [`shopcustomer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L15239) |

En celular/lápiz el encuadre del icono intenta medir 76 píxeles CSS y queda separado 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Asistentes: planificación y avisos

Tareas compartidas con contexto y ejecución única: [`createAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8331); cancelación: [`cancelAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8350). Preparación principal: [`nextHelperTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8387) y [`advanceAutomation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8485); laboratorio: [`nextLabTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9073) y [`advanceLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9359). Los cambios de receta pasan por [`setPrepRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10170) y [`setSterilizerRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10180).

Avisos de faltantes/capacidad/pasos manuales: [`helperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8358), [`labHelperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9325) y [`labInoculationNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9297). Ambas burbujas comparten [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8551); la de laboratorio se eleva cuando quedan muy juntas en la sala principal.

## Paleta actual

1842 colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

`#0c171e` · `#0e2028` · `#101c23` · `#142632` · `#142b34` · `#17283a` · `#172a30` · `#173039` · `#182f38` · `#1c333c` · `#1f3942` · `#223e43` · `#233f49` · `#243a39` · `#243b49` · `#243b4d` · `#24434a` · `#24434f` · `#244e35` · `#253e45` · `#254c35` · `#263f47` · `#263f4c` · `#28333d` · `#293b43` · `#29404a` · `#2c4650` · `#2c4d56` · `#2f4f55` · `#2f5056` · `#304554` · `#304b50` · `#304d59` · `#304f53` · `#304f56` · `#304f59` · `#314654` · `#314b53` · `#314d53` · `#314f54` · `#324c60` · `#32505b` · `#326b5a` · `#334b51` · `#334d51` · `#34413e` · `#344b62` · `#344d5e` · `#344e48` · `#344f51` · `#344f59` · `#34515b` · `#34545f` · `#345660` · `#345762` · `#345a65` · `#345b66` · `#345c65` · `#345c67` · `#354854` · `#354d55` · `#354f4c` · `#354f5b` · `#355563` · `#35575d` · `#35585e` · `#355b65` · `#355c64` · `#355c66` · `#355e68` · `#364b4c` · `#365652` · `#36575c` · `#36585f` · `#365863` · `#365b65` · `#375b67` · `#385762` · `#385868` · `#385a5c` · `#385b61` · `#385b66` · `#385c65` · `#385d65` · `#385e66` · `#385e70` · `#386e75` · `#394e49` · `#395a68` · `#395d65` · `#395d68` · `#395e6b` · `#3a3033` · `#3a454d` · `#3a5b61` · `#3a5d65` · `#3b3436` · `#3b505a` · `#3b5960` · `#3b6065` · `#3b6269` · `#3b775e` · `#3c5b63` · `#3c626e` · `#3d5d61` · `#3d6067` · `#3e514c` · `#3e5b65` · `#3e605e` · `#3e6069` · `#3e6266` · `#3f6266` · `#3f626b` · `#3f666f` · `#3f6a73` · `#3f715f` · `#3f8159` · `#40515a` · `#405b68` · `#414640` · `#415d5e` · `#416b74` · `#416b75` · `#416e61` · `#42636a` · `#42676a` · `#42686f` · `#426970` · `#426a74` · `#426c73` · `#436a88` · `#436b76` · `#438458` · `#44645e` · `#446872` · `#446a6b` · `#456362` · `#45645f` · `#45666a` · `#466557` · `#466c74` · `#47676c` · `#476c73` · `#476d74` · `#476f71` · `#486d72` · `#486d7c` · `#486e73` · `#496769` · `#496b70` · `#496b73` · `#496c4d` · `#496d70` · `#496d75` · `#496e70` · `#496e71` · `#496f50` · `#496f73` · `#497975` · `#4a6b70` · `#4a7179` · `#4a7c7b` · `#4b5744` · `#4b6e76` · `#4b6f70` · `#4b7076` · `#4b7172` · `#4b727a` · `#4c3835` · `#4c6e6e` · `#4c6e72` · `#4c7071` · `#4c7375` · `#4c7476` · `#4c757d` · `#4d6d70` · `#4d6f70` · `#4d707c` · `#4d7476` · `#4d767d` · `#4e392b` · `#4e4535` · `#4e7375` · `#4e7476` · `#4e7478` · `#4e777c` · `#4f6d6b` · `#4f7378` · `#4f7476` · `#4f7579` · `#4f7679` · `#4f777d` · `#4f7959` · `#503e34` · `#507a80` · `#516b61` · `#51777d` · `#526b6b` · `#526c70` · `#526e70` · `#526f73` · `#52746a` · `#52747a` · `#527577` · `#52757c` · `#52767a` · `#527680` · `#52777a` · `#52777b` · `#527878` · `#527b80` · `#527c80` · `#53333b` · `#536158` · `#536474` · `#536b64` · `#536c58` · `#536d5c` · `#537169` · `#537780` · `#537b79` · `#542b23` · `#54746f` · `#54776e` · `#547776` · `#54777b` · `#547974` · `#547b7e` · `#557585` · `#557b77` · `#557c7b` · `#557c80` · `#557d7b` · `#557d7e` · `#566f70` · `#56766e` · `#567873` · `#567b70` · `#567b78` · `#567c78` · `#567c7c` · `#577273` · `#577567` · `#577784` · `#577b7b` · `#577d7c` · `#577f7d` · `#587b76` · `#587b7b` · `#587c7d` · `#587c83` · `#587d78` · `#587d79` · `#587d7a` · `#587e81` · `#59665e` · `#59684f` · `#596d6c` · `#597c7e` · `#597d7c` · `#597f82` · `#5a7c79` · `#5a7d7d` · `#5b7460` · `#5b7974` · `#5c7780` · `#5c9f98` · `#5d704f` · `#5d7e83` · `#5d805c` · `#5d8184` · `#5d8480` · `#5e3025` · `#5e432c` · `#5e5840` · `#5e8b7c` · `#5f3f2b` · `#5f8383` · `#5f8584` · `#607181` · `#60796d` · `#607e70` · `#60857e` · `#61251f` · `#617779` · `#617b86` · `#617c74` · `#617f7c` · `#617f7d` · `#624638` · `#62878b` · `#637f73` · `#638887` · `#638b83` · `#638b87` · `#638b8d` · `#638c84` · `#638c8b` · `#638d88` · `#642f24` · `#64867e` · `#648789` · `#648886` · `#649d91` · `#655c41` · `#65736a` · `#657f70` · `#658589` · `#658782` · `#658983` · `#658a88` · `#658b87` · `#658e8b` · `#66543a` · `#665940` · `#668079` · `#66868a` · `#668b83` · `#668b85` · `#668b88` · `#678263` · `#679e91` · `#687780` · `#688784` · `#688b86` · `#688d8b` · `#688d8c` · `#688e88` · `#694f36` · `#698e80` · `#69b794` · `#6a8465` · `#6a8580` · `#6a8a8c` · `#6a8d86` · `#6a9084` · `#6a928d` · `#6a9383` · `#6a9388` · `#6b5745` · `#6b705d` · `#6b8b80` · `#6b8c88` · `#6b9585` · `#6b9869` · `#6c644c` · `#6c7d7d` · `#6c8653` · `#6c8e95` · `#6c9090` · `#6c9290` · `#6c9292` · `#6d624a` · `#6d8c84` · `#6d8e83` · `#6d9188` · `#6d9287` · `#6d9aa5` · `#6da9ba` · `#6e694a` · `#6e775b` · `#6e8c8b` · `#6e8d88` · `#6e8f7c` · `#6ea6a0` · `#6f2923` · `#6f4a30` · `#6f5138` · `#6f5338` · `#6f8b77` · `#6f8b81` · `#6f9473` · `#6f9490` · `#6f9591` · `#6f9690` · `#70543f` · `#708f8e` · `#70998f` · `#718e87` · `#71908b` · `#71918a` · `#719284` · `#71938d` · `#71958e` · `#728e88` · `#72928f` · `#72938e` · `#729390` · `#72968f` · `#729692` · `#73938b` · `#73968f` · `#73998c` · `#73998f` · `#739f95` · `#74828a` · `#748f83` · `#749c7e` · `#755139` · `#75927f` · `#759592` · `#759994` · `#759a97` · `#759c93` · `#75b7a7` · `#762722` · `#765b40` · `#76978e` · `#76979b` · `#775d42` · `#776f4b` · `#78918a` · `#78968c` · `#78978d` · `#78998f` · `#789b8d` · `#789b97` · `#795538` · `#796143` · `#79938b` · `#79ae64` · `#79b9c1` · `#7a5a3c` · `#7a9684` · `#7a9b94` · `#7a9b95` · `#7baeb6` · `#7c4228` · `#7c8e78` · `#7c9a8e` · `#7ca6ae` · `#7cb68b` · `#7d5537` · `#7d5d40` · `#7d9186` · `#7d9a97` · `#7d9d92` · `#7d9e95` · `#7e9380` · `#7e9678` · `#7e9e91` · `#7e9e99` · `#7e9f95` · `#7f3431` · `#7f9f90` · `#7faaa0` · `#805345` · `#809f99` · `#80a5cb` · `#80b0ac` · `#80baa5` · `#80bca9` · `#81967c` · `#81977c` · `#819e90` · `#829f95` · `#82a5a1` · `#82a9b6` · `#839781` · `#839a83` · `#839f98` · `#83a49b` · `#83a5aa` · `#83b9df` · `#83bfc7` · `#83c6ad` · `#843925` · `#84928b` · `#84a69a` · `#855b40` · `#85978a` · `#85a3a0` · `#85c3ca` · `#86b8a5` · `#879c82` · `#879e95` · `#87a69a` · `#87aaa0` · `#87aab7` · `#88754d` · `#88998a` · `#88a79b` · `#88a7a0` · `#88a99f` · `#895f3f` · `#897858` · `#89946e` · `#89a69a` · `#89c5d6` · `#8a2e24` · `#8a3025` · `#8a3e27` · `#8a714f` · `#8aa09a` · `#8aaba0` · `#8aaba1` · `#8aabb0` · `#8aada1` · `#8aafa0` · `#8aafa1` · `#8b6547` · `#8b6846` · `#8b795a` · `#8b9e9d` · `#8ba79e` · `#8ba9a1` · `#8babaa` · `#8baca0` · `#8bafbc` · `#8bd1d1` · `#8c2b23` · `#8c613e` · `#8c7756` · `#8c977f` · `#8ca49b` · `#8caa8d` · `#8caaa0` · `#8d4934` · `#8d6947` · `#8d6c49` · `#8d724e` · `#8d9e85` · `#8da99a` · `#8da9a3` · `#8daaa6` · `#8dc4aa` · `#8e633f` · `#8e7953` · `#8eA187` · `#8ea48d` · `#8ea99b` · `#8eaaa0` · `#8eaaa5` · `#8eaba0` · `#8eacb2` · `#8eada0` · `#8eae7c` · `#8eafa0` · `#8eafad` · `#8eb8a2` · `#8ec6ae` · `#8f3024` · `#8f652b` · `#8f6e51` · `#8f7547` · `#8fA18a` · `#8fA38c` · `#8fa18f` · `#8fa19a` · `#8fa389` · `#8fa398` · `#8fa895` · `#8fa998` · `#8fa99e` · `#8fa99f` · `#8fa9ac` · `#8fadb2` · `#8fbccc` · `#90aea0` · `#91653f` · `#91a39c` · `#91a585` · `#91aaa0` · `#91ada5` · `#91afaa` · `#91b3a9` · `#91b783` · `#927150` · `#927c58` · `#92aaa0` · `#92ada4` · `#92b29a` · `#92e3d0` · `#936f45` · `#937545` · `#93aaa0` · `#93aea6` · `#93babd` · `#946f3e` · `#94b0a1` · `#94b2af` · `#94b8b6` · `#94d0b5` · `#956039` · `#95694d` · `#956a34` · `#95a98f` · `#95b09c` · `#963c30` · `#965a46` · `#967451` · `#96765c` · `#96afa9` · `#96c69c` · `#976f4c` · `#977451` · `#97ceba` · `#986b47` · `#987039` · `#987145` · `#987351` · `#987448` · `#98784b` · `#987c56` · `#987d58` · `#98916b` · `#997446` · `#998762` · `#99b2a6` · `#99b5a6` · `#9a7044` · `#9a734e` · `#9a7955` · `#9a9a87` · `#9aa99e` · `#9aa99f` · `#9aac94` · `#9aad9c` · `#9aafa1` · `#9ab5ab` · `#9b4b2b` · `#9b6d45` · `#9b814e` · `#9b8353` · `#9bafa0` · `#9bb3aa` · `#9bb6b4` · `#9bbfb2` · `#9c7c4e` · `#9c7f58` · `#9caa8d` · `#9caa93` · `#9cae95` · `#9cae9b` · `#9caf9d` · `#9ccbb0` · `#9d743c` · `#9d814f` · `#9db19d` · `#9db5ac` · `#9db7b6` · `#9e715a` · `#9e885c` · `#9eb5a5` · `#9eb7ad` · `#9faf8e` · `#9fb4a4` · `#9fb5a7` · `#9fb8a9` · `#9fbcb0` · `#a0bab4` · `#a1b293` · `#a1bbb0` · `#a2684f` · `#a27849` · `#a27a52` · `#a2815c` · `#a28e61` · `#a29166` · `#a2b192` · `#a2b7a4` · `#a2b7a6` · `#a2ceba` · `#a2d1b5` · `#a33031` · `#a33b27` · `#a34f3a` · `#a37d52` · `#a3805c` · `#a38250` · `#a3b17a` · `#a3b397` · `#a3bcb0` · `#a3bfb1` · `#a4b699` · `#a4baab` · `#a4bbac` · `#a4bfb1` · `#a4c4ac` · `#a4cfcb` · `#a4d9bd` · `#a4e2e4` · `#a58151` · `#a58b69` · `#a58f6a` · `#a5b69e` · `#a5bc83` · `#a5bcb0` · `#a5bdb0` · `#a5beb0` · `#a5c7b7` · `#a64028` · `#a6764c` · `#a687ad` · `#a69771` · `#a6977e` · `#a69c74` · `#a69d78` · `#a6a995` · `#a6ae8b` · `#a6b2a7` · `#a6b598` · `#a6b799` · `#a6b8a4` · `#a6b8aa` · `#a6b9ac` · `#a6baa8` · `#a6c0ac` · `#a6c6bd` · `#a6c8bf` · `#a6cdb1` · `#a7493e` · `#a77f46` · `#a79873` · `#a7b6aa` · `#a7b9a7` · `#a7bca2` · `#a7bcb0` · `#a7c0af` · `#a7c39a` · `#a7d8bc` · `#a87a68` · `#a87c56` · `#a88f68` · `#a89570` · `#a89e7c` · `#a89f83` · `#a8b0a7` · `#a8b99a` · `#a8b99b` · `#a8bdaa` · `#a8beb0` · `#a8bfb0` · `#a8c0ad` · `#a8c1b1` · `#a98955` · `#a9afa1` · `#a9b695` · `#a9b9a9` · `#a9bd7b` · `#a9bfb0` · `#a9c6b7` · `#a9c6c2` · `#aa3b25` · `#aa9670` · `#aaba98` · `#aabdab` · `#aabfaf` · `#aac8b2` · `#abb6a9` · `#abb9a1` · `#abbba3` · `#abc7d0` · `#ac572b` · `#ac7f50` · `#ac9d78` · `#accfd5` · `#acd6ce` · `#ad8552` · `#ad9a70` · `#adba9e` · `#adbb9f` · `#adc1b2` · `#adc6bc` · `#add2ab` · `#ae8249` · `#ae976d` · `#aeb7ac` · `#aeb99c` · `#aebbad` · `#aebcaf` · `#aebda9` · `#aebfaf` · `#aec4b9` · `#aec5b0` · `#af813e` · `#afbd9f` · `#afc396` · `#afc3b6` · `#afca8c` · `#afd5bd` · `#b08a59` · `#b08c51` · `#b0bfac` · `#b0c6a4` · `#b0c8ae` · `#b0d9d5` · `#b18340` · `#b18460` · `#b18b57` · `#b18b5e` · `#b18c57` · `#b18d59` · `#b18f59` · `#b1bba0` · `#b1c0a5` · `#b1c6b5` · `#b1e5e4` · `#b28a60` · `#b29a70` · `#b2a784` · `#b2bca7` · `#b2cebe` · `#b38253` · `#b3834e` · `#b38b59` · `#b38c56` · `#b38e59` · `#b3a17d` · `#b3bbae` · `#b3bda0` · `#b3c1a3` · `#b3c6b8` · `#b3c6be` · `#b44729` · `#b47d69` · `#b49565` · `#b49a68` · `#b49b70` · `#b49e75` · `#b4ad88` · `#b4c4b1` · `#b4c6b3` · `#b4c9a3` · `#b4dce2` · `#b58b52` · `#b58c60` · `#b59173` · `#b5c2a7` · `#b5c6b6` · `#b5ccc2` · `#b5dbc0` · `#b5ddbf` · `#b66e51` · `#b67d2c` · `#b6965c` · `#b6b8a1` · `#b6b9a0` · `#b6bfa0` · `#b6c39c` · `#b6c5b0` · `#b6c8b7` · `#b6d0b3` · `#b75946` · `#b75a2b` · `#b78c5b` · `#b7985d` · `#b7a27a` · `#b7baad` · `#b7c1a8` · `#b7c3a5` · `#b7c7b5` · `#b7c7b6` · `#b7c9ad` · `#b7cbc5` · `#b7ccbd` · `#b7ccc0` · `#b7cfb8` · `#b7cfbf` · `#b84e2b` · `#b85a2b` · `#b88562` · `#b88a51` · `#b8976e` · `#b8a564` · `#b8a570` · `#b8ad89` · `#b8af90` · `#b8b49a` · `#b8b59e` · `#b8c1a4` · `#b8c2a6` · `#b8c3a9` · `#b8c4af` · `#b8c6ad` · `#b8c6ae` · `#b8c6b3` · `#b8c8ad` · `#b8c9b8` · `#b8ced0` · `#b8d1b0` · `#b8d1b3` · `#b8d4d6` · `#b8d6b9` · `#b8dec2` · `#b8eef0` · `#b95141` · `#b9955f` · `#b99a5b` · `#b9a770` · `#b9ad8b` · `#b9baad` · `#b9c7a6` · `#b9c9b5` · `#b9c9b7` · `#b9cabe` · `#b9cbb3` · `#b9cbbb` · `#b9ccb0` · `#b9cecd` · `#b9cfbe` · `#b9d9cc` · `#b9ddbf` · `#bac6a9` · `#bac7ab` · `#bacbb6` · `#bad4c3` · `#bad6bc` · `#badbc5` · `#bae398` · `#bba174` · `#bbc8ae` · `#bbd2ae` · `#bbd4ba` · `#bc5436` · `#bc7740` · `#bc8539` · `#bc955c` · `#bca982` · `#bcaf92` · `#bccba9` · `#bcd0b7` · `#bce5dd` · `#bd6229` · `#bd805e` · `#bd8359` · `#bd845a` · `#bd8e53` · `#bd934b` · `#bd965f` · `#bd9857` · `#bd995f` · `#bd9b58` · `#bd9c62` · `#bdac7d` · `#bdb397` · `#bdc1b3` · `#bdc6a3` · `#bdc7b0` · `#bdcbb7` · `#bdcbb9` · `#bdcdb5` · `#bdcdb7` · `#bdcdb8` · `#bdcfbf` · `#bdcfca` · `#bdd0c3` · `#bdd3c8` · `#bde1df` · `#be9555` · `#be9b64` · `#bea57e` · `#bec3a8` · `#bec9ad` · `#becbb6` · `#becfaf` · `#bed0bc` · `#bed1b6` · `#bf944d` · `#bf9c60` · `#bfae8b` · `#bfccaf` · `#bfccb1` · `#bfcfb2` · `#bfd09a` · `#bfd0b8` · `#bfd0ba` · `#c0aa7d` · `#c0cdb8` · `#c0d0b4` · `#c0d98c` · `#c15a36` · `#c19c5c` · `#c1b99a` · `#c1bca9` · `#c1bdad` · `#c1bdae` · `#c1c5ab` · `#c1c8aa` · `#c1cdb3` · `#c1d0b9` · `#c1d4bd` · `#c1d4cd` · `#c1d8b6` · `#c2a67d` · `#c2b078` · `#c2b27e` · `#c2cbb0` · `#c2cdb0` · `#c2ceba` · `#c2d0b6` · `#c2d1bb` · `#c2e0c2` · `#c39960` · `#c39a56` · `#c39d63` · `#c3a77a` · `#c3ad80` · `#c3c779` · `#c3cfb3` · `#c3d0b9` · `#c3d6b7` · `#c3d6bc` · `#c3d7bc` · `#c3d8b5` · `#c3d9b7` · `#c4b28b` · `#c4c68b` · `#c4c7b5` · `#c4c9aa` · `#c4c9b7` · `#c4ca9f` · `#c4ccad` · `#c4cdb5` · `#c4cfb0` · `#c4cfb1` · `#c4d0b8` · `#c4d3b6` · `#c4d6bc` · `#c54442` · `#c59a4f` · `#c59b61` · `#c5a56e` · `#c5a875` · `#c5aa7f` · `#c5b77f` · `#c5b891` · `#c5c7b7` · `#c5cdb1` · `#c5ceba` · `#c5d0b3` · `#c5d1b6` · `#c5d1bd` · `#c5d2b9` · `#c5d3ba` · `#c5d7ce` · `#c5d9d1` · `#c69879` · `#c69b62` · `#c6a46b` · `#c6a477` · `#c6ae82` · `#c6b18b` · `#c6b98c` · `#c6bb98` · `#c6c3ac` · `#c6c4a6` · `#c6c69a` · `#c6c7a5` · `#c6cbb3` · `#c6cdb7` · `#c6cfaf` · `#c6cfb1` · `#c6d0af` · `#c6d1ad` · `#c6d1b8` · `#c6d7d1` · `#c6d8b7` · `#c6d9c8` · `#c6e1ca` · `#c74443` · `#c78740` · `#c7b27d` · `#c7b58d` · `#c7b78b` · `#c7c6af` · `#c7cbb2` · `#c7d1b3` · `#c7d2bd` · `#c7d7c2` · `#c7d8bc` · `#c7d8c7` · `#c7e0d6` · `#c88243` · `#c8a36b` · `#c8a86b` · `#c8b38b` · `#c8c5a7` · `#c8ccac` · `#c8d4bb` · `#c8d5b9` · `#c8d5bb` · `#c8d5cb` · `#c8d8a4` · `#c8d9cd` · `#c8dac3` · `#c8dbcb` · `#c99b63` · `#c9a66a` · `#c9b887` · `#c9b88e` · `#c9b98d` · `#c9bd9b` · `#c9caae` · `#c9cdb0` · `#c9d1ba` · `#c9d4bd` · `#c9d5ba` · `#c9d7b8` · `#c9dfe0` · `#c9e4c5` · `#ca8252` · `#cab58b` · `#cabd9f` · `#cad0ba` · `#cad3ae` · `#cad5b7` · `#cad8bc` · `#cadbd1` · `#cadfc3` · `#cb7634` · `#cb9474` · `#cbb67d` · `#cbbc96` · `#cbbd96` · `#cbd0aa` · `#cbd3b8` · `#cbd3bc` · `#cbd4b3` · `#cbd7b8` · `#cbdcc0` · `#cc9e66` · `#ccd2b2` · `#ccd4b9` · `#ccd7bd` · `#cdb279` · `#cdbf92` · `#cdd5af` · `#cec6a8` · `#cfa17f` · `#cfad73` · `#cfae80` · `#cfcb95` · `#cfceb0` · `#cfd6ba` · `#cfddba` · `#cfddc3` · `#d06a31` · `#d0a66f` · `#d0b478` · `#d0b487` · `#d0b584` · `#d0c57b` · `#d0d0bc` · `#d0d1ad` · `#d0d5b5` · `#d0d9c2` · `#d0dabe` · `#d0dec7` · `#d1a56f` · `#d1af6b` · `#d1bc92` · `#d1c29a` · `#d1d7b9` · `#d1d9be` · `#d1dac0` · `#d1dcc2` · `#d1dfc4` · `#d29476` · `#d2a36a` · `#d2a46a` · `#d2aa69` · `#d2bc92` · `#d2c398` · `#d2c39b` · `#d2d2b8` · `#d2d5ad` · `#d2d5b7` · `#d2d8bb` · `#d2d9bd` · `#d2dec6` · `#d2ded0` · `#d2dfca` · `#d2e7c7` · `#d3a554` · `#d3ad72` · `#d3bb77` · `#d3c098` · `#d3c39c` · `#d3c4a6` · `#d3c6a0` · `#d3c99f` · `#d3d0b9` · `#d3d3af` · `#d3d8b8` · `#d3d9b8` · `#d3d9ba` · `#d3d9bb` · `#d3dcc2` · `#d3ddc4` · `#d3dec1` · `#d3dec4` · `#d49a73` · `#d49b54` · `#d4ac5b` · `#d4b27b` · `#d4b36f` · `#d4b76f` · `#d4c28a` · `#d4c59f` · `#d4c7a4` · `#d4cdb9` · `#d4ceb0` · `#d4d8b8` · `#d4d8b9` · `#d4dbc0` · `#d4ddc6` · `#d4dfc9` · `#d4e2c4` · `#d4e3b2` · `#d4e3c4` · `#d5bd87` · `#d5c49c` · `#d5c59a` · `#d5c698` · `#d5cbb0` · `#d5d1ab` · `#d5d1ad` · `#d5d9bc` · `#d5d9be` · `#d5deca` · `#d5dfb8` · `#d5e5c8` · `#d5e6c6` · `#d6b26a` · `#d6b278` · `#d6b780` · `#d6bb7c` · `#d6bf93` · `#d6c7a5` · `#d6c8a0` · `#d6d4b9` · `#d6d6b6` · `#d6d9be` · `#d6dcc0` · `#d6dcc2` · `#d6ddc4` · `#d6df9a` · `#d6dfc1` · `#d6dfc3` · `#d6dfc6` · `#d6e3cd` · `#d6e6c5` · `#d6e8d3` · `#d7b57d` · `#d7b874` · `#d7bd8a` · `#d7c39b` · `#d7cba9` · `#d7ccaa` · `#d7d0bc` · `#d7d2ac` · `#d7d9b4` · `#d7d9b5` · `#d7dec0` · `#d7dfc2` · `#d7dfc7` · `#d7dfc8` · `#d7e2c4` · `#d7e5c3` · `#d8857f` · `#d8a763` · `#d8af5c` · `#d8afa1` · `#d8b47b` · `#d8b87d` · `#d8bc85` · `#d8bd85` · `#d8bd89` · `#d8ca9f` · `#d8cfac` · `#d8d4b0` · `#d8d7b8` · `#d8d8b8` · `#d8d9b8` · `#d8dba1` · `#d8dec2` · `#d8dec4` · `#d8dfc3` · `#d8e0c1` · `#d8e1c0` · `#d8e1c8` · `#d8e2c8` · `#d8e2c9` · `#d8e9c7` · `#d99750` · `#d9b781` · `#d9b89b` · `#d9b97b` · `#d9b97f` · `#d9ba7d` · `#d9c48c` · `#d9c58c` · `#d9caa2` · `#d9d4b6` · `#d9d6b8` · `#d9d7ad` · `#d9d7b6` · `#d9dcc0` · `#d9ddbf` · `#d9ddc2` · `#d9dfbf` · `#d9dfc0` · `#d9dfc3` · `#d9dfc4` · `#d9dfc5` · `#d9dfc9` · `#d9e3c7` · `#d9e4cf` · `#d9e5d0` · `#dadcc0` · `#dae1c6` · `#dae2c4` · `#dae6cc` · `#dbb17e` · `#dbb365` · `#dbc18d` · `#dbe0c7` · `#dbe1b9` · `#dbe5d8` · `#dbe6c5` · `#dcaf7c` · `#dcb580` · `#dcc18b` · `#dcc296` · `#dcc69b` · `#dcd6b8` · `#dcd6b9` · `#dcd8ba` · `#dcd9b8` · `#dce0b6` · `#dce0c0` · `#dce1c7` · `#dce1c8` · `#dce2b2` · `#dce2bf` · `#dce2c5` · `#dce3c2` · `#dce3c4` · `#dce3c9` · `#dce4c8` · `#dce4ca` · `#dce5c9` · `#dce5d2` · `#dce7ca` · `#dce8c7` · `#dda23f` · `#ddbd7f` · `#ddcca0` · `#ddcca6` · `#ddce9c` · `#ddcfaa` · `#ddd0a7` · `#dddcc0` · `#dde1c2` · `#dde4ca` · `#dde5c9` · `#dde7cf` · `#dde9d2` · `#de7525` · `#debe7e` · `#dec28b` · `#dec38a` · `#ded0af` · `#dedfc0` · `#dedfc1` · `#dedfc4` · `#dee4cb` · `#df6c53` · `#dfE6cc` · `#dfad45` · `#dfb58f` · `#dfbc84` · `#dfc185` · `#dfcb8d` · `#dfcf9e` · `#dfd3ae` · `#dfdbc0` · `#dfdfb8` · `#dfdfbf` · `#dfdfc2` · `#dfe3c9` · `#dfe5ce` · `#dfe6ca` · `#e0bb7d` · `#e0c99a` · `#e0c99b` · `#e0cd96` · `#e0d1ad` · `#e0d2ad` · `#e0d2af` · `#e0dcb9` · `#e0dcc0` · `#e0df8f` · `#e0dfc2` · `#e0e2bd` · `#e0e2c7` · `#e0e3c8` · `#e0e4ca` · `#e0e9cd` · `#e0e9d1` · `#e1a25c` · `#e1c28c` · `#e1cca2` · `#e1d3ad` · `#e1d4a5` · `#e1d6b9` · `#e1d8b5` · `#e1dec0` · `#e1e3c7` · `#e1e3c9` · `#e1e5c9` · `#e1e6c7` · `#e1e6cc` · `#e1e6ce` · `#e1e9d7` · `#e1edca` · `#e2a25a` · `#e2b66f` · `#e2b67b` · `#e2b77d` · `#e2bd7d` · `#e2c18a` · `#e2c88f` · `#e2d3aa` · `#e2d6ae` · `#e2d8b5` · `#e2dac2` · `#e2dbb9` · `#e2e3c3` · `#e2e8c5` · `#e2e8cc` · `#e2ebd0` · `#e2ebdf` · `#e3514e` · `#e3b77c` · `#e3ba7a` · `#e3ba81` · `#e3c47e` · `#e3c590` · `#e3c795` · `#e3cc8b` · `#e3d6ad` · `#e3dcc0` · `#e3e4c7` · `#e3e4c8` · `#e3e5c9` · `#e3e7cb` · `#e3e8cc` · `#e3e8d1` · `#e3e9cd` · `#e4ae82` · `#e4b964` · `#e4c47c` · `#e4c58f` · `#e4c68c` · `#e4d4a0` · `#e4d7b5` · `#e4d8b1` · `#e4ddc8` · `#e4ddc9` · `#e4dfbe` · `#e4e4c7` · `#e4e5c7` · `#e4e5c8` · `#e4e5c9` · `#e4e6cc` · `#e4e7c9` · `#e4e8c7` · `#e4e8ce` · `#e4e9ce` · `#e4e9d9` · `#e4edda` · `#e5be82` · `#e5c488` · `#e5c883` · `#e5c99a` · `#e5cd8a` · `#e5d1a0` · `#e5d5ad` · `#e5ddbf` · `#e5e3bc` · `#e5e3c5` · `#e5e4c5` · `#e5e5c7` · `#e5e5c9` · `#e5e6c7` · `#e5e9cb` · `#e5e9cf` · `#e5ece0` · `#e6a04c` · `#e6b65e` · `#e6b760` · `#e6bf6d` · `#e6c586` · `#e6cfa0` · `#e6d2a8` · `#e6d5a5` · `#e6ddbd` · `#e6dec0` · `#e6dfba` · `#e6e2cb` · `#e6e4c0` · `#e6e4c1` · `#e6e5cb` · `#e6e6ca` · `#e6e7c7` · `#e6e8cf` · `#e6e9cb` · `#e6ebce` · `#e6ecd3` · `#e6ecd4` · `#e6edcf` · `#e7ac4d` · `#e7ac7c` · `#e7b574` · `#e7b858` · `#e7c48d` · `#e7c581` · `#e7c85e` · `#e7d4a5` · `#e7d4a9` · `#e7d5b4` · `#e7dbb9` · `#e7deba` · `#e7e4bc` · `#e7e4c4` · `#e7e4c8` · `#e7e5c7` · `#e7e6c8` · `#e7e6cb` · `#e7e8c5` · `#e7e8c9` · `#e7ead4` · `#e7ead9` · `#e7edd2` · `#e8b36c` · `#e8bd95` · `#e8bf6d` · `#e8c17b` · `#e8c58f` · `#e8cb92` · `#e8d5aa` · `#e8d69a` · `#e8d99b` · `#e8dab0` · `#e8dbb6` · `#e8ddbf` · `#e8dfb3` · `#e8e4c2` · `#e8e6c9` · `#e8e9cd` · `#e8edcf` · `#e8efd2` · `#e9c16e` · `#e9c58a` · `#e9d6a1` · `#e9d9b3` · `#e9dbb6` · `#e9dcc0` · `#e9dfbf` · `#e9e0ba` · `#e9e2b3` · `#e9e5b9` · `#e9e5c8` · `#e9e5ca` · `#e9e8c9` · `#e9ead2` · `#e9edcf` · `#eac8a0` · `#ead29b` · `#ead7aa` · `#ead8af` · `#eadbb4` · `#eb9d3b` · `#ebc481` · `#ebce97` · `#ebd49a` · `#ebe7ce` · `#ebedcf` · `#ecb37b` · `#ecc88b` · `#ecd49d` · `#ece0af` · `#ece0bb` · `#ece2bd` · `#ece2cb` · `#ece4ce` · `#ece8cb` · `#ece9cb` · `#ed9c77` · `#edbd5b` · `#edbd69` · `#edc29a` · `#edc858` · `#edc89f` · `#edcb8c` · `#edd09b` · `#eddbab` · `#eddfb3` · `#eddfb8` · `#eddfb9` · `#ede2c4` · `#edf0d0` · `#edf0d2` · `#edf0d3` · `#edf0d4` · `#edf0d7` · `#edf1d5` · `#eea17f` · `#eee0b6` · `#eee0b7` · `#eee1ba` · `#eee1bc` · `#eee1c3` · `#eee2bd` · `#eee2c6` · `#eee3bf` · `#eee3c6` · `#eee4c4` · `#eee4c7` · `#eee5bd` · `#eee5c9` · `#eee5d1` · `#eee6cb` · `#eee7d3` · `#eee7d4` · `#eee8ca` · `#eef0c9` · `#eef0d0` · `#eef0da` · `#eef2d6` · `#ef9c75` · `#efcb7b` · `#efdfb8` · `#efe0b2` · `#efe1b9` · `#efe2bc` · `#efe3bd` · `#efe3bf` · `#eff0cc` · `#eff2df` · `#f0d29a` · `#f0d3a1` · `#f0d6a0` · `#f0ddaf` · `#f0dfae` · `#f0dfb7` · `#f0e0b7` · `#f0e2b9` · `#f0e2bb` · `#f0e2bd` · `#f0e4bb` · `#f0e5a4` · `#f0e5c7` · `#f0e7c7` · `#f0e9c6` · `#f0e9cc` · `#f0e9ce` · `#f0eaca` · `#f0ebc8` · `#f0ebcd` · `#f0ecd0` · `#f0ecd4` · `#f0edcf` · `#f0efce` · `#f17860` · `#f1bf80` · `#f1cc7e` · `#f1cd7f` · `#f1d0a4` · `#f1d294` · `#f1d694` · `#f1d69d` · `#f1d795` · `#f1ddb0` · `#f1dfb4` · `#f1dfb7` · `#f1dfb9` · `#f1e4bf` · `#f1e6bd` · `#f1e6c6` · `#f1e7c7` · `#f1e8ca` · `#f1e8cb` · `#f1e8cd` · `#f1ecd0` · `#f1edd5` · `#f1efd3` · `#f28d29` · `#f2ce7b` · `#f2d49a` · `#f2ddb0` · `#f2e0ae` · `#f2e0b6` · `#f2e2bb` · `#f2e2bd` · `#f2e7c9` · `#f2e8c8` · `#f2e8ca` · `#f2ead0` · `#f2efd0` · `#f3deb0` · `#f3e2ba` · `#f3e3a0` · `#f3e4bb` · `#f3e4be` · `#f3e5c3` · `#f3e7bd` · `#f3e7c5` · `#f3e7c6` · `#f3e9ca` · `#f3eed4` · `#f4dba8` · `#f4e0b5` · `#f4e4b8` · `#f4e7c5` · `#f4e8b8` · `#f4e8c3` · `#f4e8c6` · `#f4e8c8` · `#f4e9c8` · `#f4ecd1` · `#f4edd0` · `#f4efcf` · `#f4efd0` · `#f4efd2` · `#f4efd6` · `#f5b85a` · `#f5d4aa` · `#f5d98e` · `#f5d99d` · `#f5dfac` · `#f5e4b5` · `#f5e4ba` · `#f5e5a1` · `#f5e7bc` · `#f5e7be` · `#f5e9c9` · `#f5ebc8` · `#f5ebd6` · `#f5eccf` · `#f5edcc` · `#f5edce` · `#f5eddb` · `#f5eed6` · `#f5efd2` · `#f5f0d3` · `#f6d581` · `#f6d68b` · `#f6e6bb` · `#f6edc8` · `#f6edcd` · `#f6eed4` · `#f6f0d5` · `#f6f1d5` · `#f7b398` · `#f7e8c4` · `#f7e8c5` · `#f7e9c7` · `#f7eac9` · `#f7ead0` · `#f7edc8` · `#f7eed0` · `#f7eed2` · `#f7efd2` · `#f7f0d2` · `#f8ab7d` · `#f8e6bb` · `#f8edcc` · `#f8edcd` · `#f8edce` · `#f8efd4` · `#f8f0d4` · `#f8f0d6` · `#f8f1d7` · `#f8f3d9` · `#f9c5a5` · `#f9e9c0` · `#f9eac4` · `#f9f0d3` · `#faf0cf` · `#faf0d2` · `#faf0d4` · `#faf0d6` · `#faf0d8` · `#faf1d7` · `#fbefcf` · `#fbefd0` · `#fbf4d6` · `#fcf2d4` · `#fdf5da` · `#ff8580` · `#ffa73b` · `#ffc45c` · `#ffc95f` · `#ffd37d` · `#ffdc85` · `#ffe0b0` · `#ffe16a` · `#ffe195` · `#ffe1a0` · `#ffe2aa` · `#ffe6a0` · `#ffe6ad` · `#ffe7a0` · `#fff0a6` · `#fff0aa` · `#fff0ad` · `#fff0b3` · `#fff0b9` · `#fff0be` · `#fff0c1` · `#fff0c6` · `#fff0c8` · `#fff0cb` · `#fff0cc` · `#fff0cd` · `#fff0ce` · `#fff0cf` · `#fff0d1` · `#fff0d2` · `#fff0d8` · `#fff1a2` · `#fff1cb` · `#fff1cc` · `#fff1cd` · `#fff1d1` · `#fff2cb` · `#fff2cc` · `#fff2d1` · `#fff2d3` · `#fff2d4` · `#fff3d8` · `#fff4cf` · `#fff4d9` · `#fff5d6` · `#fff5da` · `#fff5db` · `#fff5dc` · `#fff5de` · `#fff8e4`

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
