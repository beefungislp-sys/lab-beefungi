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
| Sala principal | [`drawMainRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1235) | Suelo, paredes, puertas, estaciones, cestos, protagonista, asistentes y relojes |
| Triturador | [`drawCrusherStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1470) | Pacas, tolva, motor, cesto de paja desordenada, cola, selección y carga |
| Mezcla | [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1637) | Vitrina, micelios, cesto, bandeja/llenadora, bacterias, limpieza, bolsa y salida |
| Pasteurizado | [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1901) | Tanque por capacidad, agua, llave, cal, paja, reserva, guía y reloj |
| Oficina | [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2142) | Inventario, ficha de especie, colores y acceso a pedidos |
| Cultivo: sala | [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2310) | Estantes, división de áreas, puerta y personaje |
| Incubación | [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2510) | Bolsas, colonización blanca, manchas verdes, espacios, clima y carritos |
| Fructificación | [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2853) | Frutos por especie, flushes, cosecha, composta, espacios y clima |
| Cuarto estéril | [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4075) | Mesas de acero, puertas, agitación y personaje |
| Preparación estéril | [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4534) | Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos |
| Medios especiales | [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8317) | Frascos, CL y sustrato Cordyceps; mezcla y expansión |
| Esterilizador | [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4911) | Pool preparado, olla, tapa, agua, vapor y reloj |
| Inoculación | [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5879) | Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación |
| Agitación | [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7872) | Frascos CL, puestos, progreso, crecimiento y reservas |
| Química: sala | [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8616) | Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes |
| Extracción | [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8895) | Especie, hongos, molino, material molido, destilador, mechero y matraz |
| Envasado | [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9100) | Matraces, llenadora y cuatro goteros con llenado |
| Nutrientes | [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9334) | Selector de receta, sales A/B, recipiente, mezcla y existencias |
| Espirulina | [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9643) | Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas |
| Tienda | [`drawShop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10289) | Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida |
| Avisos | [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10068) | Marcos temporales sobre requisitos; sin cartel explicativo |

## Todos los dibujantes y sprites compartidos

Incluye protagonistas/batas/asistentes, especies, recipientes, muebles, líquidos, bacterias, relojes, monedas, marcos, indicadores y ayudas. Una función puede componer varias piezas; se enumera su punto de entrada, no cada rectángulo/píxel individual.

- [`text`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L895)
- [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L900)
- [`drawFloorTexture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1027)
- [`drawWallTexture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1067)
- [`drawWarmTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1083)
- [`drawWarmWindow`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1126)
- [`drawStrawFibers`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1142)
- [`drawWarmBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1161)
- [`drawWarmPlant`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1189)
- [`drawWarmStationBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1205)
- [`drawMainRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1235)
- [`drawBaseScene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1413)
- [`drawCrusherStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1470)
- [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1618)
- [`drawMix`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1637)
- [`drawBacteria`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1752)
- [`drawCleaningKit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1760)
- [`drawTreatedBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1885)
- [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L1901)
- [`drawProcessClock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2094)
- [`drawPlayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2112)
- [`roomBase`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2125)
- [`smallText`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2135)
- [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2142)
- [`drawChamberRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2217)
- [`drawChamberRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2247)
- [`drawClimatePanel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2268)
- [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2310)
- [`drawGrowBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2448)
- [`drawBagCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2498)
- [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2510)
- [`drawFruitCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2623)
- [`drawOysterCluster`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2672)
- [`drawSpeciesFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2766)
- [`drawFruitBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2834)
- [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2853)
- [`drawChamberControl`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3740)
- [`drawShopPerson`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3942)
- [`drawCustomerOrder`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3961)
- [`drawSterileBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4012)
- [`drawSterileHousingDetail`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4022)
- [`drawSterileShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4046)
- [`drawPrepFaucet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4054)
- [`drawSterileMiniCaption`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4070)
- [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4075)
- [`drawSawdustPile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4258)
- [`drawEmptySubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4276)
- [`drawPreparedSubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4293)
- [`drawWoodGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4312)
- [`drawSubstratePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4328)
- [`drawSubstrateNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4371)
- [`drawSubstrateEmptyBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4395)
- [`drawSubstrateEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4442)
- [`drawSubstrateHopper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4461)
- [`drawSubstrateJarGlints`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4524)
- [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4534)
- [`drawStainlessTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4602)
- [`drawStainlessTableLeg`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4724)
- [`drawPressurePot`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4735)
- [`drawPressureLid`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4873)
- [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4911)
- [`drawGloveGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5282)
- [`drawLaminarFace`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5315)
- [`drawLaminarSteel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5324)
- [`drawLaminarHoodFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5356)
- [`drawLaminarFlowHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5449)
- [`drawSterileWorkroom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5465)
- [`drawLaminarRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5555)
- [`drawLaminarOval`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5559)
- [`drawLaminarJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5573)
- [`drawLaminarBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5633)
- [`drawGloveEnclosure`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5734)
- [`drawGlovePorts`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5815)
- [`drawInoculationBurner`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5831)
- [`drawInoculationCleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5864)
- [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5879)
- [`drawGloveAnimation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5994)
- [`drawWoodStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6032)
- [`drawAutoMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6253)
- [`drawHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6585)
- [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6598)
- [`drawSubstrateMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6721)
- [`drawWoodFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6813)
- [`drawWalkTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6827)
- [`drawHopperBar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7022)
- [`drawCoat`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7028)
- [`drawLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7454)
- [`drawLiquidDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7499)
- [`drawPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7606)
- [`drawLiquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7618)
- [`drawMagneticStirrer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7718)
- [`drawAgitationShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7768)
- [`drawAgitationRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7787)
- [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7872)
- [`drawLiquidHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7886)
- [`drawEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8277)
- [`drawCordyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8289)
- [`drawPreparedContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8308)
- [`drawIncubationContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8313)
- [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8317)
- [`drawCordyBlockHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8420)
- [`drawRicePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8452)
- [`drawPreparedPool`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8473)
- [`drawChemistryDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8569)
- [`drawChemistryBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8598)
- [`drawChemistryTray`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8608)
- [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8616)
- [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8811)
- [`drawExtractFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8815)
- [`drawDistiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8840)
- [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8895)
- [`drawDropper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9080)
- [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9100)
- [`drawSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9317)
- [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9334)
- [`drawSpirulinaFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9611)
- [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9643)
- [`drawSpirulinaJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9775)
- [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10068)
- [`drawWarmShopRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10249)
- [`drawShopProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10261)
- [`drawCoin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10266)
- [`drawCoinAmount`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10283)
- [`drawMissingOutline`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10595)
- [`drawLooseStraw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11330)
- [`drawDragHarvest`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11348)
- [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11543)
- [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11831)
- [`scene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11849)

