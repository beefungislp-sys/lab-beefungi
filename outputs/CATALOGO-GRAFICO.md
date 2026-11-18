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
| Cuarto estéril | [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4070) | Mesas de acero, puertas, agitación y personaje |
| Preparación estéril | [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4337) | Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos |
| Medios especiales | [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7374) | Frascos, CL y sustrato Cordyceps; mezcla y expansión |
| Esterilizador | [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4513) | Pool preparado, olla, tapa, agua, vapor y reloj |
| Inoculación | [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5186) | Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación |
| Agitación | [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6881) | Frascos CL, puestos, progreso, crecimiento y reservas |
| Química: sala | [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7679) | Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes |
| Extracción | [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7958) | Especie, hongos, molino, material molido, destilador, mechero y matraz |
| Envasado | [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8163) | Matraces, llenadora y cuatro goteros con llenado |
| Nutrientes | [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8397) | Selector de receta, sales A/B, recipiente, mezcla y existencias |
| Espirulina | [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8706) | Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas |
| Tienda | [`drawShop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9352) | Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida |
| Avisos | [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9131) | Marcos temporales sobre requisitos; sin cartel explicativo |

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
- [`drawSterileMiniCaption`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4065)
- [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4070)
- [`drawSawdustPile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4252)
- [`drawEmptySubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4270)
- [`drawPreparedSubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4287)
- [`drawWoodGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4321)
- [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4337)
- [`drawStainlessTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4410)
- [`drawPressurePot`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4440)
- [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4513)
- [`drawGloveGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4884)
- [`drawLaminarFlowHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4922)
- [`drawLaminarRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5033)
- [`drawLaminarJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5122)
- [`drawLaminarBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5144)
- [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5186)
- [`drawGloveAnimation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5315)
- [`drawWoodStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5358)
- [`drawAutoMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5580)
- [`drawHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5912)
- [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5925)
- [`drawWoodFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6048)
- [`drawWalkTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6071)
- [`drawHopperBar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6266)
- [`drawCoat`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6272)
- [`drawLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6698)
- [`drawLiquidDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6743)
- [`drawPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6851)
- [`drawLiquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6863)
- [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6881)
- [`drawLiquidHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6943)
- [`drawEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7334)
- [`drawCordyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7346)
- [`drawPreparedContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7365)
- [`drawIncubationContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7370)
- [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7374)
- [`drawCordyBlockHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7483)
- [`drawRicePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7515)
- [`drawPreparedPool`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7536)
- [`drawChemistryDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7632)
- [`drawChemistryBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7661)
- [`drawChemistryTray`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7671)
- [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7679)
- [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7874)
- [`drawExtractFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7878)
- [`drawDistiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7903)
- [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7958)
- [`drawDropper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8143)
- [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8163)
- [`drawSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8380)
- [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8397)
- [`drawSpirulinaFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8674)
- [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8706)
- [`drawSpirulinaJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8838)
- [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9131)
- [`drawWarmShopRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9312)
- [`drawShopProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9324)
- [`drawCoin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9329)
- [`drawCoinAmount`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9346)
- [`drawMissingOutline`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9658)
- [`drawLooseStraw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10389)
- [`drawDragHarvest`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10407)
- [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10575)
- [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10859)
- [`scene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10877)

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

