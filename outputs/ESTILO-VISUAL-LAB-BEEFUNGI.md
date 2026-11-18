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


## Referencias y dibujo en código

La prueba de un sprite transparente de la campana queda archivada como referencia de materiales y proporciones. La versión actual dibuja el equipo íntegramente en canvas: caras, reflejos, cepillado, filtro, iluminación, patas y sombras. No carga el PNG ni mantiene una copia base64. Aparato, fondo e ingredientes continúan separados; miniatura y vista cercana comparten la composición.

## Perspectiva cercana y capas

Para las mesas cercanas se toma como referencia una vista frontal ligeramente elevada: horizontales niveladas, verticales rectas, superficie visible y patas apoyadas en el suelo. La navegación de salas sigue siendo aérea. El cuarto estéril comparte su base cercana mediante `drawSterileWorkroom(title, stockPanel)`; los aparatos y sus sombras se componen aparte.

Orden de dibujo: ambiente fijo → aparato → materiales → acciones y avisos. La pared y el suelo deben concordar con la profundidad del mueble. Ventana, texturas y luz son estables; sólo se animan los procesos. Materiales, iconos de arrastre y miniaturas deben compartir dibujantes. La referencia se conserva en `referencias/PERSPECTIVA-CERCANA-MESAS.png`.

## Materiales de la campana

Frascos de micelio: vidrio con hombros y base redondeados, tapa crema acanalada y grano mayormente cubierto de blanco; conservar algunos granos visibles. La marca de especie se sitúa en la tapa para despejar el contenido.

Bolsas de aserrín esterilizado: textura fina de madera, espacio transparente, filtro claro, sellado superior y pliegues con reflejos suaves. No dibujar micelio blanco en el aserrín antes de inocular. Sus dibujos en mesa, arrastre y animaciones comparten la misma función. Referencia: `referencias/MICELIO-MELENA-ASERRIN-CONCEPTO.png`.

## Vista previa de arrastre

Con mouse, el icono acompaña al cursor por su centro. Los frascos de micelio y los materiales remodelados del área estéril se dibujan sin tarjeta de fondo ni marco exterior, conservando su escala. En táctil se separa la vista previa del dedo para mantenerla visible, sin desplazar el destino real. La opción de fondo se declara en el catálogo único de iconos.

## Cajas y mesa de sustrato

Las cajas inferiores mantienen acrílico transparente con tapa, esquinas y puertos con guantes; las reservas usan los mismos frascos y bolsas de la campana. El mechero tiene base apoyada, cuerpo metálico y llama animada; el ambiente permanece fijo. Aserrín y arroz tienen montículos propios; nutrientes y recipientes vacíos comparten dibujo con el arrastre. La llenadora muestra acero, luz interior y el nivel real de ambas reservas.

Procedimiento completo: [GUIA-REMODELACION-ARTE.md](GUIA-REMODELACION-ARTE.md).

## Mezcladora y esterilizador desde las referencias

La llenadora usa dos tolvas transparentes con cono inferior, cámara redondeada con ventana y paleta, boquilla y bastidor abierto. El recipiente debe seguir visible bajo la salida. El agua entra a la cámara y las reservas muestran cantidades reales. La miniatura comparte el dibujante del aparato.

El esterilizador tiene cuerpo cilíndrico, tapa abatible, junta, canastilla, manómetro y cierres. Mantener el cepillado con bajo contraste para que los reflejos definan el volumen. El borde frontal oculta la base de los recipientes cargados. La tapa cierra, vibra suavemente y emite vapor sólo durante el ciclo. Conservar escala por capacidad y fondo existente.

## Mesa base normalizada

Las mesas de producción comparten `drawStainlessTable`: cubierta trapezoidal cepillada, canto fino, cuatro patas con pies y travesaños. Reflejos cálidos a la izquierda y acero azul verdoso en sombra. La profundidad de la cubierta se adapta a la composición del módulo, manteniendo sus materiales y zonas de interacción. La campana integra el mismo componente; sus patas se omiten en la miniatura. Oficina y mostrador siguen usando madera.

Referencia: `referencias/MESA-ACERO-BASE-CONCEPTO.png`. El dibujo del juego es íntegramente en código y el ambiente permanece separado.

## Estante de cultivo líquido

Agitación usa un bastidor único con postes continuos y dos entrepaños, sin apilar mesas independientes. Mostrar 2 × 2 puestos al inicio y 3 × 2 al ampliar. Aparato, frasco y rótulo deben caber en la misma zona de recepción, dejando espacio entre filas. La miniatura comparte el dibujante del estante.

Agitadores compactos con plato circular, perilla crema e indicador pequeño. Frascos redondeados con filtro, caldo ámbar y barra magnética; el micelio se densifica por todo el líquido sin cambiar su nivel. El mismo frasco se reutiliza en el resto del circuito de CL y en sus iconos, sin tarjeta opaca.

## Cámaras y especies desde referencias

Incubación y fructificación conservan su ambiente y comparten bastidor y entrepaños abiertos de acero. No usar una caja opaca por recipiente. Sólo se dibujan los puestos comprados: cuatro en la primera fila, luego dos o cuatro adicionales en la segunda.

Las bolsas tienen filtro, pliegues y cierre; el sustrato se blanquea por toda la superficie. Distinguir fibras de paja de textura fina de madera. Los frutos comparten dibujantes entre módulo, miniatura, cosecha, tienda e iconos: abanicos de ostra, hebras de Melena, bandas rojas de Reishi y estromas naranjas de Cordyceps. Los carritos usan acero, bandeja abierta, asas y ruedas; sus zonas táctiles siguen separadas.

## Muestra de Pleurotus más detallado

Pleurotus usa medios píxeles lógicos, sombras gris salvia, borde ondulado crema y láminas radiales. Los sombreros comparten raíz y crecen desde ella, para evitar frutos suspendidos. Dentro de la bolsa se adapta la composición a su silueta; el racimo cosechado usa su escala propia. Las otras especies esperan aprobación de esta muestra antes de recibir el mismo nivel de pulido.
