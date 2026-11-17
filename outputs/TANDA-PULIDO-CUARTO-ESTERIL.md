# Pulido visual — cuarto estéril

## Alcance

Continuación del acabado cálido aprobado, aplicada a la sala estéril y sus vistas cercanas: preparación de sustrato, esterilizador, cabina/campana y agitación. No se asignó un nuevo identificador de tanda.

## Cambios

- Sala cenital y estaciones con el suelo texturizado, molduras crema y luz fija del laboratorio. Se suma un matiz neutro suave sobre el acero.
- Mesas inoxidables con cepillado discreto, biseles, herrajes, travesaños, apoyos y sombras de contacto. El dibujante compartido transmite este acabado a las otras mesas de acero que ya lo usan.
- Olla con reflejos, bandas, tornillos, indicador gráfico y tapa con más volumen. Se conservan la apertura, el cierre, el agua, la vibración, el vapor y el reloj.
- Cabina pequeña, ampliada y flujo laminar con estructura más definida, cristal, remaches e indicador. Se mantienen tamaños, guantes, filtros, materiales y animaciones de inoculación/sellado.
- Los modos de Petri/cultivo líquido y sustrato Cordyceps usan el mismo detalle de carcasa, sin cambiar su flujo ni sus cantidades visibles.
- Llenadora con perfiles, ventilación y depósitos; nutrientes, válvulas y frascos con reflejos finos. Las barras de depósito y sus valores se conservan.
- Agitadores de cuatro y seis puestos con carcasas detalladas y placas de texto más legibles. Los reflejos se limitan al tamaño de cada aparato.
- Agitación continúa ausente hasta desbloquearse. Sin parallax ni ciclo de día/noche.

## Verificación

- `npm test`: 176 grupos aprobados. La nueva matriz comprueba dibujo en los tres medios, niveles de llenadora y cabina, olla 2/4/6, fases de tapa y animaciones, y agitación 4/6, sin modificar recursos o procesos ni consumir azar.
- Navegador: revisión de sala inicial/completa, sustrato, olla abierta, inicio manual y cierre, cabina/campana, ambos modos de Cordyceps y agitadores. Arrastre de micelio para iniciar inoculación comprobado.
- Inspección en marcos 844 × 390 y 390 × 844, con entrada a campana y esterilizador. No sustituye pruebas físicas en todos los teléfonos.
- Sin errores de consola observados. Capturas y páginas QA locales excluidas de la publicación.
- Catálogo y build regenerados desde la fuente única.

La lógica de recetas, mejoras, agua, tiempos, riesgos, capacidades, asistentes y desbloqueos conserva su comportamiento. El fork de electronicwave permanece intacto.
