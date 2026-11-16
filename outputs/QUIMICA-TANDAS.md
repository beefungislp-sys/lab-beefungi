# Laboratorio de química — tandas A, B, C y D

Identificadores confirmados por el usuario para esta expansión. Son **Química A–D** y no renombrados de las tandas históricas A–D ni una sesión numérica nueva.

## Química A — extracción

Implementada. Puerta inferior de la sala principal; acceso por clic, caminando o E. Sala con cuatro puestos y regreso por puerta superior, E o Regresar. Extracción abre desde su mesa o con E cerca.

Selector de las cuatro especies, existencias cosechadas en gramos, 250 g por tanda. Arrastrar hongos al molino, esperar la molienda, arrastrarla al aparato y tocar el mechero. Doble clic equivalente en hongos/molino. No se consumen recursos al soltar fuera ni se cambian ventas o monedas. El matraz conserva especie, se agrega una sola vez al inventario de extractos y el proceso continúa fuera de la estación. Receta, tiempo y rendimiento son abstracciones de juego, no instrucciones de extracción reales.

Validación: 86 grupos de pruebas y build correctos. Revisión visual del acceso y mesa de extracción en navegador; sin errores de consola. El flujo con materiales y los casos de stock insuficiente, destino incorrecto, doble consumo y progreso fuera se verifican en pruebas de estado.

## Química B — envasado

Implementada. Arrastrar un matraz a la llenadora (o doble clic) inicia el envasado; tras dos segundos entrega cuatro goteros de su especie. Consume un solo matraz, funciona fuera de la mesa y conserva inventarios separados de setas/extractos/goteros. En tienda un botón integrado alterna setas/goteros; clientes pueden pedir goteros de una especie, con uno o dos por pedido. Toque al cliente, Entregar y arrastre funcionan sin vender producto/especie incorrectos. Precio provisional: doble del precio de una porción de setas de esa especie.

Validación: 89 grupos de pruebas y build correctos; acceso y vista de envasado revisados en navegador sin errores de consola. Química A fue publicada y confirmada mediante version.json antes de cerrar B.

## Química C — mesa de química

Implementada. Sales A/B gratuitas, con arrastre a un recipiente central o doble clic. Ambas sales inician una mezcla de ocho segundos. Selector integrado alterna entre cinco nutrientes para hongos (el inventario ya usado por el cuarto estéril) y una solución para espirulina. El selector se bloquea hasta terminar la mezcla y no añade filas a pedidos.

Validación: 91 grupos de pruebas y build correctos; arrastre de ambas sales y reloj revisados en navegador a 844 × 390, sin errores de consola. Se comprobó Química B publicada mediante version.json.

## Química D — cultivo de espirulina

Implementada. Cuarto puesto de la sala: reactor de vidrio con cultivo inicial incluido. Llave mantenida durante dos segundos; arrastrar solución nutritiva producida en C y encender la luz. El crecimiento tarda treinta segundos activos, se intensifica el verde y aparecen burbujas. Funciona fuera de la estación. El reloj listo permite arrastrar una cosecha al recipiente (o doble clic), deja 15% de cultivo y requiere nueva agua/solución/luz para repetir. La llave se detiene al soltar, cancelar, salir o perder foco.

Inventario y venta de espirulina separados de setas/goteros; precio provisional de dos monedas. La tienda alterna tres productos, muestra su inventario y genera pedidos del producto disponible. Clientes aceptan solo el producto correcto, con los controles de toque, botón Entregar y arrastre. Las cuatro mesas ya tienen iconos distintos y relojes sincronizados en la sala. Los goteros se llenan visualmente durante envasado. Sin parámetros reales de cultivo ni controles extra de pH o temperatura.

Validación: 96 grupos de pruebas y build correctos, incluyendo el circuito de las cuatro especies hasta venta, casos de falta de recursos, inventarios separados y dobles entregas. Navegador a 844 × 390: creación de solución, llenado mantenido, alimento, encendido, crecimiento verde, estado listo y cosecha por arrastre al inventario, sin errores de consola. También se revisó la sala completa a 390 × 844 sin solapamiento de mesas y con Regresar/Pedidos dentro del marco. Son pruebas en navegador con tamaño móvil, no en un teléfono físico. Química C publicada y confirmada mediante version.json antes del cierre de D. Balance definitivo, pulido general y pulido visual quedan como las siguientes etapas autorizadas para planear, sin expandir más salas.

La partida continúa solo en memoria; la publicación no guarda ni sincroniza partidas.

## Continuación confirmada: A2 espirulina

El flujo de Química D descrito arriba corresponde a su versión inicial. [A2 espirulina](TANDA-A2-ESPIRULINA.md) lo reemplaza con agua automática, mezcla, inoculación del garrafón y réplica independiente de matraces madre/secundario; conserva los inventarios y ventas.
