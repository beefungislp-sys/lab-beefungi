# Estilo visual de Lab BeeFungi

## Dirección acordada

Pixel art cálido de 16 bits, más detallado y texturizado, manteniendo la lectura sencilla del juego y sus controles en celular. Referencia de esta decisión: la prueba de electronicwave en `outputs/BEEFUNGI-fork-electronicwave`, especialmente su captura diurna y las notas de sesión. El fork permanece como referencia independiente.

## Reglas para las siguientes pasadas

- Cámara y mapa fijos. Suelo, paredes y ventanas no se desplazan cuando camina el personaje. Sin parallax ni temblor de cámara.
- Iluminación cálida constante. Sin hora simulada ni estados de amanecer, tarde o noche. Los reflejos de agua y las animaciones de proceso pueden seguir moviéndose.
- Materiales con volumen: base, borde superior/izquierdo claro y borde inferior/derecho oscuro. Madera miel, acero azul verdoso, paredes crema y suelo salvia.
- Textura fina y estable: vetas, fibras, motas y desgaste discretos, con semilla fija. El fondo debe ser más tranquilo que ingredientes, flechas y controles.
- Sombras de contacto y luz radial suaves, de baja opacidad, subordinadas al sprite pixelado. No oscurecer textos ni alterar los colores de avisos de faltantes.
- Conservar geometrías, escalas de interacción y paleta de especies. El mundo lógico sigue en 320 × 240, con lienzo de 640 × 480.
- No cambiar movimiento, tiempos, recetas, inventarios ni probabilidades durante una pasada de arte.

## Componentes reutilizados

Adaptados del fork: `texHash`, `drawFloorTexture`, `drawWallTexture`, `softLight`/`softShadow`, detalle de `bale`, `drawWarmTable`, `drawWarmBasket` y biseles del triturador/tanque en miniatura. El piso cercano usa la misma textura con una región diferente; se redujo un poco la densidad para mantener legibilidad.

No se incorporan el segundo canvas, capas móviles, ciclo ambiental ni suavizado de movimiento del fork. El render sigue en el canvas existente, en coordenadas fijas.

## Aplicación actual

Sala principal, triturador, pasteurizado, mezcla, sala de cultivo cenital, cámaras de incubación/fructificación, tienda, cuarto estéril y cuarto de química con sus estaciones. Los dibujantes compartidos transmiten el acabado a pacas, mesas, cestos, estantes, carritos, mostrador, aparatos de acero y material de vidrio.

## Aparición y proporciones

Los muebles bloqueados no se dibujan: aparecen al desbloquearlos, sin candados ni siluetas. Su dibujo, colisión e interacción deben compartir la geometría visible. La tienda conserva productos y clientes a la escala del personaje; el mostrador crece en profundidad al aparecer nuevas filas de inventario.

## Proporciones de estaciones estériles

Los aparatos deben caber sobre su cubierta; las reservas descansan en mesas o repisas, sin flotar. Separar rótulos, patas y travesaños. Centrar la caída del agua sobre el recipiente y mantener los frascos dibujados dentro de sus zonas táctiles. Las miniaturas cenitales deben corresponder al medio seleccionado y dejar espacio entre aparato, reservas y etiquetas.


## Prueba de sprites derivados de referencia

La campana usa un sprite transparente extraído de la referencia aprobada y pixelizado. Sus ingredientes continúan dibujándose por separado para conservar interacción y animación. El asset se incorpora al HTML como data URI, con escalado sin suavizado y un dibujo de respaldo si no carga. El fondo del cuarto permanece fijo e independiente. Los siguientes assets se evaluarán antes de extender este método.
