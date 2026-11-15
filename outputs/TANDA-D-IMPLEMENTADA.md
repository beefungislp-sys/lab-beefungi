# Tanda D — implementada

- Burbujas sobre los clientes con una o dos porciones según el pedido pendiente real. Tras una entrega el pedido de dos pasa a una; al completarlo el cliente sale. Se mantiene arrastre y doble clic.
- Tanque pequeño, mediano y grande con las mejoras 2/4/6, en vista cercana y aérea. El área de entrega sigue el tamaño del tanque. Llave, agua, cal, reloj y cargas usan el mismo estado.
- Paja pasteurizada con capacidad real igual a la mejora del tanque. Contadores sincronizados en pasteurizado, mezcla, oficina y sala principal. Ampliar conserva existencias: 2/2 → 2/4 → 2/6.
- Reserva de espacio para cargas que se estén procesando: no se permite producir o reponer más de lo que cabe. El cesto de paja cruda sigue teniendo seis cargas.
- Caja de salida integrada bajo la estación de pasteurizado en la vista aérea, sin obstaculizar el pasillo central.
- La puerta de cultivo usa un icono de bolsa con setas en lugar del texto CULTIVO.

Verificación: sintaxis y 17 grupos de pruebas de lógica, incluidos tamaño/área de entrega, límites por mejora, conservación de existencias, relojes sincronizados y burbujas que cambian con las entregas. Renders del canvas revisados para los tres tamaños, sala y tienda. Sigue pendiente la prueba interactiva real en navegador/celular; la apertura automática del archivo local estaba bloqueada por la política del navegador.

Balance de precios, tiempos, cantidades y mejoras sigue siendo provisional. Recargar reinicia la partida, salvo guías iniciales.
