# Iconos de arrastre — catálogo completo y legibilidad táctil

Tanda solicitada sin identificador nuevo. No se renombra el historial.

## Problema y solución

La paja triturada de pasteurizado (`raw`) no tenía vista previa. Los demás módulos dibujaban sus propios iconos, con tamaños distintos; algunos materiales caían en una representación genérica. El catálogo anterior ubicaba funciones y geometrías, pero no enumeraba por separado cada tipo de arrastre.

Ahora `dragIconCatalog` enumera 32 tipos explícitos, con etiqueta y dibujante. `drawDragPreview` los compone una sola vez al final de la escena. Retiradas las copias locales de triturador, mezcla, pasteurizado, cámaras, estaciones estériles, agitación, química, espirulina y tienda. La selección táctil de clientes tiene su icono propio y se distingue del producto.

El [catálogo gráfico](CATALOGO-GRAFICO.md#iconos-de-cada-tipo-de-arrastre) genera una fila y enlace al código por cada tipo. Incluye paca, paja triturada/pasteurizada/mezclada, cal, micelio, limpieza, bolsas y bloques por especie, aserrín/arroz, recipientes vacíos/preparados, Petri/CL, hongos molidos, extractos, sales, matraces de espirulina y productos de tienda.

## Tamaño y posición

- Tarjeta con borde claro y fondo oscuro para que paja, bolsas transparentes y hongos claros contrasten.
- Tamaño táctil de referencia: 76 píxeles CSS, conservando una escala mínima que amplía los sprites anteriores. Ratón: referencia de 60 píxeles CSS. Se ajusta a la escala del canvas y limita la ampliación extrema.
- En touch/lápiz el borde inferior del icono queda separado 52 píxeles CSS del punto de contacto; cerca del borde superior pasa al lado. Se mantiene dentro del canvas.
- Un pequeño marcador amarillo muestra dónde se soltará realmente el material. El desplazamiento visual no modifica `drag.now`, geometrías ni validación de entrega.
- La bolsa vacía conserva su silueta vacía. Al cosechar se ven sólo hongos; al llevar a composta, el bloque completo. Se conserva la especie y el tipo de medio.
- Se oculta al cancelar o terminar el arrastre. Los controles de agua que se mantienen pulsados no son materiales arrastrables.

## Verificación

140 grupos de regresión aprobados. Las cuatro verificaciones nuevas cubren los 32 dibujantes, modos de recipiente, ausencia de consumo al dibujar, tamaño/separación y límites táctiles, arrastre real de paja hacia tanque usando la posición del dedo, render único, bolsa vacía, cosecha y cancelación.

Galería de QA generada localmente desde el catálogo para inspeccionar los 32 iconos. Fixture táctil con manejadores reales y captura de puntero simulada para pausar el arrastre y observarlo en navegador a 844×390 y 390×844; sin errores de JavaScript. Esto no sustituye una prueba física nueva en teléfono. Fixtures y capturas no se publican ni forman parte del juego.

Pruebas, catálogo y build completos. GitHub Pages se comprueba con `version.json` antes de confirmar la publicación. No cambian progresión, economía, tiempos ni recursos.
