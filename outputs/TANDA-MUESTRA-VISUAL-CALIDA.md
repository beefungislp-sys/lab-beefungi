# Muestra visual cálida — sala principal y triturador

## Alcance autorizado

Primera muestra jugable basada en la referencia visual de 16 bits: madera cálida, acero azulado, luz de ventana, materiales más reconocibles y detalles de medio píxel. Sin nuevo identificador de tanda: el usuario pidió un intento visual antes de extender el estilo.

## Implementación

- Sala principal: ventanas con exterior vegetal, suelo de tonos salvia, parches de luz, mesas con patas y veta, oficina con pantalla y cuaderno, tanque y llave roja, triturador y cestos tejidos con fibras de paja.
- Triturador cercano: mesa de madera, fondo con ventana, tolva escalonada con profundidad, motor con nervaduras y tornillos, descarga metálica y tejido frontal del cesto que deja ver el montón acumulado.
- Pacas con fibras más finas, compartidas con su icono de arrastre.
- Renderizadores separados `drawMainRoom` y `drawCrusherStation`; helpers visuales `drawWarm*` con una paleta común.
- Canvas de 640 × 480 con transformación 2×: las coordenadas del mundo, colisiones, zonas de toque y conversión del puntero siguen en 320 × 240. Sin suavizado de sprites.
- Se mantienen inventarios, recetas, asistentes, desbloqueos, flechas, controles y relojes. Las otras vistas cercanas conservan su arte anterior; esto es una muestra, no el pulido completo.

## Validación

- `npm test`: 166 grupos aprobados, incluidos dibujo sin efectos sobre recursos y conversión táctil independiente de la resolución.
- Revisión en navegador: entrada al triturador, procesamiento de una paca, salida de dos cargas y regreso a la sala.
- Tamaños 844 × 390 y 390 × 844: interfaz contenida; sin desbordamiento horizontal. No sustituye la prueba física en teléfono.
- Sin errores de consola durante la revisión. Capturas QA locales ignoradas por git.
- `npm run catalog` actualiza los puntos de entrada gráficos; `npm run build` genera publicación y versión.

## Próximo paso visual

Valorar esta muestra antes de extender la paleta y los muebles a mezcla, pasteurización, cuarto estéril, cámaras, tienda y química. La lógica del juego sigue igual.
