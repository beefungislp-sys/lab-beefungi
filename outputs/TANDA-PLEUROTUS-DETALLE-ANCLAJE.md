# Muestra de detalle y anclaje de Pleurotus

Continuación visual autorizada por el usuario, sin nuevo identificador de tanda. Esta muestra se aplica sólo a Pleurotus; las otras especies conservan su acabado anterior.

## Cambio

- Sombreros gris salvia con borde ondulado claro, superficie sombreada y láminas radiales más finas.
- Dibujo con pasos de media unidad para aprovechar el lienzo existente de doble densidad, sin cambiar la resolución global ni las coordenadas de interacción.
- Los tres sombreros crecen desde una raíz común. Antes tenían tallos separados y el racimo derecho podía quedar fuera del ancho de la bolsa.
- La composición dentro del bloque se ajusta para que brote, crecimiento intermedio y fruto maduro permanezcan dentro de la silueta de la bolsa. El racimo cosechado conserva su propia escala de presentación.
- El mismo dibujo se comparte en fructificación, cosecha, carritos, tienda e iconos. No cambian tiempos, cantidades por flush ni controles.

## Componentes

`oysterClusterGeometry` define la raíz común y la progresión de los sombreros; `drawDetailedOysterFan` dibuja volumen, borde y láminas; `drawOysterCluster` une los tallos antes de pintar los sombreros; `drawFruitBag` adapta el conjunto a la bolsa.

## Validación

184 grupos de pruebas aprobados. La nueva regresión comprueba raíz y límites para cinco estados de crecimiento, cuatro escalas y uno/dos/tres sombreros. Las pruebas existentes verifican producción, tres flushes, cosecha de sólo hongos, inventarios y dibujo sin mutar estado.

Revisión visual de muestra ampliada, cámara de fructificación y celular horizontal/vertical. Arrastre de cosecha probado: suma setas al carrito y deja el bloque comenzando el siguiente flush.

Capturas locales: `PLEUROTUS-DETALLE-MUESTRA-QA.jpg` y `PLEUROTUS-DETALLE-JUEGO-QA.jpg`. La muestra ampliada es un fixture de QA y no añade un menú al juego.
