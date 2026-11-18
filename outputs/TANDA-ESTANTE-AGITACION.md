# Estante de agitación y assets de cultivo líquido

Continuación visual solicitada, sin nuevo identificador de tanda.

## Referencias generadas

Tres imágenes de referencia, conservadas en `referencias/`:

- `ESTANTE-AGITACION-CONCEPTO.png`: estante único con dos niveles, seis agitadores y bandeja inferior.
- `AGITADOR-MAGNETICO-CONCEPTO.png`: base compacta aislada, plato circular, perilla, indicador y pies; fondo transparente.
- `FRASCOS-CL-ESTADOS-CONCEPTO.png`: frasco vacío y tres estados de medio/cultivo con nivel constante y micelio suspendido; fondo transparente.

Los prompts y la herramienta utilizada están registrados en `referencias/PROMPTS-ESTANTE-AGITACION.md`. Los PNG sirven de referencia; los aparatos del juego se dibujan con código.

## Implementación

- Se sustituyen las mesas apiladas por un solo bastidor de cuatro postes continuos, dos entrepaños, refuerzos, travesaño y pies. La miniatura de la sala comparte el mismo dibujante.
- Cuatro puestos iniciales en distribución 2 × 2; la mejora conserva sus cultivos y amplía a 3 × 2. Los agitadores se distribuyen de forma uniforme, con holgura para los frascos.
- Bases magnéticas de acero con plato circular, perilla e indicador: apagado si están vacías, ámbar trabajando y verde al estar listas. La perilla es detalle visual, sin control nuevo de velocidad.
- Frascos con vidrio redondeado, tapa acanalada y filtro, medio ámbar, menisco, barra magnética y nubes blancas de micelio distribuidas en el líquido. El nivel no sube con el progreso; cambia la densidad del micelio.
- `drawLiquidJar` se comparte con reserva, carga del esterilizador, campana, animaciones y arrastre. Los iconos de CL pierden la tarjeta de fondo y conservan el centro del mouse y la separación táctil.
- El frasco gira su barra magnética durante la maduración y se detiene al estar listo. Entrada y disponibilidad se mantienen separadas bajo los puestos.

Los puestos y sus zonas de recepción usan `liquidSlotRects`; el recipiente visible queda dentro de su destino. La bandeja de entrada conserva su zona táctil amplia. El 100% permanece en el agitador y puede consumirse desde la campana.

## Componentes

`drawAgitationRack`, `drawAgitationShelf`, `drawMagneticStirrer`, `drawLiquidJar`, `drawAgitationStation`, `drawLiquidDoor` y `liquidSlotRects`.

Fondo estéril, tiempos, recetas, capacidad de 4/6, mejora, desbloqueo y regla de CL sin contaminación permanecen iguales.

## Validación

183 grupos de pruebas: producción y consumo, identidad al ampliar, correspondencia visual/táctil, dibujo sin mutar estado, todos los destinos táctiles y rechazo de entregas entre puestos o sobre un puesto ocupado. Las pruebas antiguas usan ahora las coordenadas del puesto y comprueban la aparición del estante al desbloquearlo.

Revisión en navegador: estados vacíos/parciales/listos, 4/6 puestos, entregas reales en ambas filas, miniatura y celular horizontal/vertical. Catálogo y build regenerados. Capturas locales: `ESTANTE-AGITACION-CUATRO-QA.jpg` y `ESTANTE-AGITACION-SEIS-QA.jpg`.
