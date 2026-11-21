# Cierre de balance: goteros

Todos los goteros se venden por 3 monedas por unidad: Pleurotus, Melena de León, Reishi y Cordyceps. Un matraz sigue produciendo cuatro goteros, cuya venta completa suma 12 monedas. La especie se conserva para inventario, pedidos y presentación; el precio es uniforme.

El cambio utiliza la tabla independiente `gameBalance.droppers`. El saldo y las monedas animadas se calculan con el mismo precio de venta. No cambia el precio de las setas, las compras, la cantidad producida ni los requisitos de progresión.

Se aplica a futuras ventas, incluso a goteros ya guardados en inventario. No se modifica el dinero obtenido en ventas anteriores ni el formato de guardado.

Verificación enfocada: ciclo de extracción/envasado/venta, primera venta y compra posterior, venta de los cuatro goteros de cada especie a 3 monedas cada uno (12 por lote), icono de pago y rechazo de una quinta entrega sin existencias. Se actualizan las regresiones económicas y el documento general de balance.

Resultado final: 275 grupos aprobados con npm test. Build y catálogo gráfico generados correctamente.
