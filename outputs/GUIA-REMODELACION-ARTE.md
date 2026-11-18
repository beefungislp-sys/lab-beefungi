# Guía de remodelación de arte

Método acordado a partir de la campana, sus materiales y la renovación del área estéril. Este documento sirve como procedimiento para las siguientes mesas. El catálogo de funciones y ubicaciones está en [CATALOGO-GRAFICO.md](CATALOGO-GRAFICO.md); la dirección artística está en [ESTILO-VISUAL-LAB-BEEFUNGI.md](ESTILO-VISUAL-LAB-BEEFUNGI.md).

## 1. Revisar antes de dibujar

- Trabajar en `outputs/BEEFUNGI-MESA-PAJA.html`, fuente única. `docs/` y `dist/` se generan.
- Identificar dibujantes, estados, iconos de arrastre, animaciones, miniaturas y zonas táctiles de la estación en el catálogo.
- Registrar el tamaño y posición de cada zona de interacción. Una pasada de arte debe conservar recetas, tiempos, capacidades, desbloqueos y comportamiento.
- Preparar una matriz visual: vacío, parcial, trabajando, listo, sin insumos y cada nivel de mejora. Incluir todos los medios que cambien los recipientes.

## 2. Primero los assets

Definir silueta, materiales y escala de los objetos antes de componer la mesa. Para una silueta nueva, generar o aprobar una referencia; para variantes pequeñas, reutilizar las piezas existentes.

La campana se trabajó con una referencia frontal ligeramente elevada. De ella se separaron aparato, frascos, bolsas, limpieza y ambiente. La prueba de imagen pixelizada sirvió para evaluar proporciones; la versión actual los dibuja con código, sin cargar esa imagen durante el juego.

- Frascos: vidrio transparente con hombros, tapa crema acanalada, grano y micelio. La marca de especie va en la tapa.
- Bolsas: contorno flexible, pliegues, filtro, sellado y contenido diferenciado. La bolsa vacía no muestra relleno.
- Aserrín: montículo redondeado de textura fina; arroz: granos más definidos y color propio.
- Acero: planos azul verdosos, cepillado fino, cantos claros, tornillos y sombra de contacto. Evitar ruido que compita con los ingredientes.
- Limpieza y mechero: dibujantes propios, misma escala que los materiales; la llama puede animarse.

Crear una función por objeto reutilizable. No copiar el dibujo por separado para mesa, arrastre y animación.

## 3. Después la capa del cuarto

Sí: conviene reutilizar **una base de vista cercana por área**. No hace falta redibujar el piso y las paredes en cada mesa.

En el cuarto estéril, `drawSterileWorkroom(title, stockPanel)` aporta pared crema, ventana, azulejos salvia, suelo en perspectiva y luz fija. El título y el panel lateral son opciones. La campana, las cajas, sustrato, esterilizador y agitación usan esa misma base. Las sombras específicas del aparato pertenecen a su composición, no al fondo común.

La sala aérea conserva su propia cámara. No mezclar su perspectiva con la vista cercana. Otras áreas podrán tener otra función base con sus materiales, manteniendo la misma dirección de luz y escala.

Texturas y luces del ambiente deben permanecer estables: semilla fija, sin movimiento del suelo, parallax ni ciclo de día y noche.

## 4. Componer por capas

1. Fondo fijo del área.
2. Sombras de contacto y mueble con patas, cubierta y profundidad.
3. Aparato: estructura, superficies, filtro, cristal y luz.
4. Ingredientes y recipientes, apoyados en una superficie visible.
5. Proceso: agua, vapor, micelio, movimiento de salida o llama.
6. Elementos que deben quedar delante: guantes, bordes y reflejos discretos.
7. Contadores, flechas, avisos y controles.

La cámara cercana es frontal ligeramente elevada: horizontales niveladas, verticales rectas y superficie superior visible. Comprobar que el equipo cabe en su mesa, sus patas alcanzan el suelo y los rótulos no cruzan cantos ni travesaños. Las mejoras cambian el tamaño del aparato sin estirar arbitrariamente todos los detalles.

