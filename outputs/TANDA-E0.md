# Tanda E0 — especies, cosecha y venta táctil

- Frutos propios: Pleurotus azul con ostras, melena amarilla con pompones blancos, reishi rojo con abanicos y cordyceps naranja con mazas. Se usan en bloques, vista aérea, cosecha, pedidos y tienda. Los bloques muestran además nombre y color.
- Cordyceps tiene representación visual y precio, pero continúa sin ruta de cultivo. Su vista previa se consulta en oficina o tienda.
- Cosechas separadas por especie a partir del identificador de cada lote. No se suman especies distintas para completar una porción. El inventario conserva todo el recorrido y los ingresos se registran por especie.
- Precios provisionales por 250 g: Pleurotus 1; melena 1.25; reishi 1.50; cordyceps 1.75 monedas.
- Clientes con especie y cantidad. Los nuevos pedidos eligen entre cosechas disponibles; sin cosecha, Pleurotus como inicio. Se conservan espera máxima y llegadas aleatorias.
- Móvil: toque simple en cliente/burbuja, objetivos dinámicos ampliados, botón nativo Entregar y selector de especie de venta. Se mantiene el arrastre; una especie incorrecta no vende ni consume stock.

Causa verificada del fallo anterior: zona fija del primer cliente y ausencia de entrega por toque simple. Los nuevos controles son independientes del selector de micelio y de la ficha de oficina.

Validación terminada: 36 grupos de pruebas de lógica y build correctos. En el navegador público se verificaron los modelos, las cosechas separadas y las ventas de Pleurotus, melena y reishi con sus precios. Se entregó a un segundo cliente con toque simple y mediante el botón Entregar. A 844×390 y 390×844 los controles nativos miden 44 px de alto, sin desbordamiento horizontal; consola sin errores. Los eventos táctiles también se verificaron en pruebas automatizadas. La prueba física en otros teléfonos queda pendiente.

El botón de prueba de fructificación llena huecos con Pleurotus, melena y reishi para revisar los modelos; no genera cordyceps ni sustituye la producción manual.
