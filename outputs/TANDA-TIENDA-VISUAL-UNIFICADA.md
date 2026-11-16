# Tienda — mesa central e inventario unificado

Tanda visual autorizada después de sonidos y avisos. No se asignó una letra/número nuevo; se conserva el historial.

## Resultado

Mesa grande en la zona central, con espacio para caminar alrededor. Los clientes llegan y se forman a la derecha. Sobre la mesa se ven simultáneamente nueve casillas: las cuatro especies de setas, sus cuatro goteros y espirulina. Ya no hay selector de inventario ni selector de especie visible en la tienda. Cada producto mantiene su icono y color de especie.

Las existencias de setas se muestran como unidades con hasta un decimal, en lugar de gramos: 250 g internos equivalen a una unidad para entregar; por ejemplo 300 g se muestran como 1,2. La vista trunca al decimal inferior, para que 249 g no parezcan una unidad completa. Goteros y espirulina se cuentan por piezas/porciones. Esta conversión no cambia los inventarios ni los cobros.

No se muestran precios junto al producto. Una entrega válida hace flotar iconos de monedas por el importe real cobrado, incluyendo mitades y cuartos cuando lo requieren los precios existentes. No se redondeó la economía: 1,25, 1,5, 1,75 y los precios de goteros permanecen exactos internamente. Se muestra el saldo con icono de moneda. No aparece una moneda si la entrega falla.

Se conserva arrastrar el producto al cliente, tocar al cliente/pedido y el botón Entregar para móvil. El producto y la especie deben coincidir con el pedido. Un cliente puede pedir una o dos unidades, tiene la misma paciencia y la misma llegada aleatoria. El toque mantiene su cliente original para que una salida por tiempo no entregue al reemplazo.

El suelo tiene menos prioridad que las casillas y los clientes; la ruta evita la nueva mesa. Al entrar, el personaje aparece fuera del mueble. E/Regresar/Salir siguen funcionando. Una casilla sin una unidad disponible avisa y marca su cantidad en rojo. Se corrigió el aviso falso de faltante cuando una entrega correcta deja todavía una unidad pendiente en el pedido.

## Validación

110 grupos de pruebas y build correctos. Incluyen entrega táctil al segundo cliente, arrastre de los tres productos sin selector, rechazo de producto/especie incorrectos, unidades decimales sin alterar gramos, monedas por importe exacto, caducidad de animación, falta de existencias y rutas alrededor de la mesa. Se ajustaron las coordenadas de pruebas anteriores al nuevo acomodo, conservando sus verificaciones de inventario y clientes.

La tanda previa de sonidos fue publicada y confirmada mediante version.json antes de este cierre. Revisión visual en navegador a 844 × 390 y 390 × 844: mesa completa, nueve casillas, cantidades decimales, fila derecha, cosecha trasladada a tienda y controles de entrega. Se probó una venta con existencias producidas desde fructificación y se revisó la animación de moneda. Durante esa revisión se detectó y corrigió la falsa alarma de una entrega parcial; su regresión está cubierta en las 110 pruebas. Sin errores de consola ni desbordamiento horizontal en la vista vertical. No se probó en un teléfono físico. La partida sigue en memoria, sin guardado ni sincronización entre dispositivos.
