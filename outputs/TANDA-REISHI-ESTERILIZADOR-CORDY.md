# Reishi, tanda mixta y frasco de Cordyceps

- Reishi se vende por 3 monedas por porción de 250 g. El aumento respecto al precio inicial de 2 es de una moneda, en lugar del aumento provisional de 1,5. Melena mantiene 2,5; goteros, compras y progresión se conservan. El balance general refleja el nuevo margen de Reishi.
- La esterilizadora permite combinar bolsas de madera, frascos de cultivo líquido y frascos de arroz Cordyceps en una misma tanda, en cualquier orden y dentro de la capacidad comprada. Cada recipiente conserva su medio y sale a su reserva correspondiente. No se admiten cargas mientras trabaja.
- El asistente puede cargar la tanda combinada. La interfaz deja de indicar que el CL necesita una tanda aparte y la guía resuelve una olla llena antes de solicitar otra carga.
- Los frutos de Cordyceps usan el mismo origen y escala que el frasco; el racimo queda más centrado y estrecho, con un recorte interior que impide que sobresalga. No se cambian crecimiento ni rendimiento.
- El guardado admite una tanda combinada en proceso sin migración de esquema. No se altera dinero ganado en ventas anteriores.

Verificación: regresiones actualizadas para ventas y monedas, cargas manuales, arrastre/doble clic, asistentes y guardado de una tanda combinada. Dos grupos nuevos comprueban los tres órdenes de entrada, capacidad/consumo y salida única por tipo, además de los límites gráficos del racimo a distintos avances. Revisión visual local de frascos en crecimiento y olla con los tres medios. Capturas locales en `work/cordy-dentro-frasco.jpg` y `work/esterilizador-mixto.jpg`.

Resultado final: 275 grupos aprobados con npm test; build y catálogo gráfico generados correctamente.
