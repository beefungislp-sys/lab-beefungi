# Mesa de acero compartida

Continuación visual solicitada, sin nuevo identificador de tanda.

## Componente

La referencia `referencias/MESA-ACERO-BASE-CONCEPTO.png` se adapta a código mediante `drawStainlessTable(x, y, w, h, legHeight)` y `drawStainlessTableLeg`. No se carga la imagen durante el juego.

- Cubierta trapezoidal de acero cepillado, reflejo cálido a la izquierda y sombra azul verdosa a la derecha.
- Canto doblado, faldón fino, tornillos, cuatro patas, pies regulables y travesaños laterales/posterior.
- Texturas estables y recortadas dentro de la superficie; sin dependencias de reloj ni azar.
- `h` conserva la profundidad disponible para aparatos y materiales. `legHeight` adapta el soporte al espacio de cada módulo; cero omite las patas en la miniatura integrada de campana.

## Aplicación

Las mesas de producción de triturador, pasteurizado y mezcla pasan a acero en su vista cercana y en la sala principal. El mismo componente se aplica a las mesas existentes de sustrato, esterilizador, cajas de inoculación, agitación y química, incluyendo sus mesas pequeñas y miniaturas.

La mesa integrada de campana también usa el componente. Se elimina su dibujo duplicado de cubierta, patas y travesaño; filtro, luz y estructura superior se conservan.

La oficina y el mostrador de tienda conservan madera. Las patas de mezcla se acortan ligeramente para que sus pies queden visibles dentro del lienzo.

## Validación

Fondos cercanos comprobados sin cambios. Recetas, hitboxes, controles, inventarios, capacidades y tiempos permanecen iguales. Se revisaron composiciones cercanas y aéreas, mesas profundas y estrechas, campana, agitación de seis espacios y espirulina, además de celular horizontal y vertical.

182 grupos de pruebas aprobados; catálogo y build regenerados. Capturas de QA locales: `MESA-ACERO-CAMPANA-QA.jpg` y `MESA-ACERO-TRITURADOR-QA.jpg`.
