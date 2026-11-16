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

Autorizada: sales A/B gratuitas; selector entre cinco nutrientes de hongos y solución para espirulina, con tiempo de preparación. Sin ampliar pedidos.

## Química D — cultivo de espirulina

Autorizada: reactor en esta sala, agua y nutrientes, encendido de luz, crecimiento verde y burbujas, reloj, cosecha parcial y cultivo remanente. Sin controles extra de pH o temperatura por ahora.

La partida continúa solo en memoria; la publicación no guarda ni sincroniza partidas.
