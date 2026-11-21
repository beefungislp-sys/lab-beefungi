# Balance: venta de Melena de León y Reishi

Por solicitud del usuario, se aumenta el precio de venta de las setas para aliviar el estancamiento del cuarto estéril:

| Especie | Antes por 250 g | Ahora por 250 g | Aumento |
| --- | ---: | ---: | ---: |
| Melena de León | 1,5 | 2,5 | +1 |
| Reishi | 2 | 3,5 | +1,5 |

La venta, las estadísticas de ingresos por especie y las monedas animadas utilizan los precios actualizados. Se conservan las porciones, los gramos remanentes y el pago único por entrega.

Pleurotus y Cordyceps, insumos, mejoras, asistentes, demanda y progresión no cambian. Los goteros mantienen sus precios de 0,5 / 0,75 / 1 / 1,5 monedas: ahora tienen una tabla explícita en `gameBalance.droppers` para que una modificación del precio de setas no los altere indirectamente. Un lote de cuatro sigue valiendo más que los hongos usados, con menor margen para Melena y Reishi.

El aumento se aplica a futuras ventas, incluido el inventario que ya estaba guardado. No se reembolsan ventas antiguas ni se modifica el dinero al cargar. El formato de guardado no cambia.

Se actualizan las regresiones de venta por especie, entregas táctiles, pagos parciales, monedas fraccionarias y valores de goteros. El documento general de balance incorpora los nuevos ingresos y márgenes proyectados; no son ganancias garantizadas por bloque individual porque se venden porciones completas y existen riesgos de cultivo.

Resultado final: 267 grupos aprobados. Build y catálogo gráfico generados correctamente.
