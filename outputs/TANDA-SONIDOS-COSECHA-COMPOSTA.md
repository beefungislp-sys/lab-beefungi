# Sonidos orgánicos de cosecha y compostaje

Se incorporan dos efectos breves sintetizados con Web Audio, sin archivos externos en ejecución:

- Cosecha: 0,24 segundos de resonancia de madera, ataque corto y crujido suave. Se reproduce al recoger una cosecha manual válida de hongos o espirulina.
- Compostaje: 0,38 segundos de golpe grave y textura granular/terrosa. Se reproduce al retirar realmente un bloque a composta desde incubación o fructificación.

Las ventas de composta conservan el sonido de moneda; no se confunden con depositar un bloque. Las acciones fallidas, los espacios vacíos y los asistentes fuera de la acción manual no generan estos efectos. El botón general de Sonido y la pausa/ocultación de pestaña se respetan.

La detección se integra en `playerAction`, comparando inventarios y carritos antes y después. Evita una segunda señal de colocación para la misma cosecha o compostaje. Los efectos usan ruido determinista y resonadores amortiguados; nunca llaman al azar que decide contaminación o clientes. Los buffers se generan una vez por tipo/tasa de muestreo y se reutilizan. Sus fuentes se desconectan al terminar o al silenciar.

La percusión se dispara inmediatamente para no perderse detrás de la melodía de primera cosecha. Las señales existentes, música, precios, recetas, contaminación y progresión no cambian.

## Preescucha y validación

`scripts/render-organic-cues.mjs` extrae el mismo sintetizador de la fuente y genera `outputs/audio/cosecha-madera.wav` y `outputs/audio/composta-tierra.wav` para escuchar. Son renders ignorados por Git, reproducibles desde el código respaldado.

Cinco grupos nuevos verifican cosecha válida/fallida, composta en ambas cámaras/venta, espirulina, forma de onda en 22,05/44,1/48 kHz, duración/niveles/ausencia de corte, determinismo sin azar de juego, caché y silencio con liberación de fuentes.

Resultado final: 267 grupos aprobados; build y catálogo gráfico generados correctamente. Las dos preescuchas WAV se renderizaron desde el mismo sintetizador utilizado en el juego.
