# Fades suaves, pausa de cinco segundos y ayuda breve

- Las tres canciones tienen entrada de 2 segundos y salida de 4 segundos con una curva coseno suave, aplicada en los WAV. Así se conserva el efecto en computadora y celular, sin depender del control de volumen del navegador. Se mantienen la composición, el orden y la duración de cada canción.
- La pausa entre canciones pasa de 15 a 5 segundos, incluida la vuelta a la primera pista. Las señales del juego y los controles de silencio mantienen su comportamiento.
- El generador `scripts/musica-lab.py` produce los WAV del juego y las preescuchas con los mismos fades. Los MIDI se conservan. El informe de audio registra sus duraciones de fade.
- En Opciones se sustituye la explicación larga por la ayuda breve aprobada: «Sigue las flechas. Arrastra los materiales o haz doble clic. Cultiva, cosecha y vende para comprar mejoras. Toca el suelo para caminar; en computadora usa WASD y E para entrar o salir. Tu partida se guarda automáticamente en este navegador».
- Se ocultan el mensaje rutinario de estación y las confirmaciones de guardado automático. Guardar manualmente confirma la acción; los errores de guardado, conflictos entre pestañas y recuperaciones siguen avisando. No cambia la persistencia de la partida.

Verificación: 285 grupos aprobados con npm test, incluidos tres controles de los WAV y la visibilidad de avisos de guardado. Todas las canciones empiezan y terminan en muestra cero; sus primeros y últimos 250 ms tienen un nivel muy inferior al cuerpo musical, sin saturación. Se comparó el segmento central con los archivos anteriores: es idéntico y mantiene el número de muestras. Las copias de audio en docs coinciden por SHA-256 con los maestros. Build y catálogo gráfico generados correctamente.

La ayuda breve fue revisada en navegador. Captura local `work/ayuda-breve-opciones.jpg`. Preescucha local de la transición (final, cinco segundos de silencio e inicio siguiente) en `work/transicion-fade-5s.wav`. Ambas quedan fuera del respaldo de código.
