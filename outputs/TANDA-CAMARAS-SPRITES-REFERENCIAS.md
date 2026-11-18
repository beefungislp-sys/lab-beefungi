# Incubación y fructificación desde referencias

Continuación visual solicitada, sin nuevo identificador de tanda.

## Referencias

Se generan siete imágenes: cámara de incubación, cámara de fructificación, bolsas por estados de colonización y assets de Pleurotus, Melena de León, Reishi y frasco de Cordyceps. Se conservan en `referencias/`; los prompts y la herramienta están en `PROMPTS-CAMARAS-ESPECIES.md`.

Son referencias de arte. El juego recrea sus formas en canvas, sin cargar los PNG como sprites.

## Resultado en código

- Estantes abiertos de acero, con bastidor, postes, cantos, tornillos y entrepaños sin panel opaco detrás de cada bolsa.
- Cuatro puestos iniciales, seis y ocho al mejorar. La segunda fila sólo muestra los entrepaños comprados, sin tarjetas de bloqueo ni lugares fantasma. La altura del bastidor se adapta al número de filas visibles.
- Fondo `drawChamberRoom` conservado exactamente. Los controles de ambiente y sus efectos no cambian.
- Bolsas flexibles con pliegues, filtro, cierre y contenido diferenciado: fibras para Pleurotus y textura fina para Melena/Reishi. La colonización se extiende por todo el bloque y aclara el sustrato hasta quedar predominantemente blanco.
- Pleurotus con abanicos superpuestos y láminas; Melena con lóbulos y hebras colgantes; Reishi con abanicos rojos y bandas de crecimiento; Cordyceps con frutos naranjas y frasco de arroz colonizado con reflejos.
- Carritos abiertos de acero, con bandeja baja, asa y ruedas. Conservan sus inventarios, funciones y posiciones de interacción.
- Los dibujantes compartidos llevan el acabado a las miniaturas, los carritos, las cosechas, la tienda y los iconos. Los iconos de bolsas, bloques y cosecha renovados no llevan tarjeta opaca; se conserva el centro del mouse y la separación táctil.

## Componentes

`drawChamberFrame`, `drawChamberRack`, `drawGrowBag`, `drawChamberCart`, `drawMushroomFan`, `drawOysterCluster`, `drawLionsMane`, `drawReishiFruit`, `drawCordyFruit`, `drawFruitBag`, `drawCordyJar` y `drawIncubationContainer`.

Los espacios siguen usando `incSlots`. No cambian tiempos, capacidades, mejora de clima, recetas, especies, riesgo de contaminación, pools de venta ni rendimiento de los tres flushes. Al cosechar se retiran sólo los hongos y el bloque permanece.

## Validación

183 grupos de pruebas aprobados; catálogo y build regenerados. Incluyen dibujo sin mutar estado, fondo fijo, aparición progresiva de muebles, ciclos, cosechas e inventarios.

Revisión en navegador de capacidades 4/6/8, vacíos, colonización, contaminación, frutos en desarrollo y maduros, bloque agotado, miniaturas y celular horizontal/vertical. Cosecha probada con arrastre real: aumenta el carrito y el bloque inicia el siguiente flush.

Capturas locales: `INCUBACION-SPRITES-CODIGO-QA.jpg` y `FRUCTIFICACION-SPRITES-CODIGO-QA.jpg`.
