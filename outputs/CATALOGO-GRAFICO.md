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
| Pasteurizado | [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2123) | Tanque por capacidad, agua, llave, cal, paja, reserva, guía y reloj |
| Oficina | [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2357) | Inventario, ficha de especie, colores y acceso a pedidos |
| Cultivo: sala | [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2553) | Estantes, división de áreas, puerta y personaje |
| Incubación | [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2817) | Bolsas, colonización blanca, manchas verdes, espacios, clima y carritos |
| Fructificación | [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3249) | Frutos por especie, flushes, cosecha, composta, espacios y clima |
| Cuarto estéril | [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4741) | Mesas de acero, puertas, agitación y personaje |
| Preparación estéril | [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5200) | Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos |
| Medios especiales | [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9046) | Frascos, CL y sustrato Cordyceps; mezcla y expansión |
| Esterilizador | [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5577) | Pool preparado, olla, tapa, agua, vapor y reloj |
| Inoculación | [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6533) | Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación |
| Agitación | [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8582) | Frascos CL, puestos, progreso, crecimiento y reservas |
| Química: sala | [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9345) | Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes |
| Extracción | [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9624) | Especie, hongos, molino, material molido, destilador, mechero y matraz |
| Envasado | [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9829) | Matraces, llenadora y cuatro goteros con llenado |
| Nutrientes | [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10063) | Selector de receta, sales A/B, recipiente, mezcla y existencias |
| Espirulina | [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10372) | Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas |
| Tienda | [`drawShop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11383) | Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida |
| Avisos | [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10797) | Marcos temporales sobre requisitos; sin cartel explicativo |

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
- [`drawTreatedBasket`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2107)
- [`drawPasteur`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2123)
- [`drawProcessClock`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2316)
- [`drawPlayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2334)
- [`roomBase`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2340)
- [`smallText`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2350)
- [`drawWarehouse`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2357)
- [`drawChamberRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2432)
- [`drawChamberRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2462)
- [`drawChamberFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2492)
- [`drawClimatePanel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2511)
- [`drawCultivation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2553)
- [`drawGrowBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2689)
- [`drawBagCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2805)
- [`drawIncubation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2817)
- [`drawChamberCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2931)
- [`drawFruitCart`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2959)
- [`drawMushroomFan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L2994)
- [`drawDetailedOysterFan`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3054)
- [`drawOysterCluster`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3109)
- [`drawLionsMane`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3138)
- [`drawReishiFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3157)
- [`drawCordyFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3173)
- [`drawSpeciesFruit`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3214)
- [`drawFruitBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3229)
- [`drawFruiting`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3249)
- [`drawChamberControl`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4141)
- [`drawLabAvatar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4350)
- [`drawPixelShopAvatar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4357)
- [`drawShopPerson`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4600)
- [`drawCustomerOrder`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4627)
- [`drawSterileBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4678)
- [`drawSterileHousingDetail`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4688)
- [`drawSterileShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4712)
- [`drawPrepFaucet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4720)
- [`drawSterileMiniCaption`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4736)
- [`drawSterileRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4741)
- [`drawSawdustPile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4924)
- [`drawEmptySubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4942)
- [`drawPreparedSubstrateBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4959)
- [`drawWoodGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4978)
- [`drawSubstratePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4994)
- [`drawSubstrateNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5037)
- [`drawSubstrateEmptyBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5061)
- [`drawSubstrateEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5108)
- [`drawSubstrateHopper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5127)
- [`drawSubstrateJarGlints`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5190)
- [`drawWoodPrepStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5200)
- [`drawStainlessTable`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5268)
- [`drawStainlessTableLeg`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5390)
- [`drawPressurePot`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5401)
- [`drawPressureLid`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5539)
- [`drawWoodSterilizer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5577)
- [`drawGloveGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5948)
- [`drawLaminarFace`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5981)
- [`drawLaminarSteel`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L5990)
- [`drawLaminarHoodFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6022)
- [`drawLaminarFlowHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6115)
- [`drawSterileWorkroom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6131)
- [`drawLaminarRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6221)
- [`drawLaminarOval`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6225)
- [`drawLaminarJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6239)
- [`drawLaminarBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6299)
- [`drawGloveEnclosure`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6400)
- [`drawGlovePorts`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6481)
- [`drawInoculationBurner`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6497)
- [`drawInoculationCleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6530)
- [`drawGloveStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6533)
- [`drawGloveAnimation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6648)
- [`drawWoodStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6686)
- [`drawAutoMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L6907)
- [`drawHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7239)
- [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7252)
- [`drawSubstrateMixer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7375)
- [`drawWoodFiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7467)
- [`drawWalkTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7481)
- [`drawHopperBar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7676)
- [`drawCoat`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7682)
- [`drawLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8108)
- [`drawLiquidDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8153)
- [`drawPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8260)
- [`drawLiquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8328)
- [`drawMagneticStirrer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8428)
- [`drawAgitationShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8478)
- [`drawAgitationRack`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8497)
- [`drawAgitationStation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8582)
- [`drawLiquidHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8596)
- [`drawEmptyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8987)
- [`drawCordyJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8999)
- [`drawPreparedContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9037)
- [`drawIncubationContainer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9042)
- [`drawSpecialPrep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9046)
- [`drawCordyBlockHood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9149)
- [`drawRicePile`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9181)
- [`drawPreparedPool`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9202)
- [`drawChemistryDoor`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9298)
- [`drawChemistryBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9327)
- [`drawChemistryTray`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9337)
- [`drawChemistry`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9345)
- [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9540)
- [`drawExtractFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9544)
- [`drawDistiller`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9569)
- [`drawExtraction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9624)
- [`drawDropper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9809)
- [`drawBottling`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9829)
- [`drawSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10046)
- [`drawNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10063)
- [`drawSpirulinaFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10340)
- [`drawSpirulina`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10372)
- [`drawSpirulinaJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10504)
- [`drawSignalFeedback`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10797)
- [`drawShopBackdrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11004)
- [`drawShopWallShelf`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11124)
- [`drawShopArtFrame`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11189)
- [`drawShopPottedPlant`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11200)
- [`drawShopWallLayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11255)
- [`drawShopCounter`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11264)
- [`drawShopDisplayProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11310)
- [`drawShopCharacterLayer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11336)
- [`drawWarmShopRoom`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11351)
- [`drawShopProduct`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11355)
- [`drawCoin`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11360)
- [`drawCoinAmount`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11377)
- [`drawMissingOutline`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11655)
- [`drawLooseStraw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12389)
- [`drawDragHarvest`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12407)
- [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12617)
- [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12900)
- [`scene`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12918)

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

