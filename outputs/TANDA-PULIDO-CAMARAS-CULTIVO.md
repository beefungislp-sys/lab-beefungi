# Pulido visual — incubación y fructificación

## Alcance

Continuación del estilo cálido aprobado: sala de cultivo cenital y las dos cámaras cercanas. Sin identificador nuevo de tanda confirmado.

## Cambios

- Fondos con textura estable, paredes crema, molduras, luz cálida fija y detalle de ventilación/luminaria. La fructificación tiene un matiz suave más fresco.
- Estantes con perfiles de acero, baldas, herrajes, sombras de contacto y placas claras para los estados. Las variantes de 4/6/8 espacios mantienen las mismas geometrías de interacción.
- Puestos bloqueados integrados al mismo mueble; etiqueta acomodada en su placa.
- Panel de ambiente con relieve y termómetro gráfico, conservando sus modos y zona de toque. La mejora climática y el contador de capacidad siguen visibles.
- Carritos con barras, asas, ruedas y sombras. Composta conserva su acción de venta y tiene una placa contrastada para la indicación.
- Bolsas con pliegues y sellos sutiles. Se conserva el patrón de colonización que blanquea toda la superficie, la contaminación verde y los modelos y colores por especie.
- Vista aérea renovada con los mismos materiales y los mismos accesos a cada cámara.

## Verificación

- `npm test`: 170 grupos aprobados. La nueva matriz de dibujo cubre 4/6/8 espacios, las cuatro especies, progreso, contaminación, agotamiento y carritos, sin modificar estados ni consumir azar de la simulación.
- Regresión de fondo/luz en las tres vistas: resultado idéntico con distintas posiciones del personaje y tiempos.
- Navegador: revisión de cámaras vacías, puestos bloqueados, ocho puestos ocupados, cuatro especies, colonización, cosecha y composta. Traslado manual de bolsa contaminada a composta comprobado.
- Inspección de la fuente real en marcos 844 × 390 y 390 × 844: entrada desde sala principal y acceso a ambas cámaras; sin recortes del juego. No sustituye una prueba física en todos los teléfonos.
- Sin errores de consola observados. Las capturas y páginas QA locales quedan fuera de la publicación.
- Se regeneran catálogo y build desde `outputs/BEEFUNGI-MESA-PAJA.html`.

## Continuidad

Se conservan controles, recetas, clima, velocidades, rendimientos, riesgo, desbloqueos, capacidad y lógica de asistentes. No se incorpora movimiento de cámara ni ciclo de día/noche. La carpeta del fork de electronicwave permanece intacta.
