# A2 — espirulina: garrafón y matraces

Identificador confirmado por el usuario: **A2 espirulina**. Esta nota no sustituye ni renombra `TANDA-A2.md`, que corresponde a los cambios anteriores de ayudantes/cultivo líquido.

## Flujo implementado

1. Al entrar, el garrafón recibe agua automáticamente (dos segundos). Arrastrar la solución nutritiva desde la derecha, o doble clic. Consume una unidad; al completar el agua se anima la mezcla durante 1,2 segundos. No crece todavía.
2. Arrastrar el matraz secundario al garrafón preparado, o doble clic en el secundario. Sólo acepta un matraz lleno y maduro. Se anima el vertido y arrancan automáticamente la luz y las burbujas. El cultivo tarda treinta segundos, conservando el reloj del garrafón y la indicación verde de crecimiento.
3. Arrastrar la cosecha al recipiente derecho, o doble clic en el garrafón listo. Agrega una sola porción al inventario de espirulina y conserva el circuito de venta existente. El garrafón queda listo para preparar e inocular de nuevo; ya no conserva el 15% del prototipo anterior. Si sigues dentro, se vuelve a llenar de agua. Si sales, el agua espera a la siguiente visita, como el resto de estaciones.
4. Ciclo independiente: arrastrar el matraz madre al secundario vacío, o doble clic en el madre. Comparte la mitad; los dos se rellenan automáticamente con agua, quedan verde claro y se oscurecen durante unos segundos. No hay reloj para los matraces. La réplica puede hacerse mientras el garrafón crece, está listo, está vacío o desde el principio si el secundario está vacío. No consume nutrientes ni depende de otra etapa. Nunca sobrellena un secundario con contenido ni permite usarlo antes de madurar.

Ambos matraces empiezan llenos y maduros. El madre permanece separado del cultivo del garrafón y siempre permite restaurar el secundario, sin compras nuevas. Son tiempos y proporciones simbólicos de juego.

## Visual e interacción

Dos matraces de vidrio a la izquierda, con etiquetas MADRE/INÓCULO y nivel/color propios. Garrafón central con cuello y asa, mezcla de nutrientes visible, luz automática y burbujas. Nutrientes y cosecha a la derecha. Durante la réplica se inclina el madre y se ve el chorro; después ambos reciben agua y cambian de verde. El arrastre dibuja el recipiente que se está usando, sin descontarlo hasta soltar sobre el destino correcto.

No se añadieron botones externos ni filas a pedidos. E/Regresar siguen funcionando. El crecimiento y la maduración de los matraces continúan al salir de la estación; el llenado del garrafón ocurre al visitarla. La partida sigue solamente en memoria.

## Verificación

- `npm test`: 100 grupos correctos. Incluyen autoagua, mezcla previa, inóculo único, mitades y relleno, maduración por color sin reloj, progreso paralelo fuera de la mesa, dos cosechas con dos inóculos, destinos incorrectos y ventas separadas.
- `npm run build`: correcto; `docs/` y `dist/` generados desde la fuente única.
- Revisión en navegador a 844 × 390 y 390 × 844: agua automática sin pulsar, mezcla de nutrientes, inoculación por arrastre, réplica inclinando el madre, maduración hasta verde oscuro en paralelo, cosecha por arrastre y nuevo llenado automático; sin errores de consola. La vista vertical tiene 390 px de ancho sin desbordamiento horizontal. No se probó en teléfono físico.
