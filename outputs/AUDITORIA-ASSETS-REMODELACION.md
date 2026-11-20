# Auditoría de assets y plan de remodelación

Inventario previo a esta pasada, revisado sobre la fuente única `BEEFUNGI-MESA-PAJA.html` y las referencias archivadas. Base del proyecto: commit `be91956` (clientes de tienda ampliados). Las posiciones de línea cambiarán al integrar los dibujos: consultar el [catálogo regenerado](CATALOGO-GRAFICO.md) por nombre de función.

Esta auditoría separa **estado comprobado en código y documentación** de **calidad visual por validar en pantalla**. Que exista un dibujo detallado o una referencia no implica que todos sus estados ya hayan pasado una nueva revisión visual.

## 1. Qué significa quitar el fondo

- **Tarjeta de arrastre:** dos rectángulos de 48 × 48 y 46 × 46, crema y azul, que `drawDragPreview` añade cuando el icono no declara `bare`. Este es el cuadrado adicional que aún acompaña a la paja y otros objetos.
- **Superficie del objeto:** el cuerpo de una paca, una etiqueta de frasco, la tapa del Petri, el trapo, la bolsa o una sombra de contacto pertenecen al sprite. No se borran por ser rectangulares.
- **Fondo del módulo:** pared, mesa, repisa, suelo y sus luces son capas del cuarto. Se conservan en sus funciones de ambiente. Quitar la tarjeta del arrastre no significa quitar estos fondos.

Los sprites se dibujan con código; no hay un PNG con fondo incrustado que recortar para eliminar la tarjeta. La transparencia se obtiene dejando de pintar los dos rectángulos del renderizador común. El nuevo estilo de un objeto sigue el método **referencia → dibujo compartido en código → módulo/arrastre/animación → validación**.

## 2. Inventario previo de arrastres

**32 tipos registrados: 17 con tarjeta opaca por herencia y 15 ya sin tarjeta mediante `bare: true`.** La columna de estado describe el inicio de la pasada, no el resultado final. Una misma función puede producir varias especies o estados.