Para mesas de producción reutilizar `drawStainlessTable(x, y, w, h, legHeight)`: `h` es la profundidad de cubierta y `legHeight` el tramo de patas. No duplicar el mueble dentro de cada aparato. La campana ya integra esta base; oficina y mostrador conservan su componente de madera. Ajustar la profundidad a los objetos existentes antes de mover sus hitboxes.

Si el mueble es un estante, componer un bastidor continuo con entrepaños en lugar de apilar mesas. Agitación usa `drawAgitationRack`, compartido con su miniatura. Cuando cambie la distribución de puestos, derivar dibujo y destinos táctiles del mismo arreglo y verificar todos los destinos antes de publicar.

## 5. Unificar el arrastre

Reutilizar el dibujante del objeto en `dragIconCatalog`, la mesa y las animaciones. En esta pasada se conectaron los nuevos frascos, bolsas, aserrín, nutrientes y kit de limpieza.

- Mouse: icono centrado en el cursor y sin salto inicial.
- Táctil/lápiz: conservar la separación para verlo por encima del dedo; el destino real sigue siendo el punto de contacto.
- Los objetos remodelados del área estéril usan `bare: true`: sin tarjeta opaca detrás del cristal. No cambiar de golpe el fondo de los iconos de otras áreas.
- Mantener tamaño legible y centro visual coherente con los límites declarados del icono.
- Respetar el estado: bolsa vacía al arrastrar una vacía, especie correcta, sólo hongos durante la cosecha.
- Revisar origen, recorrido, destino, cancelación y retorno a la sala. Mejorar el dibujo no debe desplazar la zona que recibe el objeto.

## 6. Revisar estados y tamaños

Usar fixtures locales con botones visibles para abrir estados reproducibles, sin modificar la partida del jugador. Las cantidades de prueba deben respetar la capacidad del nivel mostrado.

Revisar caja pequeña, mechero, caja grande y campana; sustrato de madera, arroz y medio líquido; preparación manual y llenadora; reservas vacías, parciales y llenas. Revisar también el proceso y la salida de recipientes.

Probar en escritorio y en marcos de celular horizontal y vertical. Comprobar separación de rótulos, tamaño de materiales, ausencia de recortes y correspondencia entre dibujo y zonas táctiles. La revisión visual complementa las pruebas de lógica; no las sustituye.

## 7. Cerrar la pasada

- Actualizar catálogo, guía de estilo y nota descriptiva de la tanda; conservar las notas históricas.
- Ejecutar `npm test`, `npm run catalog` y `npm run build`; revisar el diff y no incluir temporales, capturas de QA ni forks independientes.
- Publicar en `main` y verificar `version.json` en GitHub Pages antes de anunciar que está en línea.
- Entregar la guía y una captura representativa. No asignar una nueva letra/número de tanda sin confirmación del usuario.

## Aplicación de esta pasada

| Parte | Resultado |
| --- | --- |
| Campana | Conserva el aparato de acero en código y sus materiales compartidos. |
| Cajas de inoculación | Cristal, tapa con profundidad, herrajes, guantes y reservas con los mismos frascos y bolsas. |
| Mechero y limpieza | Materiales, volumen, llama y composición acordes con la campana. |
| Mesa de sustrato | Montículos diferenciados, bolsa y frasco vacíos, nutrientes, reflejos y llenadora con niveles reales. |
| Ambiente estéril | Base cercana compartida para todas sus estaciones. |
| Esterilizador | En la continuación se adapta a la referencia: cilindro, tapa abatible, canastilla y manómetro; conserva su escala por capacidad. |
| Llenadora de sustrato | En la continuación se adapta a la referencia: tolvas, cámara, paleta y plataforma abiertas. |
| Agitación | Estante único de dos niveles, con agitadores magnéticos y frascos de CL compartidos con todo su circuito. |

La mesa de sustrato se delegó con límites claros: dibujantes propios y composición de esa estación, sin tocar recetas ni funciones de inoculación. La integración final unificó iconos, ambiente y validación. En futuras delegaciones conviene separar funciones y zonas de edición del mismo modo.