Pedidos y sus botones de compra/especie: [`renderOrders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2918). Inventario de micelios: [`openMyceliumInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2943). Menú superior de mejoras: [`updateUpgradeMenu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10294), [`availableUpgradeEntries`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10245) y [`buyMenuUpgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10339). Los controles históricos ocultos siguen en [`updateUpgradeControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5938). Economía/saldo y modo prueba: [`updateEconomyControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9861) y [`updateWallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9845). Controles del cuarto estéril: [`updateK0Controls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7068). Entregas de tienda: [`updateShopControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3903). Preferencia de sonido: [`updateSoundButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9145). Avisos de desbloqueo: [`renderUnlockNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10029). Visibilidad del recorrido: [`updateProgressionControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10202) y [`refreshProgression`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10035). Flecha encadenada: [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10859), [`routeGuideTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10693) y [`currentRouteStep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10675). Los pasos específicos de Cordyceps distinguen vista, medio y especie en [`currentRouteModule`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10669).

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: [`beginDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10366), [`updateDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10378), [`point`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L888), [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7874), [`playerAction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9118). Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: `mixBasket`, `jarCase`, `mixTray`, `bagSlot`, `pasteurTankRect`, `incSlots`, `woodStations`, `preparedPoolCards`, `gloveRect`, `chemistryBenches`, `extractionRects`, `nutrientRects`, `spirulinaRects`, `shopInventoryCards` y `missingItemRects`.

## Iconos de cada tipo de arrastre

32 tipos explícitos en un único catálogo. Render común: [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10575); tamaño, desplazamiento para dedo y límites: [`dragPreviewLayout`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10549). Los módulos ya no dibujan vistas previas por separado.

| Tipo de arrastre | Icono | Código |
|---|---|---|
| `bale` | Paca de paja | [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10427) |
| `raw` | Paja triturada | [`raw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10428) |
| `straw` | Paja pasteurizada | [`straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10429) |
| `mixture` | Paja con micelio | [`mixture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10430) |
| `lime` | Bote de cal | [`lime`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10431) |
| `jar` | Micelio | [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10435) |
| `cleaning` | Spray y trapo | [`cleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10439) |
| `incbag` | Bolsa sin incubar | [`incbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10440) |
| `readybag` | Bolsa de incubación | [`readybag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10447) |
| `fruitbag` | Bloque para fructificar | [`fruitbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10454) |
| `harvestbag` | Hongos o bloque para composta | [`harvestbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10457) |
| `woodRaw` | Aserrín o arroz | [`woodRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10458) |
| `woodBag` | Bolsa o frasco vacío | [`woodBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10463) |
| `woodNutrients` | Nutrientes | [`woodNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10468) |
| `woodPrepared` | Recipiente preparado | [`woodPrepared`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10471) |
| `gloveInoculum` | Micelio interior | [`gloveInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10474) |
| `gloveWood` | Bolsa esterilizada | [`gloveWood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10478) |
| `gloveJar` | Frasco de micelio | [`gloveJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10486) |
| `gloveClean` | Limpieza de cabina | [`gloveClean`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10490) |
| `cordyInoculum` | Cultivo líquido maduro | [`cordyInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10493) |
| `liquidPetri` | Placa Petri | [`liquidPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10496) |
| `liquidJar` | Cultivo líquido inoculado | [`liquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10497) |
| `chemRaw` | Hongos para extracción | [`chemRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10500) |
| `chemGround` | Hongos molidos | [`chemGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10503) |
| `chemFlask` | Matraz de extracto | [`chemFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10513) |
| `chemSalt` | Sales A o B | [`chemSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10516) |
| `spirulinaFeed` | Solución nutritiva | [`spirulinaFeed`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10525) |
| `spirulinaCrop` | Espirulina cosechada | [`spirulinaCrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10528) |
| `spirulinaMother` | Matraz madre | [`spirulinaMother`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10531) |
| `spirulinaInoculum` | Matraz de inoculación | [`spirulinaInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10534) |
| `shopInventory` | Producto de tienda | [`shopInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10537) |
| `shopcustomer` | Cliente seleccionado | [`shopcustomer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10540) |

En celular/lápiz la tarjeta intenta medir 76 píxeles CSS y queda separada 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Asistentes: planificación y avisos

Tareas compartidas con contexto y ejecución única: [`createAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5705); cancelación: [`cancelAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5724). Preparación principal: [`nextHelperTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5761) y [`advanceAutomation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5859); laboratorio: [`nextLabTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6363) y [`advanceLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6649). Los cambios de receta pasan por [`setPrepRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7215) y [`setSterilizerRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7225).

