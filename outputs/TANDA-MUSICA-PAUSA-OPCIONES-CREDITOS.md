# Silencio entre canciones, Opciones y Créditos

- Las tres canciones mantienen su orden y dejan 15 segundos de silencio entre pistas, incluida la vuelta de la tercera a la primera. La primera canción sigue esperando una interacción del jugador y no tiene espera adicional.
- Tocar controles o reactivar música durante el intervalo no lo salta. La reanudación respeta el silencio maestro y la visibilidad de la pestaña. Los efectos del juego continúan disponibles durante la pausa musical.
- «Ayuda» pasa a llamarse «Opciones». A su lado aparece «Créditos», con «Por Angel Romo». Ambos paneles usan el mismo estilo y se abren de uno en uno; se conserva el acomodo en horizontal de celular.
- Las pruebas manuales de celular y del final/logros quedan completadas por confirmación del usuario. Se actualiza el estado vigente de pendientes, sin eliminar el historial.

Se propone esta ayuda breve, sin sustituir todavía la explicación existente de Opciones: «Sigue las flechas. Arrastra los materiales o haz doble clic. Cultiva, cosecha y vende para comprar mejoras. Toca el suelo para caminar; en computadora usa WASD y E para entrar o salir. Tu partida se guarda automáticamente en este navegador».

Verificación enfocada: secuencia completa con intervalo de 15 segundos, eventos duplicados, gestos durante la pausa, silencio y cambio de visibilidad. Navegador real: se observó Pista 2 en silencio con 15 s restantes y después reproduciendo; Créditos muestra la autoría solicitada. Captura local `work/opciones-creditos.jpg`, excluida del respaldo de código.

Resultado final: 281 grupos aprobados con npm test; build y catálogo gráfico generados correctamente.
