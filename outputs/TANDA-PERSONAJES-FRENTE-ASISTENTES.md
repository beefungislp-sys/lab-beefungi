# Personajes de frente y asistentes detallados

- El protagonista siempre se dibuja de frente, tanto al caminar como al detenerse, en todas las salas y en la selección inicial. Los clientes ya eran frontales y conservan ese dibujo.
- El movimiento sigue funcionando en las cuatro direcciones, por teclado y por toque. Se mantienen pasos, balanceo de brazos, respiración/parpadeo y sombra; se retiran las variantes laterales/traseras del dibujante compartido.
- Los dos asistentes usan ahora `paintLabCharacter` a la misma escala del protagonista, con silueta, cara, pelo, manos, pliegues, solapas, bolsillos, calzado y sombra detallados.
- Preparación tiene uniforme cálido y gorra ocre. Laboratorio conserva bata clara, cofia azul verdosa y gafas. Las paletas de asistentes están separadas de las dos opciones del jugador.
- Los asistentes solo animan los pasos al desplazarse. Cuando están pausados el uniforme se desatura. Sus mensajes de faltantes se conservan; el rótulo se oculta mientras aparece la burbuja para evitar solapamientos.
- Se elimina el dibujante antiguo de bata que solo usaba el asistente de laboratorio. No cambian tareas, velocidades, salarios, requisitos, suministros ni partida guardada.

Verificación enfocada: orientación frontal idéntica con las cuatro direcciones solicitadas, animación de pasos, distinción de ambos asistentes, geometría sin dimensiones negativas, pureza del arte, estado de pausa y avisos. Revisión visual de los tres personajes juntos en la sala principal. Captura local `work/personajes-frente-asistentes.jpg`, excluida de GitHub.

Resultado final: 288 grupos aprobados con npm test; build y catálogo gráfico generados correctamente.
