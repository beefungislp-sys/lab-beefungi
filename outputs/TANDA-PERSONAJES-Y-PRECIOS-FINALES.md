# Selección de personajes y precios finales

- La selección conserva el título «Elige tu personaje» y muestra únicamente los dos iconos. Se retiran las descripciones visibles, los nombres y el botón adicional de confirmación. Tocar o activar un icono con el teclado elige, guarda y entra al juego directamente. Los botones mantienen etiquetas accesibles para lectores de pantalla.
- La apariencia elegida se conserva al continuar; las partidas anteriores y la elección tras una migración mantienen su progreso.
- Melena de León se vende por 2 monedas por porción de 250 g. Reishi se mantiene en 3. Todos los goteros permanecen en 3 por unidad (12 por lote). No se modifican ventas anteriores, suministros ni desbloqueos.
- El balance general refleja el precio y margen actualizado de Melena.

Validación enfocada: venta por especie y sus monedas, selección de ambos personajes con un toque, persistencia, accesibilidad y ausencia de textos en los botones. Revisión visual local del selector; captura en `work/personajes-solo-iconos.jpg`, excluida del respaldo de código.

## Estado para cierre del MVP

El usuario completó una partida y considera satisfactorio el recorrido. Ya están construidos la progresión, los dos asistentes, el ciclo de Cordyceps, química/espirulina, tienda, balance, guías, música/efectos, guardado/continuar y remodelación del arte.

Pendiente recomendado antes de darlo por cerrado: última prueba manual en celulares reales del inicio, elección de personaje, cerrar/continuar partida, controles táctiles, ventas y audio. La simulación de pantalla y las pruebas automatizadas no sustituyen esa comprobación física.

Mejora interna opcional: reemplazar la detección de faltantes basada en textos por códigos de recurso (anotado en `PENDIENTES-REVISION-FLUJO.md`). No se construye en esta tanda. Deshidratación queda como expansión histórica fuera del cierre del MVP. El cultivo líquido sigue sin contaminación por decisión vigente. No hace falta abrir nuevas áreas para cerrar esta versión.

Resultado final: 279 grupos aprobados con npm test; build y catálogo gráfico generados correctamente.