| Tipo | Asset y dibujante usado en el arrastre | Estado previo | Dónde contrastarlo |
| --- | --- | --- | --- |
| `bale` | Paca: `bale` | **Con tarjeta** | `drawCrusherStation`; carga a tolva y cola de pacas. |
| `raw` | Paja triturada: `drawLooseStraw` | **Con tarjeta** | Cesto del triturador y entrada de pasteurizado; contrastar fibras con `drawStrawFibers` y `drawWarmBasket`. |
| `straw` | Paja pasteurizada: `drawLooseStraw` | **Con tarjeta** | Reserva de pasteurizado y cesto de `drawMix`. |
| `mixture` | Paja con micelio: `drawLooseStraw(true)` | **Con tarjeta** | Mezcla lista y llenado de bolsa; distinguir blanco del micelio de la suciedad. |
| `lime` | Bote de cal: rectángulos inline en el catálogo | **Con tarjeta** | `drawPasteur`; el bote de origen y la animación `limePour` también están dibujados inline. |
| `jar` | Micelio de mezcla: `jar`, dibujo heredado | Sin tarjeta | Vitrina de `drawMix` y arrastre; **aún no comparte** el nuevo `drawLaminarJar` de la campana. |
| `cleaning` | Spray y trapo: `drawCleaningKit` | **Con tarjeta** | `drawMix`; comparar con el kit de inoculación para unificar materiales. |
| `incbag` | Bolsa recién preparada: `drawIncubationContainer` | Sin tarjeta | Carrito de entrada a incubación; respetar especie y sustrato. |
| `readybag` | Bolsa incubada o en proceso: `drawIncubationContainer` | Sin tarjeta | `drawIncubation`, estantes y traslado; colonización y contaminación. |
| `fruitbag` | Bloque colonizado: `drawIncubationContainer` | Sin tarjeta | Carrito de entrada y estantes de `drawFruiting`. |
| `harvestbag` | Racimo o bloque: `drawDragHarvest` | Sin tarjeta | Fructificación: sólo frutos al cosechar; recipiente completo hacia composta. |
| `woodRaw` | Aserrín/arroz: `drawSubstratePile` | Sin tarjeta | `drawWoodPrepStation`, `drawSpecialPrep` y tolvas. |
| `woodBag` | Bolsa o frasco vacío: `drawSubstrateEmptyBag`, `drawSubstrateEmptyJar` | Sin tarjeta | Preparación de madera, arroz y CL; mantener el recipiente vacío. |
| `woodNutrients` | Nutrientes: `drawSubstrateNutrients` | Sin tarjeta | Mesa de sustrato y reserva de llenadora. |
| `woodPrepared` | Recipiente preparado: `drawPreparedContainer` | Sin tarjeta | Pool previo al esterilizador, olla y preparación; preservar el medio original. |
| `gloveInoculum` | Micelio dentro de cabina: `drawLaminarJar` | Sin tarjeta | Movimiento interno de inoculación y vertido. |
| `gloveWood` | Bolsa esterilizada: `drawLaminarBag` | Sin tarjeta | Cabina/campana y animación de entrada. |
| `gloveJar` | Frasco de micelio: `drawLaminarJar` | Sin tarjeta | Reservas de inoculación, vidrio y marca de especie. |
| `gloveClean` | Limpieza de cabina: `drawInoculationCleaning` | Sin tarjeta | Caja con guantes y campana; revisar en pareja con `cleaning`. |
| `cordyInoculum` | CL maduro: `drawLiquidJar` | Sin tarjeta | Agitación y campana para inocular arroz. |
| `liquidPetri` | Placa Petri: `drawPetri` | **Con tarjeta** | `drawLiquidHood`, reserva de placas y animación de inoculación. |
| `liquidJar` | Frasco de CL inoculado: `drawLiquidJar` | Sin tarjeta | Salida de campana, carrito y puestos de agitación. |
| `chemRaw` | Setas para extracción: `drawSpeciesFruit` | **Con tarjeta** | `drawExtraction`; mismo racimo que cámaras y tienda. |
| `chemGround` | Hongos molidos: dibujo inline en el catálogo | **Con tarjeta** | `drawExtraction` también dibuja material molido inline; candidato a dibujante compartido. |
| `chemFlask` | Matraz de extracto: `drawExtractFlask` | **Con tarjeta** | Destilador, salida de extracción y envasado. |
| `chemSalt` | Sales A/B: `drawSalt` | **Con tarjeta** | `drawNutrients`; distinguir tipo por etiqueta y color del contenido. |
| `spirulinaFeed` | Solución nutritiva: `drawSalt` con etiqueta N | **Con tarjeta** | `drawSpirulina`; apariencia de suministro, no de cultivo terminado. |
| `spirulinaCrop` | Espirulina cosechada: `drawSpirulinaJar` | **Con tarjeta** | Cosecha del reactor y producto en tienda. |
| `spirulinaMother` | Matraz madre: `drawSpirulinaFlask` | **Con tarjeta** | Reactor; volumen, madurez por color y replicación. |
| `spirulinaInoculum` | Matraz de inóculo: `drawSpirulinaFlask` | **Con tarjeta** | Inoculación del garrafón y replicación. |
| `shopInventory` | Producto: `drawShopProduct` | **Con tarjeta** | Tienda: setas, goteros y espirulina ya están sin tarjetas sobre la mesa, pero el arrastre aún la añade. |
| `shopcustomer` | Cliente seleccionado: `drawShopPerson` | **Con tarjeta** | Gesto de selección de cliente; no confundir con el producto que se entrega. |

### Retirada de tarjetas de esta pasada

Quedan identificados antes de tocar el renderizador los 17 casos resaltados. Se retirará la tarjeta en el punto común, conservando el tamaño del sprite, el centro del mouse, la separación del dedo, el marcador de destino y la lógica de soltar/cancelar. Los 15 casos que ya eran libres de tarjeta sirven como referencia de comportamiento.

La retirada de tarjetas no equivale a que los 17 assets ya hayan sido rediseñados con imágenes propias. Son dos controles distintos del inventario.

## 3. Familias que ya tienen la metodología documentada

