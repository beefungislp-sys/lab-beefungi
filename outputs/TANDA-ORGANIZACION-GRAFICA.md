# Organización gráfica e interacción

Tanda solicitada sin identificador nuevo. Conserva la fuente única y el comportamiento del balance/progresión actual.

## Entrega

- `CATALOGO-GRAFICO.md`: 21 áreas, 81 dibujantes, 27 elementos nativos, interfaz dinámica, colores y referencias a líneas del código. Generado de forma repetible con `npm run catalog`; falla si falta una entrada principal referenciada.
- Fuente HTML/CSS/JS formateada y secciones identificadas para facilitar futuras pasadas por estación. Prettier sólo es una dependencia de desarrollo, fijada mediante package-lock.
- `beginDrag` y `updateDrag`: captura, datos iniciales, umbral y movimiento compartidos. Se sustituyeron 17 inicializadores repetidos. Se mantienen las validaciones de cada destino.
- Botón canvas compartido `drawCanvasButton`; botones HTML con sus estilos comunes. Se conserva clic para botones, arrastre/doble clic para materiales y las alternativas táctiles de entrega.
- Un solo despacho de vistas y una sola capa de avisos; se retiraron cinco envolturas gráficas sucesivas.
- Un solo actualizador de controles de tienda por producto, sin antiguas páginas/selectores. Retirados renderizadores/manejadores sustituidos, tipos de arrastre que ya no podían iniciarse, estado `shopCustomer`, rectángulo `table` sin uso y formateador `priceText` sin referencias.

No se eliminó `selected`: la selección del triturador sí lo usa. Tampoco se quitaron adaptadores activos de otras estaciones sin verificar sus dependencias. Quedan capas de eventos activas que pueden migrarse después por estación; esta limpieza no pretende que todo el programa carezca de redundancia.

## Comprobaciones

125 grupos de regresión: producción, compras, mejoras, inventarios, economía, móviles, cancelación, umbral común del arrastre y una sola capa de avisos por vista. Build y catálogo generados correctamente.

Navegador a 844 × 390: arrastre de paca al triturador, vuelta a sala, entrada a mezcla y marco correcto al intentar arrastrar paja inexistente; sin errores de consola. No se hizo una nueva prueba física en teléfono.

La progresión documentada no se implementó en esta tanda; no se cambiaron el balance, el arte ni los tiempos como parte de la reorganización. El guardado de partida continúa sin implementar.
