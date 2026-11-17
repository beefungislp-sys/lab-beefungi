# Pulido cálido general — pasteurizado y mezcla

## Alcance

Continuación solicitada de la muestra visual, sin nuevo identificador de sesión o tanda. Se mantiene el mismo recorrido y controles.

## Cambios

- Fondo cálido compartido por triturador, pasteurizado y mezcla, con variantes para no colocar decoraciones sobre ingredientes o controles.
- Sala principal: baldosas alternadas suaves, biseles en mesas, reflejos en ventanas y macetas. Las pacas visibles responden a las existencias; la bandeja pequeña refleja paja y micelio agregados.
- Pasteurizado: mesa con patas, ventana, tanque de acero con tornillos, marcas de nivel, rebordes y apoyos, agua con superficie y reflejos suaves, llave roja definida, bote de cal identificado y cesto tejido.
- Mezcla: vitrina con cristal y herrajes, mesa de madera continua, bandeja de acero con profundidad, cesto tejido, soporte metálico y pliegues de la bolsa. Contadores inferiores más compactos para dar espacio a los tres puestos.
- Llenadora automática: paneles, ventilación, tornillos y boquilla, conservando llenado, salida y bacterias.
- Textura irregular de paja compartida: semilla visual local, sin usar el azar de contaminación ni mover inventarios.
- Frascos y limpieza incorporan reflejos y detalles pequeños en sus dibujantes compartidos.

## Verificación

- `npm test`: 167 grupos aprobados. La nueva regresión cubre dibujo con tanque 2/4/6, niveles 0/50/100 %, bandeja/llenadora, suciedad y fases del llenado, sin cambiar recursos, temporizadores ni usar el azar de simulación.
- Navegador: recorrido real de triturar una paca, llenar agua con la llave, arrastrar cal, agregar paja y mostrar reloj; traslado posterior a mezcla y arrastre de ingredientes.
- Revisión adicional de estados cargados y mejorados mediante una página QA local en `work/`, fuera de la publicación.
- Revisión responsive en 844 × 390 y 390 × 844; sin desbordamiento horizontal. La revisión física en otros teléfonos sigue pendiente.
- Catálogo gráfico y build regenerados desde la fuente única.

## Límites

Esta tanda es visual. Conserva recetas, capacidades, tiempos, contaminación, asistentes, desbloqueos y las zonas de interacción. Cuarto estéril, cámaras, tienda y química siguen pendientes de una pasada equivalente.
