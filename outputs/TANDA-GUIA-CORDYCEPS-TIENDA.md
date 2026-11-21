# Guía contextual: Cordyceps y tienda

Se corrigen los cruces entre las flechas de producción, los suministros y la venta:

- La guía de CL y sustrato Cordyceps ignora frascos de otras especies que hayan quedado guardados en la campana. Esos frascos se conservan; no bloquean las recetas de Cordyceps.
- La flecha de Petri/CL apunta al material arrastrable, debajo del selector. Se ajusta también la altura de la flecha del arroz/aserrín para que señale el montoncito.
- Se elimina la segunda flecha antigua de la tienda. La guía compartida elige un producto con existencias que coincida en especie y tipo (setas/gotero/espirulina) con un cliente listo para atender.
- Durante una visita a la tienda no aparecen pedidos de suministros correspondientes a otro módulo. Al salir se retoma el hito pendiente. La primera venta conserva su guía; después no se vuelve a mostrar ese tutorial al visitar la tienda.
- Los hitos completados, inventarios y partida guardada se conservan. No cambia el balance ni la progresión.

Validación: 273 grupos aprobados con `npm test`, incluidos seis casos nuevos de regresión contextual. `npm run build` y `npm run catalog` completados. Revisión visual en navegador con escenarios aislados: Petri separado del selector y una única flecha sobre Reishi cuando el cliente pide Reishi. Capturas locales en `work/guia-petri.jpg` y `work/guia-tienda.jpg` (no se publican).