Avisos de faltantes/capacidad/pasos manuales: [`helperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5732), [`labHelperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6615) y [`labInoculationNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6587). Ambas burbujas comparten [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5925); la de laboratorio se eleva cuando quedan muy juntas en la sala principal.

## Paleta actual

1033 colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

`#142632` · `#16303a` · `#17283a` · `#22373b` · `#223b46` · `#243b49` · `#243b4d` · `#243e48` · `#24434f` · `#253f45` · `#263f4c` · `#28434b` · `#284b55` · `#2c4a51` · `#304554` · `#30484a` · `#304b50` · `#304f54` · `#314654` · `#324c60` · `#334f60` · `#344655` · `#344b57` · `#344b62` · `#344d5e` · `#35585e` · `#355968` · `#364e5c` · `#375c65` · `#385868` · `#385e70` · `#395a68` · `#3b5354` · `#3b5960` · `#3b5968` · `#3c5b63` · `#3c5b69` · `#3d5d6a` · `#3d6265` · `#3d626c` · `#3e5966` · `#3f6266` · `#3f8159` · `#405652` · `#405f6b` · `#415966` · `#416674` · `#416970` · `#416e61` · `#425b68` · `#426674` · `#42686f` · `#426970` · `#426b70` · `#438458` · `#44696e` · `#45616b` · `#456772` · `#456b7b` · `#466557` · `#485b68` · `#486d7c` · `#496b72` · `#496c4d` · `#496d75` · `#497975` · `#4a717c` · `#4b6b6c` · `#4b6f70` · `#4b727a` · `#4c7476` · `#4c7479` · `#4d4434` · `#4d6d70` · `#4d6f70` · `#4d707c` · `#4f625e` · `#4f707b` · `#4f7273` · `#4f777d` · `#4f777e` · `#4f7959` · `#508a91` · `#517a7e` · `#526d79` · `#526f7e` · `#527780` · `#527a78` · `#527d80` · `#527e86` · `#536b64` · `#536d68` · `#547576` · `#547c8c` · `#547d7d` · `#557585` · `#55777a` · `#557b80` · `#557c7d` · `#557c80` · `#557f80` · `#558c65` · `#567b7e` · `#577273` · `#577567` · `#577784` · `#587b81` · `#587d7e` · `#587d80` · `#5a7d7d` · `#5b5040` · `#5c6e86` · `#5c7780` · `#5d7e83` · `#5e432c` · `#5e5840` · `#5f3f2b` · `#607f87` · `#617b86` · `#618a94` · `#618b8c` · `#638591` · `#638b8b` · `#638b8d` · `#638d9b` · `#648691` · `#648789` · `#655c41` · `#658a88` · `#668b87` · `#668d87` · `#669195` · `#67828e` · `#678591` · `#678a90` · `#688784` · `#688995` · `#688b94` · `#688d8c` · `#689199` · `#694f36` · `#698d87` · `#698d91` · `#698e8d` · `#6994a0` · `#69b794` · `#6a5c45` · `#6a8990` · `#6a8d91` · `#6a929b` · `#6a9383` · `#6aab87` · `#6b5745` · `#6b7e83` · `#6b8c86` · `#6b9999` · `#6c644c` · `#6c8d8c` · `#6c8e95` · `#6c9090` · `#6c9291` · `#6d624a` · `#6d8794` · `#6d8985` · `#6d9698` · `#6d9aa5` · `#6da9ba` · `#6e7058` · `#6e775b` · `#6e8c8b` · `#6e9290` · `#6e9294` · `#6e9c95` · `#6f4a30` · `#6f5338` · `#6f858e` · `#6f908c` · `#6f9473` · `#6f969e` · `#708b96` · `#708f8e` · `#70938f` · `#718178` · `#718b96` · `#718d99` · `#71908b` · `#71948a` · `#72928f` · `#7297a3` · `#7298a6` · `#729a97` · `#73816c` · `#73887e` · `#738f89` · `#73929a` · `#73938b` · `#73939a` · `#7397a5` · `#73988d` · `#739d96` · `#748d89` · `#749594` · `#749b99` · `#749c7e` · `#749c98` · `#75674f` · `#759592` · `#759796` · `#759994` · `#759b98` · `#765b40` · `#76959c` · `#769991` · `#77918a` · `#779694` · `#77999a` · `#779a94` · `#78999b` · `#789b97` · `#789ba7` · `#789ca2` · `#78c9d2` · `#79664c` · `#79ae64` · `#79bfc8` · `#7a5a3c` · `#7a9d92` · `#7aa3a5` · `#7b9d98` · `#7ba59b` · `#7c9ca5` · `#7ca6ae` · `#7cb68b` · `#7d5537` · `#7e939d` · `#7e959e` · `#7e978b` · `#7e9995` · `#7ea8ae` · `#7f9f98` · `#7f9f9c` · `#7faaa2` · `#7fb3ac` · `#7fb7be` · `#809d94` · `#80aaa0` · `#819780` · `#82918c` · `#82a9b6` · `#82c9d2` · `#839781` · `#83a5aa` · `#83b9df` · `#83bfc7` · `#83c4cf` · `#83c6ad` · `#83d8ec` · `#84928b` · `#849680` · `#849ba3` · `#855b40` · `#85987d` · `#859e95` · `#85ada9` · `#85c3ca` · `#86aba6` · `#879a9f` · `#879c82` · `#879f95` · `#87a6ac` · `#87aab7` · `#87aeb3` · `#87b3a6` · `#88754d` · `#889b90` · `#897858` · `#89a69a` · `#89c5d6` · `#8a5f2a` · `#8a9b87` · `#8a9c8e` · `#8aabb0` · `#8aaf9e` · `#8b795a` · `#8b9e9d` · `#8ba8a2` · `#8ba9a1` · `#8bada9` · `#8bafb3` · `#8bc5d2` · `#8c613e` · `#8c784e` · `#8c977f` · `#8d6947` · `#8d724e` · `#8d9e85` · `#8d9e9c` · `#8da89f` · `#8e7953` · `#8eA187` · `#8ea2a7` · `#8eacb2` · `#8eafa1` · `#8eafad` · `#8eb8a2` · `#8ecea6` · `#8f6430` · `#8f6e51` · `#8f7547` · `#8f773f` · `#8fA18a` · `#8fA38c` · `#8fa18e` · `#8fa389` · `#8fa7af` · `#8fa9ac` · `#8fa9af` · `#8fadb2` · `#8fae9f` · `#8fb6b0` · `#8fc8df` · `#907b4f` · `#90b3b8` · `#91afaa` · `#91b3a9` · `#91c49f` · `#923e36` · `#92a9b0` · `#92b29a` · `#92b3ad` · `#92b4ab` · `#92b9b4` · `#92e3d0` · `#93512f` · `#937545` · `#93babd` · `#94b8b6` · `#95a98f` · `#966e42` · `#967451` · `#96765c` · `#96afa9` · `#96c69c` · `#976f4c` · `#986b47` · `#987145` · `#987c56` · `#98ba92` · `#997446` · `#99b1ab` · `#9a734e` · `#9aac94` · `#9aaf98` · `#9abcb9` · `#9ac7a9` · `#9b6a30` · `#9b6d45` · `#9b8353` · `#9baea0` · `#9bb6b4` · `#9bbfb2` · `#9c6d33` · `#9c7d50` · `#9c7f58` · `#9cae95` · `#9caf96` · `#9cb4bb` · `#9d743c` · `#9db7b6` · `#9eb8ad` · `#9ed3aa` · `#9fB1b6` · `#a0bab4` · `#a18058` · `#a1c3b6` · `#a2815c` · `#a28e61` · `#a2b192` · `#a2b5bc` · `#a2b6b5` · `#a2beb1` · `#a34f3a` · `#a37d52` · `#a3805c` · `#a3b397` · `#a3b9aa` · `#a3bfb1` · `#a4b49f` · `#a4b6a4` · `#a4bfb1` · `#a4cfcb` · `#a4d8d3` · `#a4e2e4` · `#a5b69e` · `#a5c4bc` · `#a5ccca` · `#a6764c` · `#a687ad` · `#a6ae8b` · `#a6b598` · `#a6bec1` · `#a6bfb0` · `#a6c2b9` · `#a6c8bf` · `#a77f46` · `#a7b6aa` · `#a7c39a` · `#a7c5ba` · `#a7cac0` · `#a7d8bc` · `#a8793f` · `#a87c56` · `#a8b99b` · `#a8baa9` · `#a8bbae` · `#a8bca9` · `#a8bdaa` · `#a8c4bd` · `#a99a7c` · `#a9aea6` · `#a9bbb4` · `#a9bca3` · `#a9bdc3` · `#a9c2b0` · `#a9c6c2` · `#aabcc0` · `#aac8b2` · `#abbba3` · `#acbdb0` · `#acc0bf` · `#acc896` · `#accac5` · `#accfd5` · `#ad9d78` · `#adbb9f` · `#adc6bc` · `#adc6bd` · `#add2ab` · `#ae7e3d` · `#aeb99c` · `#aec3c6` · `#afbd9f` · `#afc396` · `#afcbc0` · `#b0c6a4` · `#b18460` · `#b18b57` · `#b18d59` · `#b1bba0` · `#b1bd9d` · `#b1c0a5` · `#b1c9b8` · `#b1e5e4` · `#b27652` · `#b28a60` · `#b2a383` · `#b2b491` · `#b2bca7` · `#b2d3cc` · `#b38253` · `#b38b59` · `#b38c56` · `#b38e59` · `#b39b68` · `#b3c1a3` · `#b3c6be` · `#b3cbc8` · `#b3d9d7` · `#b4655b` · `#b49055` · `#b4c5c0` · `#b4d5be` · `#b4dce2` · `#b58c60` · `#b59173` · `#b5cbb7` · `#b5ccc2` · `#b5d39f` · `#b5e0dc` · `#b66e51` · `#b6965c` · `#b6b9a0` · `#b6c6b1` · `#b6c6b7` · `#b6d8c8` · `#b78c5b` · `#b7985d` · `#b79a6a` · `#b79b64` · `#b7c3a5` · `#b7cbc5` · `#b7cfb8` · `#b7cfbf` · `#b7d0cd` · `#b7dcd8` · `#b88562` · `#b8976e` · `#b8a564` · `#b8b49a` · `#b8c1a4` · `#b8c8b1` · `#b8c9b8` · `#b8cec6` · `#b8ced0` · `#b8d1bd` · `#b8d3bf` · `#b8d4d6` · `#b8d69d` · `#b8dbca` · `#b8dec2` · `#b8eef0` · `#b99b59` · `#b9a770` · `#b9b799` · `#b9b9aa` · `#b9c7a6` · `#b9cdc1` · `#b9ceca` · `#b9cecd` · `#b9cfbe` · `#b9d5d4` · `#b9d6cf` · `#b9d8cc` · `#b9d9cc` · `#bac6a9` · `#bac7c9` · `#bad4c3` · `#bad6bc` · `#bbd0c6` · `#bc8539` · `#bc8a43` · `#bccba9` · `#bd6051` · `#bd845a` · `#bd934b` · `#bd965f` · `#bd9b58` · `#bd9c62` · `#bd9d60` · `#bdad83` · `#bdcbb7` · `#bdcdb7` · `#bdcfbf` · `#bdcfca` · `#bdd0bb` · `#bdd3c8` · `#be8942` · `#be9b64` · `#bec3a8` · `#bec9ad` · `#bf9954` · `#bfd0c6` · `#c0b78f` · `#c0baa0` · `#c0d98c` · `#c19c5c` · `#c1c5ab` · `#c1d0b9` · `#c1d4bd` · `#c1d4cd` · `#c1d6cb` · `#c1d7c4` · `#c1d8b6` · `#c2a67d` · `#c2d2bc` · `#c2d6c9` · `#c2dfd7` · `#c2e2dc` · `#c2e3dc` · `#c3a77a` · `#c3ad80` · `#c3d6cd` · `#c48d3c` · `#c4a46a` · `#c4ae75` · `#c4ccad` · `#c4d3b6` · `#c4d4be` · `#c4d6bc` · `#c4d8b9` · `#c4d9a3` · `#c4d9cd` · `#c54442` · `#c59a4f` · `#c59b61` · `#c5b891` · `#c5d1bd` · `#c5d3ba` · `#c5d5c9` · `#c5d6bd` · `#c5d7ce` · `#c5d9ce` · `#c5d9d0` · `#c5d9d1` · `#c5e4df` · `#c6a477` · `#c6cfaf` · `#c6cfb1` · `#c6d0af` · `#c6d1ad` · `#c6d7d1` · `#c6d9c8` · `#c74443` · `#c7b27d` · `#c7d1b3` · `#c8973f` · `#c8a36b` · `#c8d1bd` · `#c8d4bc` · `#c8d5cb` · `#c8d7c4` · `#c8d8c1` · `#c8d9cd` · `#c8dbcb` · `#c8ddc3` · `#c9973f` · `#c99b63` · `#c9b083` · `#c9b98d` · `#c9caae` · `#c9cdb1` · `#c9d2b8` · `#c9d6d4` · `#c9d7b5` · `#c9d7b8` · `#c9d7c3` · `#c9d9ce` · `#c9dac6` · `#c9dccc` · `#cac7b8` · `#cad0ba` · `#cadbd1` · `#cbb67d` · `#cbd2b7` · `#cbd3bc` · `#cbd4b3` · `#cbd7b8` · `#cc6247` · `#ccc5a6` · `#ccd2b2` · `#cce7d9` · `#cdd5af` · `#cdd6a5` · `#cde1d1` · `#cee2d7` · `#cee6dc` · `#cfae80` · `#cfd6ba` · `#d0b478` · `#d0d5b5` · `#d1a56f` · `#d1c29a` · `#d1c69f` · `#d1d5b9` · `#d1dfda` · `#d1e0c8` · `#d1e2ce` · `#d1e4d0` · `#d2c398` · `#d2c39b` · `#d2d6bb` · `#d2ded0` · `#d2dfca` · `#d2e5df` · `#d3a554` · `#d3bb77` · `#d3bf88` · `#d3c79e` · `#d3d8b8` · `#d3d9bb` · `#d3ddc3` · `#d3ddc4` · `#d3dfc9` · `#d3e5df` · `#d3e6c9` · `#d4ac5b` · `#d4b76f` · `#d4b977` · `#d4bd85` · `#d4c28a` · `#d4d8b9` · `#d5cbb1` · `#d5ccb0` · `#d5dfb8` · `#d5dfca` · `#d5dfcb` · `#d5e0da` · `#d5e0dc` · `#d5e2d6` · `#d5e6bd` · `#d5ebe0` · `#d6b278` · `#d6bd83` · `#d6c79d` · `#d6d8b8` · `#d6dfc5` · `#d6dfc6` · `#d6e2cc` · `#d6e3cd` · `#d6e8d3` · `#d7772e` · `#d7a34d` · `#d7b57d` · `#d7bd8a` · `#d7d4b8` · `#d7d7bb` · `#d7d9b4` · `#d7dfc6` · `#d7dfc7` · `#d7dfc8` · `#d7dfca` · `#d7e1cf` · `#d7e3ce` · `#d7e6d3` · `#d8857f` · `#d89a6d` · `#d8af5c` · `#d8afa1` · `#d8bc85` · `#d8bd85` · `#d8ca9f` · `#d8d8b8` · `#d8d9b8` · `#d8d9bd` · `#d8dfc7` · `#d8e2cc` · `#d8e4cc` · `#d9b781` · `#d9c39b` · `#d9dfbf` · `#d9dfc4` · `#d9dfc7` · `#d9e4cc` · `#d9e5d0` · `#d9e6dc` · `#d9e8cf` · `#dad3bd` · `#dae4d9` · `#dae6cc` · `#dbb17e` · `#dbc18d` · `#dbe0c7` · `#dbe2cc` · `#dbe5d8` · `#dcaf7c` · `#dcb580` · `#dcc296` · `#dcd8c3` · `#dce3c9` · `#dce9d7` · `#ddc087` · `#ddd0a7` · `#dde5c9` · `#dde7cf` · `#dde9d2` · `#dee7d9` · `#deece2` · `#dfad45` · `#dfcb8d` · `#dfdfb8` · `#dfe6cf` · `#dfebcf` · `#dfebe1` · `#e08a77` · `#e0b45c` · `#e0bb7d` · `#e0c99a` · `#e0cd96` · `#e0dfc7` · `#e0e5c8` · `#e0e5cb` · `#e0e6cf` · `#e0e8dc` · `#e0e9d1` · `#e0e9e5` · `#e0ebce` · `#e1d3ad` · `#e1df9b` · `#e1e3c7` · `#e1e3c9` · `#e1e5c9` · `#e1e6bd` · `#e1e6ce` · `#e1e8cf` · `#e1e9d7` · `#e2a25a` · `#e2b77d` · `#e2c37b` · `#e2c88f` · `#e2d6ae` · `#e2e3c3` · `#e2e5ce` · `#e2e7ca` · `#e2e8cc` · `#e2ebdf` · `#e3514e` · `#e3b77c` · `#e3ba81` · `#e3c590` · `#e3c795` · `#e3cc8b` · `#e3e8cc` · `#e3e9cd` · `#e3e9d8` · `#e3ebe5` · `#e4c47c` · `#e4e5cb` · `#e4e8ce` · `#e4e8cf` · `#e4e9ca` · `#e4e9cd` · `#e4e9d9` · `#e4ece0` · `#e4edda` · `#e4efda` · `#e58b5d` · `#e5cd8a` · `#e5d5ad` · `#e5dfc6` · `#e5e5c7` · `#e5e7c8` · `#e5e8cb` · `#e5e9cb` · `#e5e9cf` · `#e5ead1` · `#e5ead8` · `#e5ece0` · `#e5edce` · `#e6bf6d` · `#e6e0ca` · `#e6e5cb` · `#e6e7c7` · `#e6e7c8` · `#e6e7ce` · `#e6e9c8` · `#e6e9cb` · `#e6ecd3` · `#e6ecd4` · `#e7b858` · `#e7bf97` · `#e7c581` · `#e7c85e` · `#e7d5b4` · `#e7dfc7` · `#e7e6cb` · `#e7e8cd` · `#e7e9c9` · `#e7ead4` · `#e7f1db` · `#e7f1df` · `#e7f6e9` · `#e8ba79` · `#e8c17b` · `#e8c58f` · `#e8cb92` · `#e8dbb6` · `#e8ddbf` · `#e8e5c9` · `#e8e9c7` · `#e8e9cb` · `#e8edcf` · `#e9bf66` · `#e9c46e` · `#e9c58a` · `#e9cd85` · `#e9dba4` · `#e9e4c6` · `#e9e5b9` · `#e9e8c9` · `#e9e8ca` · `#e9ead2` · `#e9ead6` · `#eaa554` · `#eac59a` · `#eac8a0` · `#ead29b` · `#ead7aa` · `#eadbb0` · `#eaf0da` · `#ebce97` · `#ecc59c` · `#ecd08b` · `#ecd09a` · `#ece0af` · `#ece2bd` · `#ece3c0` · `#ece6c1` · `#ecebd3` · `#ed9c77` · `#edbd69` · `#edc29a` · `#edc858` · `#edd09b` · `#ede1b8` · `#ede8c7` · `#edf0d1` · `#edf0d2` · `#edf0d4` · `#edf0d5` · `#edf0dd` · `#edf1d5` · `#eec767` · `#eee0b6` · `#eee1ba` · `#eee6c7` · `#eee8cb` · `#eee9ce` · `#eef0d2` · `#eef0dc` · `#eef1d8` · `#ef9461` · `#ef9b3b` · `#efe0ae` · `#eff0cc` · `#eff0d5` · `#eff1d8` · `#eff2df` · `#f0c676` · `#f0d29a` · `#f0d6a0` · `#f0dfb7` · `#f0e7cf` · `#f0e9ce` · `#f0ecd0` · `#f0f1d6` · `#f0f2d8` · `#f0f3da` · `#f17860` · `#f1cd7f` · `#f1d694` · `#f1e4bd` · `#f1e5bf` · `#f1e9cb` · `#f2cd6f` · `#f2ce7b` · `#f2d49a` · `#f2d5a0` · `#f2dfb1` · `#f2e5ba` · `#f2e7c9` · `#f2ead6` · `#f2eed2` · `#f3dca0` · `#f3deb0` · `#f3e4bb` · `#f3e7bd` · `#f3ead4` · `#f3ebcc` · `#f3f0d5` · `#f3f1d5` · `#f3f7e4` · `#f4cd79` · `#f4d999` · `#f4e4b8` · `#f4e7c5` · `#f4e8b8` · `#f4efcf` · `#f4f0db` · `#f4f6e6` · `#f5d98e` · `#f5dfac` · `#f5e4b5` · `#f5e5a1` · `#f5ebcf` · `#f5eccf` · `#f5edcc` · `#f5edd0` · `#f5efd0` · `#f5efd3` · `#f5f0d7` · `#f6d68a` · `#f6dc91` · `#f6dca8` · `#f6edca` · `#f6eed4` · `#f6efd1` · `#f6f0d5` · `#f6f0d9` · `#f6f1d8` · `#f79b7c` · `#f7b398` · `#f7d5a7` · `#f7edc8` · `#f7eed8` · `#f7efd2` · `#f7f0d7` · `#f8dc90` · `#f8dcaf` · `#f8e6bb` · `#f8efd3` · `#f8efd4` · `#f8f0d4` · `#f8f0d6` · `#f9c5a5` · `#f9efd0` · `#faf0cf` · `#fbefd0` · `#fbf4d6` · `#fbf4df` · `#ff8580` · `#ffd27b` · `#ffd475` · `#ffe098` · `#ffe16a` · `#ffe195` · `#ffe1a0` · `#ffe6a0` · `#ffe6a1` · `#ffe6a3` · `#ffe7a0` · `#fff0b8` · `#fff0b9` · `#fff0c1` · `#fff0c6` · `#fff0c7` · `#fff0cb` · `#fff0cc` · `#fff0cd` · `#fff0cf` · `#fff1a2` · `#fff1ab` · `#fff1cb` · `#fff1cd` · `#fff2c3` · `#fff2cc` · `#fff2d5` · `#fff3c4` · `#fff4d7` · `#fff5d6` · `#fff6de` · `#fff7d8` · `#fff8e4` · `#fffbea`

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