| Familia | Evidencia archivada | Reutilización comprobada en código/documentación | Estado |
| --- | --- | --- | --- |
| Campana de flujo | `CAMPANA-FLUJO-CONCEPTO.png` | Campana, fondo estéril separado y componentes de acero. | Referencia y adaptación en código documentadas. |
| Micelio de campana y bolsas de madera | `MICELIO-MELENA-ASERRIN-CONCEPTO.png` | `drawLaminarJar`, `drawLaminarBag`, mesa estéril, sus arrastres y animaciones. | Referencia y dibujantes compartidos documentados; **el `jar` heredado de mezcla sigue separado**. |
| Llenadora de sustrato | `MEZCLADORA-SUSTRATO-CONCEPTO.png` | Aparato, tolvas, cámara y miniatura; materias en `drawSubstratePile`. | Referencia y adaptación documentadas; no requiere otra imagen por quitar una tarjeta. |
| Esterilizador | `ESTERILIZADOR-MESA-CONCEPTO.png` | Olla, tapa, canastilla, manómetro y variantes por capacidad. | Referencia y adaptación documentadas. |
| Mesa de acero | `MESA-ACERO-BASE-CONCEPTO.png` | `drawStainlessTable`, reutilizado en producción y campana. | Componente común ya normalizado. |
| Agitación y frascos CL | `ESTANTE-AGITACION-CONCEPTO.png`, `AGITADOR-MAGNETICO-CONCEPTO.png`, `FRASCOS-CL-ESTADOS-CONCEPTO.png` | `drawAgitationStation`, estante, agitadores y `drawLiquidJar`; compartidos con preparación/campana. | Referencias y adaptación documentadas. |
| Cámaras, bolsas y carritos | `INCUBACION-ESTANTES-CONCEPTO.png`, `FRUCTIFICACION-ESTANTES-CONCEPTO.png`, `BOLSAS-COLONIZACION-CONCEPTO.png` | Bastidores, bolsas por estado, carritos y recipientes compartidos. | Referencias y adaptación documentadas; validar cada estado al modificarlos. |
| Hongos | Referencias de Pleurotus, Melena, Reishi y Cordyceps | `drawSpeciesFruit` conecta cámaras, cosecha, extracción, tienda e iconos. Pleurotus tiene además geometría de anclaje y detalle fino. | Referencias de cuatro especies; pulido adicional de Pleurotus ya realizado. Las otras tres no deben marcarse como pendientes de imagen, sino de eventual mayor detalle en código. |
| Tienda y clientes | Concepto general y seis referencias de capas | Fondo, mostrador, estante, cuadro, planta y personajes separados; clientes al 150 %. | Remodelación por capas realizada. La tarjeta pendiente pertenece al arrastre, no a los productos apoyados en la mesa. |

## 4. Assets parciales o sin referencia individual registrada

«Sin referencia individual registrada» significa que no se encontró en el inventario de `referencias/`; no significa que el dibujo actual sea incorrecto. La evaluación estética final requiere verlo en juego. Prioridad basada en el pedido actual, duplicaciones y diferencias observables en código.