## Interfaz nativa: botones, paneles y contadores

| Elemento | Tipo | Código |
|---|---|---|
| wallet | output | [`wallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L474) |
| upgrade-menu | button | [`upgrade-menu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L475) |
| upgrade-title | span | [`upgrade-title`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L481) |
| upgrade-count | span | [`upgrade-count`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L482) |
| tester-unlock | button | [`tester-unlock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L483) |
| station-mode | button | [`station-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L488) |
| prep-remove | button | [`prep-remove`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L489) |
| back | button | [`back`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L490) |
| unlock-notice | div | [`unlock-notice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L498) |
| unlock-message | span | [`unlock-message`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L499) |
| unlock-next | button | [`unlock-next`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L499) |
| upgrades-panel | section | [`upgrades-panel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L503) |
| close-upgrades | button | [`close-upgrades`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L512) |
| upgrade-items | div | [`upgrade-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L514) |
| more | button | [`more`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L517) |
| shop-species | button | [`shop-species`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L518) |
| shop-serve | button | [`shop-serve`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L520) |
| test-chamber | button | [`test-chamber`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L522) |
| test-straw | button | [`test-straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L524) |
| tank-upgrade | button | [`tank-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L525) |
| module-upgrade | button | [`module-upgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L526) |
| assistant-buy | button | [`assistant-buy`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L527) |
| test-coins | button | [`test-coins`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L528) |
| test-lab-unlock | button | [`test-lab-unlock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L529) |
| lab-hire | button | [`lab-hire`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L531) |
| liquid-room | button | [`liquid-room`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L533) |
| test-mode | button | [`test-mode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L539) |
| sound-toggle | button | [`sound-toggle`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L540) |
| status | p | [`status`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L541) |
| orders | dialog | [`orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L561) |
| order-balance | p | [`order-balance`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L563) |
| order-items | div | [`order-items`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L564) |
| species-info | p | [`species-info`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L565) |
| close-orders | button | [`close-orders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L566) |
| mycelium-inventory | dialog | [`mycelium-inventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L568) |
| mycelium-list | div | [`mycelium-list`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L570) |
| close-mycelium | button | [`close-mycelium`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L571) |

Los estilos están en el bloque `<style>`: marco de juego, barra superior, botones, pedidos/tablas, diálogos, Ayuda y reglas móviles. Los controles de prueba se mantienen separados del modo normal.

## Interfaz generada desde JavaScript

Pedidos y sus botones de compra/especie: [`renderOrders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2918). Inventario de micelios: [`openMyceliumInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2943). Menú superior de mejoras: [`updateUpgradeMenu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11231), [`availableUpgradeEntries`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11182) y [`buyMenuUpgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11276). Los controles históricos ocultos siguen en [`updateUpgradeControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6611). Economía/saldo y modo prueba: [`updateEconomyControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10798) y [`updateWallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10782). Controles del cuarto estéril: [`updateK0Controls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8011). Entregas de tienda: [`updateShopControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3903). Preferencia de sonido: [`updateSoundButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10082). Avisos de desbloqueo: [`renderUnlockNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10966). Visibilidad del recorrido: [`updateProgressionControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11139) y [`refreshProgression`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10972). Flecha encadenada: [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11831), [`routeGuideTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11665) y [`currentRouteStep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11647). Los pasos específicos de Cordyceps distinguen vista, medio y especie en [`currentRouteModule`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11641).

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: [`beginDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11303), [`updateDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11315), [`point`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L888), [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8811), [`playerAction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10055). Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: `mixBasket`, `jarCase`, `mixTray`, `bagSlot`, `pasteurTankRect`, `incSlots`, `woodStations`, `preparedPoolCards`, `gloveRect`, `chemistryBenches`, `extractionRects`, `nutrientRects`, `spirulinaRects`, `shopInventoryCards` y `missingItemRects`.