Pedidos y sus botones de compra/especie: [`renderOrders`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3315). Inventario de micelios: [`openMyceliumInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L3340). Menú superior de mejoras: [`updateUpgradeMenu`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12288), [`availableUpgradeEntries`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12239) y [`buyMenuUpgrade`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12333). Los controles históricos ocultos siguen en [`updateUpgradeControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7265). Economía/saldo y modo prueba: [`updateEconomyControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11858) y [`updateWallet`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L11842). Controles del cuarto estéril: [`updateK0Controls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8721). Entregas de tienda: [`updateShopControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L4311). Preferencia de sonido: [`updateSoundButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10811). Avisos de desbloqueo: [`renderUnlockNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12023). Visibilidad del recorrido: [`updateProgressionControls`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12196) y [`refreshProgression`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12029). Flecha encadenada: [`drawRouteGuide`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12900), [`routeGuideTarget`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12734) y [`currentRouteStep`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12716). Los pasos específicos de Cordyceps distinguen vista, medio y especie en [`currentRouteModule`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12710).

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: [`beginDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12360), [`updateDrag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12372), [`point`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L888), [`drawCanvasButton`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L9540), [`playerAction`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L10784). Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: `mixBasket`, `jarCase`, `mixTray`, `bagSlot`, `pasteurTankRect`, `incSlots`, `woodStations`, `preparedPoolCards`, `gloveRect`, `chemistryBenches`, `extractionRects`, `nutrientRects`, `spirulinaRects`, `shopInventoryCards` y `missingItemRects`.

## Iconos de cada tipo de arrastre

32 tipos explícitos en un único catálogo. Render común: [`drawDragPreview`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12617); tamaño, centro del mouse y separación/límites para dedo: [`dragPreviewLayout`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12589). Todos los tipos dibujan sólo el objeto, sin tarjeta opaca ni marco adicional; `bare: true` es la política por defecto. Los módulos ya no dibujan vistas previas por separado. El inventario previo y las familias pendientes están en [AUDITORIA-ASSETS-REMODELACION.md](AUDITORIA-ASSETS-REMODELACION.md).

| Tipo de arrastre | Icono | Fondo adicional | Código |
|---|---|---|---|
| `bale` | Paca de paja | Ninguno | [`bale`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12427) |
| `raw` | Paja triturada | Ninguno | [`raw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12428) |
| `straw` | Paja pasteurizada | Ninguno | [`straw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12429) |
| `mixture` | Paja con micelio | Ninguno | [`mixture`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12430) |
| `lime` | Bote de cal | Ninguno | [`lime`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12431) |
| `jar` | Micelio | Ninguno | [`jar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12435) |
| `cleaning` | Spray y trapo | Ninguno | [`cleaning`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12443) |
| `incbag` | Bolsa sin incubar | Ninguno | [`incbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12444) |
| `readybag` | Bolsa de incubación | Ninguno | [`readybag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12454) |
| `fruitbag` | Bloque para fructificar | Ninguno | [`fruitbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12464) |
| `harvestbag` | Hongos o bloque para composta | Ninguno | [`harvestbag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12474) |
| `woodRaw` | Aserrín o arroz | Ninguno | [`woodRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12477) |
| `woodBag` | Bolsa o frasco vacío | Ninguno | [`woodBag`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12482) |
| `woodNutrients` | Nutrientes | Ninguno | [`woodNutrients`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12490) |
| `woodPrepared` | Recipiente preparado | Ninguno | [`woodPrepared`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12498) |
| `gloveInoculum` | Micelio interior | Ninguno | [`gloveInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12503) |
| `gloveWood` | Bolsa esterilizada | Ninguno | [`gloveWood`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12511) |
| `gloveJar` | Frasco de micelio | Ninguno | [`gloveJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12516) |
| `gloveClean` | Limpieza de cabina | Ninguno | [`gloveClean`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12524) |
| `cordyInoculum` | Cultivo líquido maduro | Ninguno | [`cordyInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12529) |
| `liquidPetri` | Placa Petri | Ninguno | [`liquidPetri`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12534) |
| `liquidJar` | Cultivo líquido inoculado | Ninguno | [`liquidJar`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12535) |
| `chemRaw` | Hongos para extracción | Ninguno | [`chemRaw`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12540) |
| `chemGround` | Hongos molidos | Ninguno | [`chemGround`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12543) |
| `chemFlask` | Matraz de extracto | Ninguno | [`chemFlask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12553) |
| `chemSalt` | Sales A o B | Ninguno | [`chemSalt`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12556) |
| `spirulinaFeed` | Solución nutritiva | Ninguno | [`spirulinaFeed`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12565) |
| `spirulinaCrop` | Espirulina cosechada | Ninguno | [`spirulinaCrop`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12568) |
| `spirulinaMother` | Matraz madre | Ninguno | [`spirulinaMother`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12571) |
| `spirulinaInoculum` | Matraz de inoculación | Ninguno | [`spirulinaInoculum`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12574) |
| `shopInventory` | Producto de tienda | Ninguno | [`shopInventory`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12577) |
| `shopcustomer` | Cliente seleccionado | Ninguno | [`shopcustomer`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L12580) |

En celular/lápiz el encuadre del icono intenta medir 76 píxeles CSS y queda separado 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Asistentes: planificación y avisos

Tareas compartidas con contexto y ejecución única: [`createAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7032); cancelación: [`cancelAssistantTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7051). Preparación principal: [`nextHelperTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7088) y [`advanceAutomation`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7186); laboratorio: [`nextLabTask`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7773) y [`advanceLabHelper`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8059). Los cambios de receta pasan por [`setPrepRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8868) y [`setSterilizerRecipeMode`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8878).

Avisos de faltantes/capacidad/pasos manuales: [`helperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7059), [`labHelperShortage`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L8025) y [`labInoculationNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7997). Ambas burbujas comparten [`drawAssistantNotice`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/outputs/BEEFUNGI-MESA-PAJA.html#L7252); la de laboratorio se eleva cuando quedan muy juntas en la sala principal.

## Paleta actual

1410 colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

`#142632` · `#16303a` · `#17283a` · `#22373b` · `#243b49` · `#243b4d` · `#243e48` · `#24434f` · `#253f45` · `#263f4c` · `#28434b` · `#284b55` · `#2c4650` · `#2c4a51` · `#2f4f55` · `#304554` · `#30484a` · `#304b50` · `#304d59` · `#304f54` · `#304f59` · `#314654` · `#324c60` · `#32505b` · `#334b51` · `#334f60` · `#344655` · `#344b57` · `#344b62` · `#344d5e` · `#344e48` · `#344f59` · `#34515b` · `#34545f` · `#345660` · `#345762` · `#345a65` · `#345b66` · `#345c67` · `#354d55` · `#354f4c` · `#354f5b` · `#355563` · `#35585e` · `#355968` · `#355b65` · `#355c66` · `#355e68` · `#364e5c` · `#365863` · `#365b65` · `#375b67` · `#375c65` · `#385762` · `#385868` · `#385b66` · `#385e70` · `#395a68` · `#395d68` · `#395e6b` · `#3a5d65` · `#3b5960` · `#3b775e` · `#3c5b63` · `#3c5b69` · `#3c626e` · `#3d6067` · `#3d6265` · `#3d626c` · `#3e5b65` · `#3e6069` · `#3f6266` · `#3f626b` · `#3f666f` · `#3f8159` · `#405652` · `#405b68` · `#405f6b` · `#414640` · `#416674` · `#416970` · `#416b75` · `#416e61` · `#42686f` · `#426a74` · `#436b76` · `#438458` · `#44645e` · `#446872` · `#44696e` · `#466557` · `#466c74` · `#47676c` · `#486d7c` · `#486e73` · `#496769` · `#496b70` · `#496b73` · `#496c4d` · `#496d75` · `#496e70` · `#497975` · `#4a6b70` · `#4b6b6c` · `#4b6f70` · `#4b727a` · `#4c6e72` · `#4c7476` · `#4d4434` · `#4d6d70` · `#4d6f70` · `#4d707c` · `#4d7476` · `#4e7375` · `#4f625e` · `#4f7273` · `#4f7579` · `#4f7679` · `#4f777d` · `#4f7959` · `#503e34` · `#507a80` · `#508a91` · `#516b61` · `#517a7e` · `#526b6b` · `#526e70` · `#526f73` · `#526f7e` · `#52746a` · `#52747a` · `#52757c` · `#52767a` · `#52777b` · `#527a78` · `#527d80` · `#527e86` · `#536b64` · `#537169` · `#537780` · `#54746f` · `#547576` · `#54776e` · `#547974` · `#547b7e` · `#547d7d` · `#557585` · `#55777a` · `#557b80` · `#557c80` · `#557f80` · `#558c65` · `#56766e` · `#567b78` · `#567b7e` · `#567c78` · `#577273` · `#577567` · `#577784` · `#577b7b` · `#577f7d` · `#587b7b` · `#587b81` · `#587c7d` · `#587c83` · `#587d78` · `#587d7e` · `#587d80` · `#597c7e` · `#597d7c` · `#597f82` · `#5a7d7d` · `#5b5040` · `#5b7974` · `#5c7780` · `#5c9f98` · `#5d7e83` · `#5d805c` · `#5e432c` · `#5e5840` · `#5f3f2b` · `#5f8383` · `#60857e` · `#617779` · `#617b86` · `#617c74` · `#617f7c` · `#617f7d` · `#618a94` · `#618b8c` · `#624638` · `#638591` · `#638b87` · `#638b8b` · `#638b8d` · `#64867e` · `#648789` · `#648886` · `#655c41` · `#658589` · `#658983` · `#658a88` · `#658e8b` · `#668b85` · `#668d87` · `#669195` · `#678263` · `#688784` · `#688995` · `#688d8c` · `#688e88` · `#689199` · `#694f36` · `#698d91` · `#698e8d` · `#6994a0` · `#69b794` · `#6a5c45` · `#6a8465` · `#6a8a8c` · `#6a9084` · `#6a929b` · `#6a9383` · `#6aab87` · `#6b5745` · `#6b705d` · `#6b7e83` · `#6b8c86` · `#6c644c` · `#6c7d7d` · `#6c8653` · `#6c8d8c` · `#6c8e95` · `#6c9090` · `#6c9291` · `#6d624a` · `#6d8794` · `#6d8c84` · `#6d9188` · `#6d9698` · `#6d9aa5` · `#6da9ba` · `#6e694a` · `#6e775b` · `#6e8c8b` · `#6e8f7c` · `#6e9c95` · `#6f4a30` · `#6f5138` · `#6f5338` · `#6f8b77` · `#6f8b81` · `#6f9473` · `#6f969e` · `#70543f` · `#708f8e` · `#718e87` · `#71908b` · `#71918a` · `#71948a` · `#72928f` · `#729390` · `#7297a3` · `#7298a6` · `#73816c` · `#738f89` · `#73929a` · `#73938b` · `#73968f` · `#7397a5` · `#73988d` · `#739d96` · `#739f95` · `#749b99` · `#749c7e` · `#749c98` · `#755139` · `#75674f` · `#75927f` · `#759592` · `#759994` · `#759b98` · `#75b7a7` · `#765b40` · `#76959c` · `#76978e` · `#76979b` · `#769991` · `#776f4b` · `#779694` · `#779a94` · `#78968c` · `#78978d` · `#789b8d` · `#789b97` · `#78c9d2` · `#795538` · `#79938b` · `#79ae64` · `#7a5a3c` · `#7a9d92` · `#7aa3a5` · `#7b9d98` · `#7c9a8e` · `#7c9ca5` · `#7ca6ae` · `#7cb68b` · `#7d5537` · `#7d9186` · `#7d9a97` · `#7d9d92` · `#7d9e95` · `#7e978b` · `#7e9995` · `#7e9e91` · `#7e9f95` · `#7ea8ae` · `#7f3431` · `#7faaa2` · `#7fb7be` · `#80aaa0` · `#80b0ac` · `#81967c` · `#81977c` · `#82918c` · `#829f95` · `#82a5a1` · `#82a9b6` · `#839781` · `#839f98` · `#83a5aa` · `#83b9df` · `#83bfc7` · `#83c6ad` · `#84928b` · `#849680` · `#855b40` · `#85978a` · `#85987d` · `#85ada9` · `#85c3ca` · `#86aba6` · `#879c82` · `#87a69a` · `#87a6ac` · `#87aab7` · `#87aeb3` · `#87b3a6` · `#88754d` · `#88998a` · `#88a79b` · `#88a99f` · `#895f3f` · `#897858` · `#89a69a` · `#89c5d6` · `#8a5f2a` · `#8a714f` · `#8aabb0` · `#8aaf9e` · `#8b6547` · `#8b6846` · `#8b795a` · `#8b9e9d` · `#8ba8a2` · `#8ba9a1` · `#8babaa` · `#8bafb3` · `#8bc5d2` · `#8bd1d1` · `#8c613e` · `#8c977f` · `#8ca49b` · `#8caaa0` · `#8d4934` · `#8d6947` · `#8d724e` · `#8d9e85` · `#8da89f` · `#8da99a` · `#8daaa6` · `#8e7953` · `#8eA187` · `#8ea99b` · `#8eaaa5` · `#8eaba0` · `#8eacb2` · `#8eada0` · `#8eae7c` · `#8eafad` · `#8eb8a2` · `#8ec6ae` · `#8ecea6` · `#8f6430` · `#8f6e51` · `#8f7547` · `#8fA18a` · `#8fA38c` · `#8fa18f` · `#8fa389` · `#8fa895` · `#8fa998` · `#8fa99f` · `#8fa9ac` · `#8fa9af` · `#8fadb2` · `#8fae9f` · `#8fb6b0` · `#8fc8df` · `#91653f` · `#91a585` · `#91aaa0` · `#91afaa` · `#91b3a9` · `#91c49f` · `#927150` · `#927c58` · `#92b29a` · `#92b3ad` · `#92b9b4` · `#92e3d0` · `#936f45` · `#937545` · `#93babd` · `#94b0a1` · `#94b8b6` · `#95a98f` · `#95b09c` · `#963c30` · `#966e42` · `#967451` · `#96765c` · `#96afa9` · `#96c69c` · `#976f4c` · `#977451` · `#97ceba` · `#986b47` · `#987145` · `#987351` · `#987448` · `#98784b` · `#987c56` · `#987d58` · `#997446` · `#99b2a6` · `#99b5a6` · `#9a7044` · `#9a734e` · `#9a7955` · `#9a9a87` · `#9aac94` · `#9aafa1` · `#9b6a30` · `#9b6d45` · `#9b814e` · `#9b8353` · `#9baea0` · `#9bafa0` · `#9bb6b4` · `#9bbfb2` · `#9c6d33` · `#9c7c4e` · `#9c7f58` · `#9caa8d` · `#9caa93` · `#9cae95` · `#9caf9d` · `#9d743c` · `#9d814f` · `#9db19d` · `#9db5ac` · `#9db7b6` · `#9e715a` · `#9e885c` · `#9ed3aa` · `#9faf8e` · `#9fb8a9` · `#9fbcb0` · `#a0bab4` · `#a1b293` · `#a1bbb0` · `#a1c3b6` · `#a27849` · `#a27a52` · `#a2815c` · `#a28e61` · `#a29166` · `#a2b192` · `#a2b7a4` · `#a2b7a6` · `#a2beb1` · `#a2ceba` · `#a34f3a` · `#a37d52` · `#a3805c` · `#a38250` · `#a3b17a` · `#a3b397` · `#a3b9aa` · `#a3bcb0` · `#a3bfb1` · `#a4b699` · `#a4b6a4` · `#a4bbac` · `#a4bfb1` · `#a4cfcb` · `#a4d8d3` · `#a4e2e4` · `#a58151` · `#a58b69` · `#a58f6a` · `#a5b69e` · `#a5bc83` · `#a5beb0` · `#a5c4bc` · `#a5c7b7` · `#a5ccca` · `#a6764c` · `#a687ad` · `#a6a995` · `#a6ae8b` · `#a6b598` · `#a6b799` · `#a6b8aa` · `#a6b9ac` · `#a6bec1` · `#a6bfb0` · `#a6c0ac` · `#a6c2b9` · `#a6c8bf` · `#a77f46` · `#a79873` · `#a7b6aa` · `#a7b9a7` · `#a7bca2` · `#a7c0af` · `#a7c39a` · `#a7c5ba` · `#a7cac0` · `#a7d8bc` · `#a8793f` · `#a87a68` · `#a87c56` · `#a88f68` · `#a89e7c` · `#a89f83` · `#a8b99a` · `#a8b99b` · `#a8bbae` · `#a8bdaa` · `#a8c0ad` · `#a8c4bd` · `#a98955` · `#a99a7c` · `#a9afa1` · `#a9b695` · `#a9b9a9` · `#a9bbb4` · `#a9bdc3` · `#a9bfb0` · `#a9c6b7` · `#a9c6c2` · `#aa9670` · `#aaba98` · `#aac8b2` · `#abbba3` · `#acc896` · `#accfd5` · `#ad8552` · `#adbb9f` · `#adc1b2` · `#adc6bc` · `#adc6bd` · `#add2ab` · `#ae7e3d` · `#ae8249` · `#aeb99c` · `#aebcaf` · `#aebda9` · `#aec3c6` · `#aec4b9` · `#aec5b0` · `#afbd9f` · `#afc396` · `#afc3b6` · `#afcbc0` · `#afd5bd` · `#b08a59` · `#b08c51` · `#b0bfac` · `#b0c6a4` · `#b0d9d5` · `#b18460` · `#b18b57` · `#b18b5e` · `#b18c57` · `#b18d59` · `#b18f59` · `#b1bba0` · `#b1bd9d` · `#b1c0a5` · `#b1c6b5` · `#b1c9b8` · `#b1e5e4` · `#b27652` · `#b28a60` · `#b29a70` · `#b2a383` · `#b2bca7` · `#b2d3cc` · `#b38253` · `#b3834e` · `#b38b59` · `#b38c56` · `#b38e59` · `#b3a17d` · `#b3bda0` · `#b3c1a3` · `#b3c6b8` · `#b3c6be` · `#b3d9d7` · `#b4655b` · `#b49055` · `#b49565` · `#b4c6b3` · `#b4d5be` · `#b4dce2` · `#b58c60` · `#b59173` · `#b5c2a7` · `#b5ccc2` · `#b5d39f` · `#b5e0dc` · `#b66e51` · `#b6965c` · `#b6b8a1` · `#b6b9a0` · `#b6c39c` · `#b6c5b0` · `#b6d8c8` · `#b78c5b` · `#b7985d` · `#b7a27a` · `#b7c1a8` · `#b7c3a5` · `#b7c7b6` · `#b7cbc5` · `#b7ccbd` · `#b7cfb8` · `#b7cfbf` · `#b7d0cd` · `#b7dcd8` · `#b88562` · `#b8976e` · `#b8a564` · `#b8a570` · `#b8ad89` · `#b8af90` · `#b8b49a` · `#b8b59e` · `#b8c1a4` · `#b8c6ae` · `#b8c6b3` · `#b8c9b8` · `#b8ced0` · `#b8d3bf` · `#b8d4d6` · `#b8d69d` · `#b8dbca` · `#b8dec2` · `#b8eef0` · `#b95141` · `#b9955f` · `#b99a5b` · `#b9a770` · `#b9c7a6` · `#b9c9b7` · `#b9cbb3` · `#b9ccb0` · `#b9cdc1` · `#b9cecd` · `#b9cfbe` · `#b9d5d4` · `#b9d8cc` · `#b9d9cc` · `#bac6a9` · `#bacbb6` · `#bad4c3` · `#bad6bc` · `#badbc5` · `#bae398` · `#bba174` · `#bc5436` · `#bc8539` · `#bc8a43` · `#bc955c` · `#bca982` · `#bccba9` · `#bcd0b7` · `#bce5dd` · `#bd6051` · `#bd845a` · `#bd8e53` · `#bd934b` · `#bd965f` · `#bd995f` · `#bd9b58` · `#bd9c62` · `#bdac7d` · `#bdc6a3` · `#bdc7b0` · `#bdcbb7` · `#bdcbb9` · `#bdcdb7` · `#bdcdb8` · `#bdcfbf` · `#bdcfca` · `#bdd0c3` · `#bdd3c8` · `#be8942` · `#be9555` · `#be9b64` · `#bec3a8` · `#bec9ad` · `#becbb6` · `#bf9954` · `#bf9c60` · `#bfae8b` · `#bfd09a` · `#c0aa7d` · `#c0cdb8` · `#c0d0b4` · `#c0d98c` · `#c15a36` · `#c19c5c` · `#c1b99a` · `#c1c5ab` · `#c1cdb3` · `#c1d0b9` · `#c1d4bd` · `#c1d4cd` · `#c1d6cb` · `#c1d7c4` · `#c1d8b6` · `#c2a67d` · `#c2b27e` · `#c2cdb0` · `#c2ceba` · `#c2d0b6` · `#c2d1bb` · `#c2d2bc` · `#c2d6c9` · `#c2dfd7` · `#c2e2dc` · `#c2e3dc` · `#c39960` · `#c39d63` · `#c3a77a` · `#c3ad80` · `#c3d0b9` · `#c3d6bc` · `#c3d6cd` · `#c48d3c` · `#c4ae75` · `#c4b28b` · `#c4c68b` · `#c4c9aa` · `#c4ca9f` · `#c4ccad` · `#c4cdb5` · `#c4d3b6` · `#c4d6bc` · `#c4d8b9` · `#c4d9a3` · `#c54442` · `#c59a4f` · `#c59b61` · `#c5a56e` · `#c5a875` · `#c5b77f` · `#c5b891` · `#c5ceba` · `#c5d1b6` · `#c5d1bd` · `#c5d2b9` · `#c5d3ba` · `#c5d6bd` · `#c5d7ce` · `#c5d9d0` · `#c5d9d1` · `#c5e4df` · `#c69879` · `#c69b62` · `#c6a477` · `#c6ae82` · `#c6b18b` · `#c6b98c` · `#c6bb98` · `#c6c4a6` · `#c6cbb3` · `#c6cdb7` · `#c6cfaf` · `#c6cfb1` · `#c6d0af` · `#c6d1ad` · `#c6d1b8` · `#c6d7d1` · `#c6d9c8` · `#c6e1ca` · `#c74443` · `#c7b27d` · `#c7b58d` · `#c7c6af` · `#c7cbb2` · `#c7d1b3` · `#c7d7c2` · `#c7d8c7` · `#c8973f` · `#c8a36b` · `#c8a86b` · `#c8d4bc` · `#c8d5b9` · `#c8d5cb` · `#c8d7c4` · `#c8d8a4` · `#c8d8c1` · `#c8d9cd` · `#c8dac3` · `#c8dbcb` · `#c8ddc3` · `#c9973f` · `#c99b63` · `#c9a66a` · `#c9b887` · `#c9b98d` · `#c9bd9b` · `#c9caae` · `#c9d1ba` · `#c9d7b5` · `#c9d7b8` · `#c9dccc` · `#ca8252` · `#cad0ba` · `#cad3ae` · `#cad8bc` · `#cadbd1` · `#cb7634` · `#cb9474` · `#cbb67d` · `#cbd0aa` · `#cbd3bc` · `#cbd4b3` · `#cbd7b8` · `#ccc5a6` · `#ccd2b2` · `#ccd7bd` · `#cdb279` · `#cdd5af` · `#cdd6a5` · `#cec6a8` · `#cee2d7` · `#cee6dc` · `#cfa17f` · `#cfad73` · `#cfae80` · `#cfd6ba` · `#cfddc3` · `#d0a66f` · `#d0b478` · `#d0d5b5` · `#d0d9c2` · `#d1a56f` · `#d1af6b` · `#d1c29a` · `#d1d5b9` · `#d1d9be` · `#d1dac0` · `#d1dcc2` · `#d1dfc4` · `#d1e0c8` · `#d1e2ce` · `#d1e4d0` · `#d2a36a` · `#d2bc92` · `#d2c398` · `#d2c39b` · `#d2d2b8` · `#d2d5ad` · `#d2d6bb` · `#d2d9bd` · `#d2dec6` · `#d2ded0` · `#d2dfca` · `#d2e5df` · `#d3a554` · `#d3ad72` · `#d3bb77` · `#d3c6a0` · `#d3d0b9` · `#d3d3af` · `#d3d8b8` · `#d3d9bb` · `#d3dcc2` · `#d3ddc4` · `#d3dec1` · `#d3dec4` · `#d3e5df` · `#d3e6c9` · `#d4ac5b` · `#d4b27b` · `#d4b76f` · `#d4b977` · `#d4bd85` · `#d4c28a` · `#d4c7a4` · `#d4d8b9` · `#d4dfc9` · `#d4e2c4` · `#d4e3c4` · `#d5c49c` · `#d5cbb0` · `#d5d9be` · `#d5dfb8` · `#d5dfca` · `#d5dfcb` · `#d5e5c8` · `#d5e6bd` · `#d5ebe0` · `#d6b278` · `#d6b780` · `#d6bb7c` · `#d6c7a5` · `#d6c8a0` · `#d6d4b9` · `#d6d9be` · `#d6dcc2` · `#d6ddc4` · `#d6dfc1` · `#d6dfc3` · `#d6dfc6` · `#d6e2cc` · `#d6e3cd` · `#d6e8d3` · `#d7a34d` · `#d7b57d` · `#d7bd8a` · `#d7cba9` · `#d7ccaa` · `#d7d9b4` · `#d7dfc2` · `#d7dfc7` · `#d7dfc8` · `#d7dfca` · `#d7e2c4` · `#d8857f` · `#d89a6d` · `#d8a763` · `#d8af5c` · `#d8afa1` · `#d8b47b` · `#d8b87d` · `#d8bc85` · `#d8bd85` · `#d8ca9f` · `#d8cfac` · `#d8d8b8` · `#d8dba1` · `#d8dec2` · `#d8dfc7` · `#d8e0c1` · `#d8e1c8` · `#d8e2c8` · `#d8e2c9` · `#d8e2cc` · `#d8e4cc` · `#d9b781` · `#d9b89b` · `#d9b97b` · `#d9b97f` · `#d9ba7d` · `#d9c48c` · `#d9c58c` · `#d9caa2` · `#d9d4b6` · `#d9dfc0` · `#d9dfc3` · `#d9dfc4` · `#d9dfc5` · `#d9dfc7` · `#d9dfc9` · `#d9e4cc` · `#d9e4cf` · `#d9e5d0` · `#d9e8cf` · `#dae1c6` · `#dae2c4` · `#dae6cc` · `#dbb17e` · `#dbc18d` · `#dbe0c7` · `#dbe2cc` · `#dbe5d8` · `#dcaf7c` · `#dcb580` · `#dcc18b` · `#dcc296` · `#dcc69b` · `#dcd6b8` · `#dce1c7` · `#dce2b2` · `#dce2c5` · `#dce3c9` · `#dce4ca` · `#dce5c9` · `#dce7ca` · `#dce9d7` · `#ddbd7f` · `#ddcca0` · `#ddcfaa` · `#ddd0a7` · `#dde4ca` · `#dde5c9` · `#dde7cf` · `#dde9d2` · `#debe7e` · `#dec28b` · `#dec38a` · `#dedfc4` · `#dee4cb` · `#deece2` · `#dfE6cc` · `#dfad45` · `#dfb58f` · `#dfbc84` · `#dfcb8d` · `#dfcf9e` · `#dfd3ae` · `#dfdfb8` · `#dfe3c9` · `#dfe5ce` · `#dfe6ca` · `#dfebcf` · `#e08a77` · `#e0b45c` · `#e0bb7d` · `#e0c99a` · `#e0cd96` · `#e0dcb9` · `#e0dcc0` · `#e0e2c7` · `#e0e3c8` · `#e0e8dc` · `#e0e9cd` · `#e0e9d1` · `#e0ebce` · `#e1c28c` · `#e1cca2` · `#e1d3ad` · `#e1d6b9` · `#e1df9b` · `#e1e3c7` · `#e1e3c9` · `#e1e5c9` · `#e1e6bd` · `#e1e6c7` · `#e1e6cc` · `#e1e6ce` · `#e1e8cf` · `#e1e9d7` · `#e2a25a` · `#e2b67b` · `#e2b77d` · `#e2bd7d` · `#e2c18a` · `#e2c88f` · `#e2d6ae` · `#e2d8b5` · `#e2dac2` · `#e2e3c3` · `#e2e7ca` · `#e2e8cc` · `#e2ebd0` · `#e2ebdf` · `#e3514e` · `#e3b77c` · `#e3ba7a` · `#e3ba81` · `#e3c47e` · `#e3c590` · `#e3c795` · `#e3cc8b` · `#e3dcc0` · `#e3e4c7` · `#e3e4c8` · `#e3e5c9` · `#e3e7cb` · `#e3e8cc` · `#e3e8d1` · `#e3e9cd` · `#e4c47c` · `#e4c58f` · `#e4c68c` · `#e4d7b5` · `#e4d8b1` · `#e4e4c7` · `#e4e5c7` · `#e4e5c8` · `#e4e5c9` · `#e4e5cb` · `#e4e6cc` · `#e4e7c9` · `#e4e8ce` · `#e4e8cf` · `#e4e9ca` · `#e4e9ce` · `#e4e9d9` · `#e4edda` · `#e4efda` · `#e5be82` · `#e5c488` · `#e5c883` · `#e5cd8a` · `#e5d1a0` · `#e5d5ad` · `#e5ddbf` · `#e5e3bc` · `#e5e5c7` · `#e5e5c9` · `#e5e6c7` · `#e5e8cb` · `#e5e9cb` · `#e5e9cf` · `#e5ece0` · `#e5edce` · `#e6bf6d` · `#e6d2a8` · `#e6dec0` · `#e6e5cb` · `#e6e7c7` · `#e6e7ce` · `#e6e8cf` · `#e6e9c8` · `#e6e9cb` · `#e6ebce` · `#e6ecd3` · `#e6ecd4` · `#e6edcf` · `#e7b858` · `#e7c48d` · `#e7c581` · `#e7c85e` · `#e7d5b4` · `#e7dbb9` · `#e7e4c8` · `#e7e5c7` · `#e7e6c8` · `#e7e6cb` · `#e7e8c9` · `#e7e8cd` · `#e7e9c9` · `#e7ead4` · `#e7f1db` · `#e7f1df` · `#e7f6e9` · `#e8b36c` · `#e8bd95` · `#e8c17b` · `#e8c58f` · `#e8cb92` · `#e8d5aa` · `#e8d69a` · `#e8dbb6` · `#e8ddbf` · `#e8e5c9` · `#e8e6c9` · `#e8e6d0` · `#e8e9cd` · `#e8edcf` · `#e9bf66` · `#e9c46e` · `#e9c58a` · `#e9cd85` · `#e9dba4` · `#e9dbb6` · `#e9dcc0` · `#e9dfbf` · `#e9e5b9` · `#e9e5c8` · `#e9e8c9` · `#e9e8ca` · `#e9ead2` · `#e9edcf` · `#eac59a` · `#eac8a0` · `#ead29b` · `#ead7aa` · `#eadbb0` · `#eb9d3b` · `#ebce97` · `#ebd49a` · `#ebe7ce` · `#ebedcf` · `#ecb37b` · `#ecc88b` · `#ecd08b` · `#ecd49d` · `#ece0af` · `#ece2bd` · `#ece3c0` · `#ece6c1` · `#ece8cb` · `#ece9cb` · `#ed9c77` · `#edbd69` · `#edc29a` · `#edc858` · `#edc89f` · `#edd09b` · `#eddfb8` · `#eddfb9` · `#ede2c4` · `#edf0d2` · `#edf0d3` · `#edf0d4` · `#edf0d5` · `#edf0d7` · `#edf1d5` · `#eea17f` · `#eec767` · `#eee0b6` · `#eee1ba` · `#eee1bc` · `#eee2bd` · `#eee3bf` · `#eee4c4` · `#eee4c7` · `#eee5c9` · `#eee6c7` · `#eee6cb` · `#eee8ca` · `#eef0c9` · `#eef0d0` · `#eef0da` · `#eef1d8` · `#eef2d6` · `#ef9461` · `#efcb7b` · `#efe0ae` · `#efe1b9` · `#efe2bc` · `#efe3bf` · `#eff0cc` · `#eff1d8` · `#eff2df` · `#f0c676` · `#f0d29a` · `#f0d6a0` · `#f0dfb7` · `#f0e0b7` · `#f0e2b9` · `#f0e2bb` · `#f0e2bd` · `#f0e5c7` · `#f0e9cc` · `#f0e9ce` · `#f0ebcd` · `#f0ecd0` · `#f0ecd4` · `#f0f1d6` · `#f0f2d8` · `#f0f3da` · `#f17860` · `#f1bf80` · `#f1cd7f` · `#f1d0a4` · `#f1d694` · `#f1d69d` · `#f1ddb0` · `#f1dfb4` · `#f1dfb9` · `#f1e5bf` · `#f1e6bd` · `#f1e7c7` · `#f1e8ca` · `#f1e8cb` · `#f1e8cd` · `#f1ecd0` · `#f1edd5` · `#f1efd3` · `#f2cd6f` · `#f2ce7b` · `#f2d49a` · `#f2e2bb` · `#f2e2bd` · `#f2e7c9` · `#f2e8c8` · `#f2e8ca` · `#f2ead0` · `#f2eed2` · `#f2efd0` · `#f3dca0` · `#f3deb0` · `#f3e4bb` · `#f3e7bd` · `#f3e9ca` · `#f3eed4` · `#f3f0d5` · `#f3f7e4` · `#f4cd79` · `#f4e4b8` · `#f4e7c5` · `#f4e8b8` · `#f4e8c6` · `#f4e8c8` · `#f4efcf` · `#f4efd0` · `#f4efd2` · `#f4efd6` · `#f4f6e6` · `#f5b85a` · `#f5d4aa` · `#f5d98e` · `#f5d99d` · `#f5dfac` · `#f5e4b5` · `#f5e5a1` · `#f5e9c9` · `#f5eccf` · `#f5edcc` · `#f5edce` · `#f5edd0` · `#f5eed6` · `#f5efd2` · `#f5efd3` · `#f6d68a` · `#f6dc91` · `#f6edcd` · `#f6eed4` · `#f6efd1` · `#f6f0d5` · `#f6f1d5` · `#f79b7c` · `#f7b398` · `#f7e8c4` · `#f7e9c7` · `#f7edc8` · `#f7eed0` · `#f7efd2` · `#f7f0d2` · `#f8dc90` · `#f8dcaf` · `#f8e6bb` · `#f8edcc` · `#f8edcd` · `#f8efd4` · `#f8f0d4` · `#f8f0d6` · `#f8f1d7` · `#f8f3d9` · `#f9c5a5` · `#f9eac4` · `#f9f0d3` · `#faf0cf` · `#faf0d2` · `#faf0d4` · `#faf0d6` · `#faf1d7` · `#fbefcf` · `#fbefd0` · `#fbf4d6` · `#fcf2d4` · `#fdf5da` · `#ff8580` · `#ffd37d` · `#ffd475` · `#ffe16a` · `#ffe195` · `#ffe1a0` · `#ffe2aa` · `#ffe6a0` · `#ffe6a1` · `#ffe6a3` · `#ffe7a0` · `#fff0b8` · `#fff0b9` · `#fff0c1` · `#fff0c6` · `#fff0cb` · `#fff0cc` · `#fff0cd` · `#fff0ce` · `#fff0cf` · `#fff0d1` · `#fff1a2` · `#fff1ab` · `#fff1cd` · `#fff1d1` · `#fff2cc` · `#fff2d1` · `#fff2d3` · `#fff2d4` · `#fff3c4` · `#fff4cf` · `#fff4d9` · `#fff5d6` · `#fff5de` · `#fff6de` · `#fff7d8` · `#fff8e4`

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