| Prioridad | Familia / piezas | Funciones y usos | Qué falta según el método |
| --- | --- | --- | --- |
| Ahora | **Petri**: plato, tapa, medio y colonia | `drawPetri`; reserva, arrastre y animación en `drawLiquidHood`. | Referencia individual nueva y redibujo compartido. El dibujo previo usa rectángulos para el cuerpo: una tapa redonda no se obtiene sólo retirando la tarjeta. |
| Ahora | **Limpieza**: spray, gatillo, líquido, trapo | `drawCleaningKit` y `drawInoculationCleaning`; mezcla, cabina, iconos. | Referencia conjunta y coherencia de ambos kits; los dos dibujantes previos tienen acabados distintos. Conservar el kit como una sola interacción. |
| Siguiente | **Micelio de mezcla** | `jar` en `drawMix` y tipo `jar`; frente a `drawLaminarJar` en campana. | Reutilizar la referencia de micelio existente y unificar el dibujo heredado con el actual, adaptando su escala sin mover la vitrina ni sus zonas táctiles. Mantener **Pleurotus explícito** en la sala principal, sin heredar la especie elegida en la oficina/campana. No hace falta otra imagen para el mismo frasco. |
| Siguiente | **Paja y cal**: paca, fibras sueltas, cesto, bote y vertido | `bale`, `drawLooseStraw`, `drawStrawFibers`, `drawWarmBasket`; bote y `limePour` inline en `drawPasteur`. | Paca/cestos ya tienen textura adaptada del fork; faltan referencia propia y, si se aprueba otro acabado, una adaptación común. Priorizar sacar el bote de cal y su vertido a un único dibujante. Eliminar la tarjeta no exige rehacer la paca. |
| Siguiente | **Herramientas de sala principal**: triturador, llenadora de mezcla, tanque, llave | `drawCrusherStation`, `drawMix`, `drawAutoMixer`, `drawPasteur`; miniaturas de sala principal. | Ya hay pulido de materiales y mesas compartidas; no se encontraron referencias individuales actuales de estos tres aparatos como las del área estéril. No confundir `drawAutoMixer` con `drawSubstrateMixer` del cuarto estéril, que ya tiene referencia. Generar sólo si se va a remodelar su silueta. |
| Después | **Extracción/envasado**: molino, molido, destilador, matraz, llenadora y goteros | `drawExtraction`, `drawDistiller`, `drawExtractFlask`, `drawBottling`, `drawDropper`; arrastres y venta. | Referencias de familia no registradas. Compartir el material molido entre mesa y arrastre; revisar matraz vacío/lleno y llenado de los cuatro goteros. Los goteros también deben verse iguales en tienda. |
| Después | **Química de nutrientes**: sales A/B/N, recipiente y mezcla | `drawSalt`, `drawNutrients`; solución para espirulina en `drawSpirulina`. | Referencias de recipientes/sales no registradas. A/B/N comparten dibujante, por lo que basta una referencia de familia con variantes. Conservar etiquetas funcionales de tipo. |
| Después | **Espirulina**: madre, inóculo, garrafón, cosecha, luz y burbujeo | `drawSpirulinaFlask`, `drawSpirulinaJar`, `drawSpirulina`; arrastres y producto de tienda. | Referencias de familia no registradas. Revisar vacío/lleno, verde claro/oscuro, replicación, garrafón mezclando/cultivando/listo y salida de cosecha. |
| Opcional, tras lo anterior | **Mayor detalle de otras especies** | `drawLionsMane`, `drawReishiFruit`, `drawCordyFruit`, recipiente `drawCordyJar`. | Ya existen imágenes; evaluar si el nivel de detalle alcanza al Pleurotus pulido. Reutilizar sus referencias antes de generar otras. |
| Opcional, tras lo anterior | **Apoyo visual**: asistentes, controles, relojes, bacterias y pequeños iconos | `drawHelper`, `drawLabHelper`, `drawCoat`, `drawBacteria`, `drawProcessClock`, monedas y avisos. | Sin referencia propia para cada pieza, pero no necesitan necesariamente una imagen. Mantener dibujantes nativos simples y revisar escala/contraste en celular; no añadir detalle por obligación. |

Los fondos aprobados, la mesa base, la tienda y los aparatos estériles no se vuelven a construir por esta auditoría. Se registran únicamente los pendientes y las inconsistencias de reutilización.

## 5. Orden de tandas propuesto

Sin asignar nuevas letras o números de sesión hasta que el usuario los confirme:

1. **Inventario y arrastres sin tarjetas — esta pasada.** Conservar esta lista previa, retirar los 17 fondos heredados y revisar los 32 iconos sobre fondos claros y oscuros, en mouse y táctil.
2. **Petri y limpieza — esta pasada.** Generar referencias, recrear sus piezas en código y conectar los mismos dibujantes a origen, arrastre y animación. Validar dentro de las estaciones existentes.
3. **Micelio de mezcla, paja, cal y herramientas principales — propuesta posterior.** Reutilizar el frasco ya aprobado de campana para reemplazar el `jar` heredado, sacar la cal duplicada a un dibujante común y armonizar la familia de fibras; generar imágenes sólo para las nuevas siluetas que se acuerden.
4. **Cristalería y extracción/envasado — propuesta posterior.** Referencias comunes para matraces y goteros, después aparatos; conservar medios, especies y cantidades.
5. **Nutrientes y espirulina — propuesta posterior.** Referencias de sales, madre/inóculo y reactor; validar sus estados y su producto de venta.
6. **Revisión fina transversal — propuesta posterior.** Comparar especies, asistentes, miniaturas, sombras y avisos en celular. No confundir este cierre estético con un nuevo balance de juego.