## Iconos de cada tipo de arrastre

32 tipos explícitos en un único catálogo. Render común: [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11543); tamaño, centro del mouse y separación/límites para dedo: [`dragPreviewLayout`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11515). Los frascos de micelio declaran `bare: true` para dibujarse sin tarjeta. Los módulos ya no dibujan vistas previas por separado.

| Tipo de arrastre | Icono | Código |
|---|---|---|
| `bale` | Paca de paja | [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11368) |
| `raw` | Paja triturada | [`raw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11369) |
| `straw` | Paja pasteurizada | [`straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11370) |
| `mixture` | Paja con micelio | [`mixture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11371) |
| `lime` | Bote de cal | [`lime`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11372) |
| `jar` | Micelio | [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11376) |
| `cleaning` | Spray y trapo | [`cleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11384) |
| `incbag` | Bolsa sin incubar | [`incbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11385) |
| `readybag` | Bolsa de incubación | [`readybag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11392) |
| `fruitbag` | Bloque para fructificar | [`fruitbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11399) |
| `harvestbag` | Hongos o bloque para composta | [`harvestbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11402) |
| `woodRaw` | Aserrín o arroz | [`woodRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11403) |
| `woodBag` | Bolsa o frasco vacío | [`woodBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11408) |
| `woodNutrients` | Nutrientes | [`woodNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11416) |
| `woodPrepared` | Recipiente preparado | [`woodPrepared`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11424) |
| `gloveInoculum` | Micelio interior | [`gloveInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11429) |
| `gloveWood` | Bolsa esterilizada | [`gloveWood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11437) |
| `gloveJar` | Frasco de micelio | [`gloveJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11442) |
| `gloveClean` | Limpieza de cabina | [`gloveClean`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11450) |
| `cordyInoculum` | Cultivo líquido maduro | [`cordyInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11455) |
| `liquidPetri` | Placa Petri | [`liquidPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11460) |
| `liquidJar` | Cultivo líquido inoculado | [`liquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11461) |
| `chemRaw` | Hongos para extracción | [`chemRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11466) |
| `chemGround` | Hongos molidos | [`chemGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11469) |
| `chemFlask` | Matraz de extracto | [`chemFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11479) |
| `chemSalt` | Sales A o B | [`chemSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11482) |
| `spirulinaFeed` | Solución nutritiva | [`spirulinaFeed`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11491) |
| `spirulinaCrop` | Espirulina cosechada | [`spirulinaCrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11494) |
| `spirulinaMother` | Matraz madre | [`spirulinaMother`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11497) |
| `spirulinaInoculum` | Matraz de inoculación | [`spirulinaInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11500) |
| `shopInventory` | Producto de tienda | [`shopInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11503) |
| `shopcustomer` | Cliente seleccionado | [`shopcustomer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11506) |

En celular/lápiz la tarjeta intenta medir 76 píxeles CSS y queda separada 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Asistentes: planificación y avisos

Tareas compartidas con contexto y ejecución única: [`createAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6378); cancelación: [`cancelAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6397). Preparación principal: [`nextHelperTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6434) y [`advanceAutomation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6532); laboratorio: [`nextLabTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7119) y [`advanceLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7405). Los cambios de receta pasan por [`setPrepRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8158) y [`setSterilizerRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8168).

Avisos de faltantes/capacidad/pasos manuales: [`helperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6405), [`labHelperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7371) y [`labInoculationNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7343). Ambas burbujas comparten [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6598); la de laboratorio se eleva cuando quedan muy juntas en la sala principal.

## Paleta actual

1228 colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

