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
- Todos los arrastres usan ahora sprites libres: `bare: true` es la política común y el renderizador ya no añade tarjeta opaca. Conservar las superficies físicas del objeto, etiquetas y sombras pequeñas; revisar contraste sobre fondos claros y oscuros.
- Mantener tamaño legible y centro visual coherente con los límites declarados del icono.
- Respetar el estado: bolsa vacía al arrastrar una vacía, especie correcta, sólo hongos durante la cosecha.
- Revisar origen, recorrido, destino, cancelación y retorno a la sala. Mejorar el dibujo no debe desplazar la zona que recibe el objeto.

En frutos compuestos, definir un origen de crecimiento dentro del bloque y conectar todas las piezas antes de dibujar los sombreros. Comprobar los extremos de la composición en brote, crecimiento intermedio, madurez y cada flush; no basta con revisar el sprite aislado. Pleurotus conserva esta geometría en `oysterClusterGeometry`.

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
| Incubación y fructificación | Bastidor y entrepaños abiertos, carritos, bolsas que blanquean y frutos diferenciados para cuatro especies; conservan sus fondos. |
| Tienda | Pared alta y piso proporcionado a la referencia; mostrador, estante, cuadro y planta separados; productos sin tarjetas y personajes compuestos por profundidad. |

En la tienda se generaron referencias por pieza antes de dibujarlas en código. El pulido de personajes se delegó sin tocar ventas ni controles. El orden de dibujo permite pasar detrás del mostrador; la profundidad se calcula en una lista auxiliar, conservando intacta la fila y sus zonas táctiles. Esta separación facilita remodelar el mobiliario sin alterar las entregas.

En la revisión siguiente se corrigieron proporciones al comparar el juego con el concepto general, antes de validar en celular. Los productos pasan a dos filas sin tarjetas. Cuando cambia su posición, actualizar el acomodo compartido y las pruebas de interacción; conservar zonas táctiles amplias aunque el sprite sea pequeño. La colisión debe incluir el frente del mueble y la entrada del personaje debe quedar en suelo libre.

La tienda ahora oculta al protagonista y aumenta los clientes al 150 %. El orden de profundidad se aplica a clientes esperando y saliendo. Al cambiar la escala, revisar a la vez separación de la fila, capacidad visible, burbujas, zonas táctiles y bolsa de compra; no agrandar sólo el dibujo.

La mesa de sustrato se delegó con límites claros: dibujantes propios y composición de esa estación, sin tocar recetas ni funciones de inoculación. La integración final unificó iconos, ambiente y validación. En futuras delegaciones conviene separar funciones y zonas de edición del mismo modo.

## Auditoría y seguimiento de familias

[AUDITORIA-ASSETS-REMODELACION.md](AUDITORIA-ASSETS-REMODELACION.md) conserva los 32 tipos y su estado previo (17 tarjetas pendientes, 15 retiradas), separa módulos de arrastres y organiza las próximas familias. En esta continuación se retiran las tarjetas restantes y se redibujan Petri y limpieza desde referencias propias. Un kit compartido evita diferencias entre mezcla y cabina; la placa comparte dibujo en reserva, arrastre y animación. No marcar una familia como remodelada sólo por quitar su tarjeta.


## Continuación: materiales, máquinas y química

El [plan de cierre por familias](PLAN-CIERRE-REMODELACION.md) enlaza las notas posteriores. En cada familia se generó referencia sólo para las piezas nuevas y se tradujo a dibujantes nativos; la referencia no se pega como fondo dentro del juego. Origen, arrastre, animación, tienda y miniatura llaman al mismo dibujante cuando representan el mismo objeto.

Para cristalería se recorta el líquido al interior y se diferencian vacío, parcial, lleno y madurez. Los polvos y la solución N tienen una lectura distinta. Los equipos se reducen proporcionalmente en la vista de sala; se comprueba que su base quede en la superficie de acero y no sobre el faldón o las patas. Las pruebas visuales incluyen recorrido real y galería de los 32 arrastres sobre crema/azul, además de horizontal y vertical.

## Protagonistas seleccionables

La referencia `assets/referencias/personajes-laboratorio-v1.png` se reconstruye en `paintLabCharacter`, un sprite nativo de 32 × 48 con dos apariencias activas, bata y cuatro orientaciones. Se utilizan las columnas primera y tercera de la referencia original; la lámina histórica no se altera. El selector y las salas utilizan el mismo dibujante. `drawLabAvatar` sólo posiciona y escala; `drawPlayer` compone protagonista, asistentes y destino. La sala principal conserva ese mismo camino, sin una copia de rectángulos propia.

La animación avanza por desplazamiento real, no por mantener una tecla contra un obstáculo. El reposo incluye respiración y parpadeo; caminar alterna piernas y brazos. Los canvases de selección conservan su relación 2:3 y fondo transparente. Los clientes y asistentes conservan sus identidades y el protagonista sigue oculto en tienda.
## Personajes y asistentes frontales

Reutilizar `paintLabCharacter` para el protagonista y las variantes de asistentes. El dibujo es siempre frontal; el desplazamiento del personaje no rota el sprite. Se conserva la posición del argumento de dirección para compatibilidad de llamadas, pero no genera vistas de lado o espalda.

`labAvatarStyles` define únicamente las dos opciones del jugador. `assistantArtStyles` aporta vestuario y accesorios de preparación/laboratorio; `drawAssistantCharacter` coloca el mismo cuerpo y sombra a escala coherente con el protagonista. Conservar las capas de pelo posterior, extremidades, ropa, cara, pelo frontal y accesorio. Los avisos se dibujan por encima y suprimen el rótulo duplicado mientras están presentes. El dibujo no cambia las tareas ni las reservas del asistente.