## 6. Criterios para marcar una familia terminada

- Referencia identificada, o decisión explícita de reutilizar un componente nativo existente.
- Función compartida y llamadores de módulo, arrastre, animación, miniatura y tienda revisados donde apliquen.
- Sin tarjeta de fondo accidental; se conservan vidrio, contenido, reflejos, sombras y superficies físicas.
- Vacío, parcial, en proceso, listo y variantes de receta/especie/mejora correctamente representados.
- Sprite centrado en mouse; separado del dedo sin mover el destino real; sin recortes en bordes.
- Revisión visual en escritorio y celular, además de las pruebas lógicas y build del proyecto.

La nota de cierre de la tanda registrará el resultado efectivamente integrado y validado. Este documento conserva el diagnóstico inicial y los pendientes posteriores para no presentar una simple retirada de tarjetas como una remodelación completa de todo el juego.

## 7. Seguimiento de esta pasada

| Trabajo | Estado al redactar la auditoría |
| --- | --- |
| Identificar tarjetas anteriores | Comprobado: 17 con tarjeta y 15 sin tarjeta. Inventario conservado arriba. |
| Política común sin tarjetas para los 32 tipos | Integrada: 32 tipos sin tarjeta; galería clara/oscura revisada y regresiones de mouse, touch y lápiz aprobadas. |
| Referencia del Petri | Generada: `referencias/PETRI-MICELIO-CONCEPTO.png`; prompt conservado en `referencias/PROMPTS-PETRI-LIMPIEZA.md`. |
| Referencia del kit de limpieza | Generada: `referencias/KIT-LIMPIEZA-CONCEPTO.png`; mismo documento de prompts. |
| Dibujantes de Petri y limpieza | Integrados en código compartido y revisados dentro de mezcla/campana, arrastre y animación; 191 grupos de pruebas aprobados. |
| Demás familias del apartado 4 | Registradas como propuestas posteriores, sin reconstrucción en esta auditoría. |

Cierre y evidencia: [TANDA-AUDITORIA-ASSETS-PETRI-LIMPIEZA.md](TANDA-AUDITORIA-ASSETS-PETRI-LIMPIEZA.md). Las filas de prioridad «Ahora» del apartado 4 conservan el diagnóstico previo; Petri y limpieza ya quedaron completados en esta pasada.

## 8. Continuación del cierre por familias

El diagnóstico inicial se conserva como historial. La continuación añade estas tandas al inventario:

| Familia | Nota y alcance |
| --- | --- |
| Materiales principales | [Micelio de mezcla, paja y cal](TANDA-MATERIALES-PRINCIPALES.md). Frasco de Pleurotus compartido; fibras y bote reutilizados en origen/arrastre/animación. |
| Aparatos principales | [Triturador, pasteurizado y mezcla](TANDA-APARATOS-PRINCIPALES.md). Mismos equipos en miniatura y vista cercana; contenidos recortados al interior. |
| Cristalería, extracción y envasado | [Nota de extracción y envasado](TANDA-EXTRACCION-ENVASADO-ARTE.md). Estados de vidrio compartidos y aparatos apoyados sobre la mesa. |
| Nutrientes y espirulina | [Nota de nutrientes y espirulina](TANDA-NUTRIENTES-ESPIRULINA-ARTE.md). Sales, solución, matraces, reactor y producto de cosecha. |

Se reutilizan los fondos y superficies aprobados, las cámaras, la tienda, los personajes y los equipos estériles. No se reconstruyen esas familias por retirar tarjetas: continúan con el arte ya aprobado. El [plan de cierre](PLAN-CIERRE-REMODELACION.md) identifica el estado vigente de cada tanda. Cualquier detalle estético nuevo se puede registrar aparte; este cierre no cambia el balance ni las mecánicas.