`#142632` · `#16303a` · `#17283a` · `#22373b` · `#223b46` · `#243b49` · `#243b4d` · `#243e48` · `#24434f` · `#253f45` · `#263f4c` · `#28434b` · `#284b55` · `#2c4a51` · `#2f4f55` · `#304554` · `#30484a` · `#304b50` · `#304f54` · `#304f59` · `#314654` · `#324c60` · `#32505b` · `#334f60` · `#344655` · `#344b57` · `#344b62` · `#344d5e` · `#344f59` · `#34515b` · `#34545f` · `#345660` · `#345762` · `#345a65` · `#345b66` · `#345c67` · `#354d55` · `#354f5b` · `#355563` · `#35585e` · `#355968` · `#355b65` · `#355c66` · `#364e5c` · `#365863` · `#365b65` · `#375b67` · `#375c65` · `#385868` · `#385b66` · `#385e70` · `#395a68` · `#395d68` · `#395e6b` · `#3a5d65` · `#3b5354` · `#3b5960` · `#3b5968` · `#3b775e` · `#3c5b63` · `#3c5b69` · `#3c626e` · `#3d6265` · `#3d626c` · `#3e5b65` · `#3e6069` · `#3f6266` · `#3f626b` · `#3f666f` · `#3f8159` · `#405652` · `#405f6b` · `#416674` · `#416970` · `#416b75` · `#416e61` · `#42686f` · `#426970` · `#426a74` · `#426b70` · `#436b76` · `#438458` · `#446872` · `#44696e` · `#456b7b` · `#466557` · `#466c74` · `#47676c` · `#485b68` · `#486d7c` · `#486e73` · `#496769` · `#496b70` · `#496b73` · `#496c4d` · `#496d75` · `#496e70` · `#497975` · `#4a6b70` · `#4b6b6c` · `#4b6f70` · `#4b727a` · `#4c6e72` · `#4c7476` · `#4d4434` · `#4d6d70` · `#4d6f70` · `#4d707c` · `#4d7476` · `#4e7375` · `#4f625e` · `#4f7273` · `#4f7579` · `#4f7679` · `#4f777d` · `#4f7959` · `#508a91` · `#517a7e` · `#526e70` · `#526f73` · `#526f7e` · `#52747a` · `#52757c` · `#52777b` · `#527a78` · `#527d80` · `#527e86` · `#536b64` · `#536d68` · `#537780` · `#54746f` · `#547576` · `#547b7e` · `#547d7d` · `#557585` · `#55777a` · `#557b80` · `#557c80` · `#557f80` · `#558c65` · `#56766e` · `#567b78` · `#567b7e` · `#577273` · `#577567` · `#577784` · `#577b7b` · `#587b7b` · `#587b81` · `#587c7d` · `#587c83` · `#587d7e` · `#587d80` · `#597c7e` · `#597f82` · `#5a7d7d` · `#5b5040` · `#5b7974` · `#5c6e86` · `#5c7780` · `#5d7e83` · `#5e432c` · `#5e5840` · `#5f3f2b` · `#5f8383` · `#60857e` · `#617b86` · `#617f7c` · `#617f7d` · `#618a94` · `#618b8c` · `#638591` · `#638b87` · `#638b8b` · `#638b8d` · `#638d9b` · `#64867e` · `#648789` · `#655c41` · `#658589` · `#658983` · `#658a88` · `#658b8f` · `#668b85` · `#668d87` · `#669195` · `#678a8a` · `#688784` · `#688995` · `#688d8c` · `#688e88` · `#689199` · `#694f36` · `#698d87` · `#698d91` · `#698e8d` · `#6994a0` · `#69b794` · `#6a5c45` · `#6a8a8c` · `#6a929b` · `#6a9383` · `#6aab87` · `#6b5745` · `#6b705d` · `#6b7e83` · `#6b8c86` · `#6c644c` · `#6c8d8c` · `#6c8e95` · `#6c9090` · `#6c9291` · `#6d624a` · `#6d8794` · `#6d9698` · `#6d9aa5` · `#6da9ba` · `#6e7058` · `#6e775b` · `#6e8c8b` · `#6e9c95` · `#6f4a30` · `#6f5338` · `#6f8b81` · `#6f9473` · `#6f969e` · `#708f8e` · `#70938f` · `#718178` · `#718e87` · `#71908b` · `#71918a` · `#71948a` · `#72928f` · `#7297a3` · `#7298a6` · `#729a97` · `#73816c` · `#73887e` · `#738f89` · `#73929a` · `#73938b` · `#73968f` · `#7397a5` · `#73988d` · `#739d96` · `#748d89` · `#749b99` · `#749c7e` · `#749c98` · `#75674f` · `#759592` · `#759994` · `#759b98` · `#765b40` · `#76959c` · `#76978e` · `#76979b` · `#769991` · `#77918a` · `#779694` · `#779a94` · `#78968c` · `#78978d` · `#789b8d` · `#789b97` · `#78c9d2` · `#79664c` · `#79938b` · `#79ae64` · `#79bfc8` · `#7a5a3c` · `#7a9d92` · `#7aa3a5` · `#7b9d98` · `#7ba59b` · `#7c9ca5` · `#7ca6ae` · `#7cb68b` · `#7d5537` · `#7d9a97` · `#7d9d92` · `#7d9e95` · `#7e978b` · `#7e9995` · `#7e9e91` · `#7e9f95` · `#7ea8ae` · `#7faaa2` · `#7fb7be` · `#80aaa0` · `#80b0ac` · `#819780` · `#82918c` · `#829f95` · `#82a5a1` · `#82a9b6` · `#839781` · `#839f98` · `#83a5aa` · `#83b9df` · `#83bfc7` · `#83c6ad` · `#84928b` · `#849680` · `#855b40` · `#85987d` · `#85ada9` · `#85c3ca` · `#86aba6` · `#879c82` · `#879f95` · `#87a69a` · `#87a6ac` · `#87aab7` · `#87aeb3` · `#87b3a6` · `#88754d` · `#889b90` · `#88a99f` · `#897858` · `#89a69a` · `#89c5d6` · `#8a5f2a` · `#8a9b87` · `#8aabb0` · `#8aaf9e` · `#8b795a` · `#8b9e9d` · `#8ba8a2` · `#8ba9a1` · `#8babaa` · `#8bafb3` · `#8bc5d2` · `#8bd1d1` · `#8c613e` · `#8c977f` · `#8ca49b` · `#8caaa0` · `#8d6947` · `#8d724e` · `#8d9e85` · `#8da89f` · `#8da99a` · `#8daaa6` · `#8e7953` · `#8eA187` · `#8ea99b` · `#8eaaa5` · `#8eaba0` · `#8eacb2` · `#8eada0` · `#8eafa1` · `#8eafad` · `#8eb8a2` · `#8ecea6` · `#8f6430` · `#8f6e51` · `#8f7547` · `#8f773f` · `#8fA18a` · `#8fA38c` · `#8fa18f` · `#8fa389` · `#8fa895` · `#8fa998` · `#8fa99f` · `#8fa9ac` · `#8fa9af` · `#8fadb2` · `#8fae9f` · `#8fb6b0` · `#8fc8df` · `#907b4f` · `#90b3b8` · `#91aaa0` · `#91afaa` · `#91b3a9` · `#91c49f` · `#923e36` · `#92b29a` · `#92b3ad` · `#92b9b4` · `#92bbb5` · `#92e3d0` · `#93512f` · `#937545` · `#93babd` · `#94b0a1` · `#94b8b6` · `#95a98f` · `#95b09c` · `#966e42` · `#967451` · `#96765c` · `#96afa9` · `#96c69c` · `#976f4c` · `#986b47` · `#987145` · `#987c56` · `#987d58` · `#98ba92` · `#997446` · `#99b2a6` · `#99b5a6` · `#9a734e` · `#9aac94` · `#9aaf98` · `#9aafa1` · `#9b6a30` · `#9b6d45` · `#9b814e` · `#9b8353` · `#9baea0` · `#9bafa0` · `#9bb6b4` · `#9bbfb2` · `#9c6d33` · `#9c7c4e` · `#9c7f58` · `#9caa8d` · `#9caa93` · `#9cae95` · `#9caf96` · `#9caf9d` · `#9d743c` · `#9db5ac` · `#9db7b6` · `#9e885c` · `#9ed3aa` · `#9fb8a9` · `#9fbcb0` · `#a0bab4` · `#a18058` · `#a1bbb0` · `#a1c3b6` · `#a2815c` · `#a28e61` · `#a29166` · `#a2b192` · `#a2b7a6` · `#a2beb1` · `#a34f3a` · `#a37d52` · `#a3805c` · `#a38250` · `#a3b397` · `#a3b9aa` · `#a3bcb0` · `#a3bfb1` · `#a4b49f` · `#a4b6a4` · `#a4bbac` · `#a4bfb1` · `#a4cfcb` · `#a4d8d3` · `#a4e2e4` · `#a5b69e` · `#a5beb0` · `#a5c4bc` · `#a5c7b7` · `#a5ccca` · `#a6764c` · `#a687ad` · `#a6ae8b` · `#a6b598` · `#a6b8aa` · `#a6b9ac` · `#a6bec1` · `#a6bfb0` · `#a6c2b9` · `#a6c8bf` · `#a77f46` · `#a7b6aa` · `#a7c0af` · `#a7c39a` · `#a7c5ba` · `#a7cac0` · `#a7d8bc` · `#a8793f` · `#a87c56` · `#a89e7c` · `#a89f83` · `#a8b99b` · `#a8baa9` · `#a8bbae` · `#a8bdaa` · `#a8c0ad` · `#a8c4bd` · `#a98955` · `#a99a7c` · `#a9aea6` · `#a9bbb4` · `#a9bca3` · `#a9bdc3` · `#a9c2b0` · `#a9c6b7` · `#a9c6c2` · `#aac0ab` · `#aac8b2` · `#abbba3` · `#acc896` · `#accfd5` · `#ad9d78` · `#adbb9f` · `#adc1b2` · `#adc6bc` · `#adc6bd` · `#add2ab` · `#ae7e3d` · `#aeb99c` · `#aebcaf` · `#aebda9` · `#aec3c6` · `#aec4b9` · `#aec5b0` · `#afbd9f` · `#afc396` · `#afc3b6` · `#afcbc0` · `#b0bfac` · `#b0c6a4` · `#b0d9d5` · `#b18460` · `#b18b57` · `#b18c57` · `#b18d59` · `#b1bba0` · `#b1bd9d` · `#b1c0a5` · `#b1c6b5` · `#b1c9b8` · `#b1e5e4` · `#b27652` · `#b28a60` · `#b2a383` · `#b2bca7` · `#b2d3cc` · `#b38253` · `#b38b59` · `#b38c56` · `#b38e59` · `#b3c1a3` · `#b3c6b8` · `#b3c6be` · `#b3d9d7` · `#b4655b` · `#b49055` · `#b4c6b3` · `#b4d5be` · `#b4dce2` · `#b58c60` · `#b59173` · `#b5cbb7` · `#b5ccc2` · `#b5d39f` · `#b5e0dc` · `#b66e51` · `#b6965c` · `#b6b9a0` · `#b6c5b0` · `#b6d8c8` · `#b78c5b` · `#b7985d` · `#b7c3a5` · `#b7c7b6` · `#b7cbc5` · `#b7ccbd` · `#b7cfb8` · `#b7cfbf` · `#b7d0cd` · `#b7dcd8` · `#b88562` · `#b8976e` · `#b8a564` · `#b8a570` · `#b8af90` · `#b8b49a` · `#b8c1a4` · `#b8c6ae` · `#b8c6b3` · `#b8c8b1` · `#b8c9b8` · `#b8ced0` · `#b8d1bd` · `#b8d3bf` · `#b8d4d6` · `#b8d69d` · `#b8dbca` · `#b8dec2` · `#b8eef0` · `#b95141` · `#b9955f` · `#b99b59` · `#b9a770` · `#b9b9aa` · `#b9c7a6` · `#b9c9b7` · `#b9cdc1` · `#b9cecd` · `#b9cfbe` · `#b9d5d4` · `#b9d8cc` · `#b9d9cc` · `#bac6a9` · `#bad4c3` · `#bad6bc` · `#bae398` · `#bc8539` · `#bc8a43` · `#bc955c` · `#bccba9` · `#bcd0b7` · `#bce5dd` · `#bd6051` · `#bd845a` · `#bd934b` · `#bd965f` · `#bd995f` · `#bd9b58` · `#bd9c62` · `#bd9d60` · `#bdac7d` · `#bdad83` · `#bdc7b0` · `#bdcbb7` · `#bdcdb7` · `#bdcdb8` · `#bdcfbf` · `#bdcfca` · `#bdd0bb` · `#bdd0c3` · `#bdd3c8` · `#be8942` · `#be9b64` · `#bec3a8` · `#bec9ad` · `#becbb6` · `#bf9954` · `#c0baa0` · `#c0cdb8` · `#c0d0b4` · `#c0d98c` · `#c19c5c` · `#c1b99a` · `#c1c5ab` · `#c1cdb3` · `#c1d0b9` · `#c1d4bd` · `#c1d4cd` · `#c1d6cb` · `#c1d7c4` · `#c1d8b6` · `#c1d8c5` · `#c2a67d` · `#c2b27e` · `#c2ceba` · `#c2d1bb` · `#c2d2bc` · `#c2d6c9` · `#c2dfd7` · `#c2e2dc` · `#c2e3dc` · `#c39d63` · `#c3a77a` · `#c3ad80` · `#c3d0b9` · `#c3d6bc` · `#c3d6cd` · `#c48d3c` · `#c4ae75` · `#c4b28b` · `#c4ccad` · `#c4cdb5` · `#c4d3b6` · `#c4d6bc` · `#c4d8b9` · `#c4d9a3` · `#c54442` · `#c59a4f` · `#c59b61` · `#c5a56e` · `#c5b77f` · `#c5b891` · `#c5ceba` · `#c5d1b6` · `#c5d1bd` · `#c5d2b9` · `#c5d3ba` · `#c5d6bd` · `#c5d7ce` · `#c5d9d0` · `#c5d9d1` · `#c5e4df` · `#c6a477` · `#c6bb98` · `#c6c4a6` · `#c6cfaf` · `#c6cfb1` · `#c6d0af` · `#c6d1ad` · `#c6d1b8` · `#c6d7d1` · `#c6d9c8` · `#c74443` · `#c7b27d` · `#c7d1b3` · `#c7d7c2` · `#c7d8c7` · `#c8973f` · `#c8a36b` · `#c8d4bc` · `#c8d5b9` · `#c8d5cb` · `#c8d7c4` · `#c8d8a4` · `#c8d8c1` · `#c8d9cd` · `#c8dac3` · `#c8dbcb` · `#c8ddc3` · `#c9973f` · `#c99b63` · `#c9b083` · `#c9b887` · `#c9b98d` · `#c9caae` · `#c9cdb1` · `#c9d1ba` · `#c9d2b8` · `#c9d7b5` · `#c9d7b8` · `#c9d9ce` · `#c9dccc` · `#cac7b8` · `#cad0ba` · `#cad8bc` · `#cadbd1` · `#cbb67d` · `#cbd3bc` · `#cbd4b3` · `#cbd7b8` · `#cc6247` · `#ccc5a6` · `#ccd2b2` · `#ccd7bd` · `#cce7d9` · `#cdb279` · `#cdd5af` · `#cdd6a5` · `#cee2d7` · `#cee6dc` · `#cfad73` · `#cfae80` · `#cfd6ba` · `#cfddc3` · `#d0b478` · `#d0d5b5` · `#d1a56f` · `#d1c29a` · `#d1d5b9` · `#d1dac0` · `#d1dcc2` · `#d1dfc4` · `#d1e0c8` · `#d1e2ce` · `#d1e4d0` · `#d2c398` · `#d2c39b` · `#d2d6bb` · `#d2d9bd` · `#d2dec6` · `#d2ded0` · `#d2dfca` · `#d2e5df` · `#d3a554` · `#d3ad72` · `#d3bb77` · `#d3c6a0` · `#d3c79e` · `#d3d8b8` · `#d3d9bb` · `#d3dcc2` · `#d3ddc3` · `#d3ddc4` · `#d3dec1` · `#d3dec4` · `#d3e5df` · `#d3e6c9` · `#d4ac5b` · `#d4b76f` · `#d4b977` · `#d4bd85` · `#d4c28a` · `#d4c7a4` · `#d4d8b9` · `#d4dfc9` · `#d4e2c4` · `#d5ccb0` · `#d5d9be` · `#d5dfb8` · `#d5dfca` · `#d5dfcb` · `#d5e6bd` · `#d5ebe0` · `#d6b278` · `#d6c79d` · `#d6c7a5` · `#d6d4b9` · `#d6d8b8` · `#d6dcc2` · `#d6ddc4` · `#d6dfc3` · `#d6dfc5` · `#d6dfc6` · `#d6e2cc` · `#d6e3cd` · `#d6e8d3` · `#d7772e` · `#d7a34d` · `#d7b57d` · `#d7bd8a` · `#d7cba6` · `#d7cba9` · `#d7ccaa` · `#d7d4b8` · `#d7d7bb` · `#d7d9b4` · `#d7dfc2` · `#d7dfc7` · `#d7dfc8` · `#d7dfca` · `#d7e3ce` · `#d7e6d3` · `#d8857f` · `#d89a6d` · `#d8af5c` · `#d8afa1` · `#d8b87d` · `#d8bc85` · `#d8bd85` · `#d8ca9f` · `#d8cfac` · `#d8d8b8` · `#d8dec2` · `#d8dfc7` · `#d8e2c8` · `#d8e2c9` · `#d8e2cc` · `#d8e4cc` · `#d9b781` · `#d9b97b` · `#d9c39b` · `#d9c48c` · `#d9d4b6` · `#d9dfc0` · `#d9dfc4` · `#d9dfc5` · `#d9dfc7` · `#d9e4cc` · `#d9e4cf` · `#d9e5d0` · `#d9e6dc` · `#d9e8cf` · `#dad3bd` · `#dae1c6` · `#dae6cc` · `#dbb17e` · `#dbc18d` · `#dbe0c7` · `#dbe2cc` · `#dbe5d8` · `#dcaf7c` · `#dcb580` · `#dcc18b` · `#dcc296` · `#dcd8c3` · `#dce1c7` · `#dce2c5` · `#dce3c9` · `#dce4ca` · `#dce5c9` · `#dce7ca` · `#dce9d7` · `#ddcca0` · `#ddcfaa` · `#ddd0a7` · `#dde4ca` · `#dde5c9` · `#dde7cf` · `#dde9d2` · `#dee3c5` · `#dee4cb` · `#deece2` · `#dfE6cc` · `#dfad45` · `#dfcb8d` · `#dfcf9e` · `#dfd3ae` · `#dfdfb8` · `#dfe3c9` · `#dfe6ca` · `#dfebcf` · `#e08a77` · `#e0b45c` · `#e0bb7d` · `#e0c99a` · `#e0cd96` · `#e0dcc0` · `#e0dfc7` · `#e0e2c7` · `#e0e6cf` · `#e0e8dc` · `#e0e9cd` · `#e0e9d1` · `#e0ebce` · `#e1d3ad` · `#e1df9b` · `#e1e3c7` · `#e1e3c9` · `#e1e5c9` · `#e1e6bd` · `#e1e6c7` · `#e1e6cc` · `#e1e6ce` · `#e1e8cf` · `#e1e9d7` · `#e2a25a` · `#e2b77d` · `#e2c18a` · `#e2c37b` · `#e2c88f` · `#e2d6ae` · `#e2d8b5` · `#e2e3c3` · `#e2e5ce` · `#e2e7ca` · `#e2e8cc` · `#e2ebdf` · `#e3514e` · `#e3b77c` · `#e3ba81` · `#e3c47e` · `#e3c590` · `#e3c795` · `#e3cc8b` · `#e3e4c7` · `#e3e4c8` · `#e3e7cb` · `#e3e8cc` · `#e3e8d1` · `#e3e9cd` · `#e4c47c` · `#e4c58f` · `#e4e4c7` · `#e4e5c7` · `#e4e5c8` · `#e4e5c9` · `#e4e5cb` · `#e4e6cc` · `#e4e7c9` · `#e4e8ce` · `#e4e8cf` · `#e4e9ca` · `#e4e9ce` · `#e4e9d9` · `#e4edda` · `#e4efda` · `#e58b5d` · `#e5c488` · `#e5cd8a` · `#e5d1a0` · `#e5d5ad` · `#e5dfc6` · `#e5e5c7` · `#e5e5c9` · `#e5e8cb` · `#e5e9cb` · `#e5e9cf` · `#e5ead8` · `#e5ece0` · `#e5edce` · `#e6bf6d` · `#e6dec0` · `#e6e0ca` · `#e6e5cb` · `#e6e7c7` · `#e6e7ce` · `#e6e8cf` · `#e6e9c8` · `#e6e9cb` · `#e6ebce` · `#e6ecd3` · `#e6ecd4` · `#e7b858` · `#e7bf97` · `#e7c581` · `#e7c85e` · `#e7d5b4` · `#e7dbb9` · `#e7dfc7` · `#e7e4c8` · `#e7e6cb` · `#e7e8cd` · `#e7e9c9` · `#e7ead4` · `#e7f1db` · `#e7f1df` · `#e7f6e9` · `#e8b36c` · `#e8ba79` · `#e8c17b` · `#e8c58f` · `#e8cb92` · `#e8d69a` · `#e8dbb6` · `#e8ddbf` · `#e8e5c9` · `#e8e9cd` · `#e8edcf` · `#e9bf66` · `#e9c46e` · `#e9c58a` · `#e9cd85` · `#e9dba4` · `#e9e4c6` · `#e9e5b9` · `#e9e8c9` · `#e9e8ca` · `#e9ead2` · `#e9edcf` · `#eac59a` · `#eac8a0` · `#ead29b` · `#ead7aa` · `#eadbb0` · `#ebce97` · `#ebd49a` · `#ebdfb8` · `#ecc59c` · `#ecd08b` · `#ece0af` · `#ece2bd` · `#ece3c0` · `#ece6c1` · `#ece9cb` · `#ecebd3` · `#ed9c77` · `#edbd69` · `#edc29a` · `#edc858` · `#edd09b` · `#eddfb9` · `#edf0d2` · `#edf0d4` · `#edf0d5` · `#edf0d7` · `#edf0dd` · `#edf1d5` · `#eea17f` · `#eec767` · `#eee0b6` · `#eee1ba` · `#eee1bc` · `#eee2bd` · `#eee4c4` · `#eee4c7` · `#eee6c7` · `#eee6cb` · `#eee7c7` · `#eee9ce` · `#eef0c9` · `#eef0d0` · `#eef0d1` · `#eef0d2` · `#eef0da` · `#eef0dc` · `#eef1d8` · `#ef9461` · `#ef9b3b` · `#efcb7b` · `#efe0ae` · `#efe3bf` · `#eff0cc` · `#eff0d5` · `#eff1d8` · `#eff2df` · `#f0c676` · `#f0d29a` · `#f0d6a0` · `#f0dfb7` · `#f0e2b9` · `#f0e2bd` · `#f0e7cf` · `#f0e9ce` · `#f0ebcd` · `#f0ecd0` · `#f0f1d6` · `#f0f2d8` · `#f0f3da` · `#f17860` · `#f1cd7f` · `#f1d694` · `#f1e4bd` · `#f1e5bf` · `#f1e6bd` · `#f1e7c7` · `#f1e8ca` · `#f1e8cb` · `#f1ecd0` · `#f1efd3` · `#f2cd6f` · `#f2ce7b` · `#f2d49a` · `#f2d5a0` · `#f2dfb1` · `#f2e7c9` · `#f2e8c8` · `#f2e8ca` · `#f2ead0` · `#f2ead6` · `#f2eed2` · `#f2efd0` · `#f3dca0` · `#f3deb0` · `#f3e4bb` · `#f3e7bd` · `#f3e9ca` · `#f3ead4` · `#f3ebcc` · `#f3eed4` · `#f3f0d5` · `#f3f7e4` · `#f4cd79` · `#f4e4b8` · `#f4e7c5` · `#f4e8b8` · `#f4efcf` · `#f4efd2` · `#f4f0db` · `#f4f6e6` · `#f5d98e` · `#f5d99d` · `#f5dfac` · `#f5e4b5` · `#f5e5a1` · `#f5ebcf` · `#f5eccf` · `#f5edcc` · `#f5edce` · `#f5edd0` · `#f5eed6` · `#f5efd2` · `#f5efd3` · `#f6d68a` · `#f6dc91` · `#f6dca8` · `#f6edcd` · `#f6eed4` · `#f6efd1` · `#f6f0d5` · `#f6f1d5` · `#f6f1d8` · `#f79b7c` · `#f7b398` · `#f7d5a7` · `#f7e9c7` · `#f7edc8` · `#f7eed0` · `#f7eed8` · `#f7efd2` · `#f7f0d2` · `#f8dc90` · `#f8dcaf` · `#f8e6bb` · `#f8edcc` · `#f8efd3` · `#f8efd4` · `#f8f0d4` · `#f8f0d6` · `#f8f3d9` · `#f9c5a5` · `#f9efd0` · `#faf0cf` · `#fbefd0` · `#fbf4d6` · `#fbf4df` · `#fdf5da` · `#ff8580` · `#ffd27b` · `#ffd475` · `#ffe098` · `#ffe16a` · `#ffe195` · `#ffe1a0` · `#ffe6a0` · `#ffe6a1` · `#ffe6a3` · `#ffe7a0` · `#fff0b8` · `#fff0b9` · `#fff0c1` · `#fff0c6` · `#fff0ca` · `#fff0cb` · `#fff0cc` · `#fff0cd` · `#fff0ce` · `#fff0cf` · `#fff0d1` · `#fff1a2` · `#fff1ab` · `#fff1cb` · `#fff1cd` · `#fff2cc` · `#fff2d1` · `#fff2d4` · `#fff2d5` · `#fff3c4` · `#fff4cf` · `#fff4d7` · `#fff5d6` · `#fff5de` · `#fff6de` · `#fff7d8` · `#fff8e4` · `#fffbea`

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
