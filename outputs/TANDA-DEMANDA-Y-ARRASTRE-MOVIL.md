# Demanda adaptativa, mejoras posteriores y arrastre móvil

## Clientes

La demanda se adapta a las unidades enteras disponibles para venta entre setas por especie, goteros por especie y espirulina. No se suman restos de hongos de distintas especies para inventar una porción.

| Inventario listo | Llegadas aleatorias | Tamaño del pedido |
| --- | --- | --- |
| 0–3 unidades | 20–30 segundos | 1–2 |
| 4–11 | 10–16 segundos | 2–3 |
| 12–23 | 6–10 segundos | 3–4 |
| 24 o más | 4–7 segundos | 4–6 |

El tamaño se limita al stock libre del producto elegido, descontando lo que ya pidió la fila. La elección se pondera por ese stock libre para ayudar a vender el producto acumulado. Cuando todo el stock está comprometido no se duplica la reserva. Sin productos se mantiene el comportamiento de bienvenida de pedidos pequeños de Pleurotus.

Se conserva la fila de tres, la paciencia y la entrega manual por unidad. Su espera de llegada se conserva mientras esté llena, así una vacante no exige esperar otro intervalo completo. Los pedidos ya iniciados no cambian. El primer cliente de bienvenida sigue pidiendo una unidad y conserva su protección de espera.

Las burbujas mantienen uno o dos sprites para cantidades pequeñas; con tres o más muestran el producto y la cantidad real (por ejemplo, ×6). La selección de productos se concentra en un único planificador, eliminando las dos reasignaciones aleatorias posteriores que competían por goteros y espirulina.

## Precios

Se mantienen todos los primeros precios, insumos, precios de venta y salarios. Se incrementan las etapas siguientes:

- Triturador y tanque: 3 / 6.
- Cada cámara: 4 / 9 / 10.
- Sustrato: 4 / 10 / 7.
- Esterilizador: 4 / 9 / 7.
- Cabina/campana: 3 / 9 / 15.

Agua de pasteurizado, llenadora principal y agitación conservan sus precios al ser su primera mejora. El hito principal suma 34 monedas de mejoras; el árbol estéril 68. Las contrataciones siguen siendo opcionales. Los hitos de progresión se conservan y no se vuelve a cobrar ninguna mejora existente en una partida guardada.

## Arrastre táctil

El icono conserva su tamaño y se centra apenas 12 píxeles de pantalla por encima del punto de contacto, para dedo y lápiz. Se elimina el desplazamiento anterior de 52 píxeles más medio icono y el salto hacia un lado cerca del borde superior. Cerca de los límites puede recortarse parte del sprite para priorizar que permanezca pegado al dedo. El destino de entrega sigue siendo el punto de contacto real; el mouse sigue centrado.

## Música

Se comprobó la secuencia vigente: Micelio → Luz de vidrio → Jardín burbujeante → Micelio. Sólo se reproduce tras una interacción y se pausa al ocultar la pestaña. No se alteraron las pistas.

## Verificación

257 grupos aprobados: 226 base, 14 de guardado, 9 de personajes y 8 nuevos de demanda/táctil. Se comprobaron reservas, ponderación, reposición de fila, simulación de venta de inventario acumulado, dinero exacto, cantidades en burbujas y separación táctil en anchos de 240 a 844 píxeles. Las regresiones de economía se actualizaron a los nuevos precios sin cambiar sus hitos.

Revisión visual mediante vista de celular vertical 390 × 844 y horizontal 844 × 390 con pedidos de hasta seis y previsualización táctil. Es una simulación de navegador; no se afirma una prueba física en todos los teléfonos. La página de QA y sus datos son locales y no reemplazan partidas. Build y catálogo gráfico generados.
