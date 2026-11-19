# Tienda: clientes más grandes y sin jugador visible

- Se retira el dibujo del personaje del jugador únicamente en la tienda. Su aspecto en las demás salas se conserva.
- Los clientes se dibujan al 150 %, incluida su bolsa de compra al salir. El icono de arrastre mantiene su escala propia.
- La fila admite tres clientes, con puestos en Y = 130, 174 y 218 para que las figuras y pedidos quepan en el canvas. Conserva las llegadas aleatorias, paciencia y cantidades de pedido.
- `shopCustomerStyle` y `shopQueueY` reúnen escala, capacidad y separación. La primera visita también usa el nuevo primer puesto.
- `shopOrderRect` comparte la posición de las burbujas con la selección. Se amplían la altura seleccionable y el indicador del cliente elegido.
- Las salidas de clientes comienzan en la misma columna en ventas y vencimiento de espera.

Se comprobaron entrega al segundo cliente en escritorio y en el marco de celular vertical, cobro y descuento del producto correcto. La revisión visual cubre también el marco horizontal y la fila completa sin jugador visible.

Las regresiones adaptan sus clientes de prueba al nuevo primer puesto. Se conserva la comprobación de dibujo sin mutaciones y fondo inmóvil, y se añade cobertura de fila espaciada, límites de pantalla, capacidad y entrega táctil desde la parte inferior del cuerpo ampliado. Total: 189 grupos de verificación.

Captura de QA local, excluida del respaldo: `TIENDA-CLIENTES-GRANDES-QA.jpg`.
