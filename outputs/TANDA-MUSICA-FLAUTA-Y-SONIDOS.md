# Música de flauta y señales de juego

Tres piezas breves construidas a partir de `prueba flauta.mid`, composición aportada por el usuario. El original no se modifica. El MIDI contiene 291 notas, compás 4/4, tempo declarado de 110 BPM y aproximadamente 2:39 de duración.

| Pieza | Fragmento original aproximado | Arreglo | Duración |
| --- | --- | --- | --- |
| Micelio | 0:08–0:23 | 78 BPM; flauta pausada, acordes suaves y notas de cristal | 1:14 |
| Luz de vidrio | 0:27–0:41 | 86 BPM; motivo ascendente y ambiente luminoso | 1:07 |
| Jardín burbujeante | 2:01–2:12 | 92 BPM; frase más rítmica con acompañamiento ligero | 1:03 |

Se conservaron secuencias de alturas de cada zona y se recompusieron sus duraciones en frases regulares. Cada pieza tiene 24 compases: tema, variación y una sección más grave. Se añadieron armonía, bajo y un arpegio discreto. Son arreglos sintetizados, no una grabación de flauta acústica. No usan muestras externas.

## Archivos y reconstrucción

- `assets/audio/`: tres WAV mono de 32 kHz para el juego, con colas circulares para repetición.
- `outputs/audio/`: versiones WAV con entrada/salida suaves para escuchar independientemente, MIDI editables de los arreglos y análisis numérico.
- `scripts/musica-lab.py`: reconstruye los arreglos de forma determinista; requiere Python y numpy. El render usa wave de la biblioteca estándar.
- SHA-256 del MIDI original: `989d980f1652403a3948a9271fe2561482ca6bc3fb8a0af08dac14e2f783396c`.

Las preescuchas WAV son generadas y no se duplican en Git; quedan respaldados los tres WAV del juego, los MIDI editables y la receta de generación. El build copia los WAV a `docs/assets/audio` y `dist/assets/audio`.

## Integración

La música comienza tras la primera interacción, a volumen bajo, y reproduce las tres piezas en secuencia. Ayuda incluye un interruptor Música independiente; Sonido es el silencio general. Ambas preferencias se conservan localmente. Cambiar de pestaña pausa la música y volver permite reanudarla. No se añade guardado de partida.

Se conservan las señales anteriores de faltante y proceso listo. Se añaden:

- Colocación: toque suave al consumir realmente un ingrediente mediante una acción manual, sin sonar por simples selecciones ni por cada acción del asistente.
- Venta: dos notas breves al recibir monedas por una venta manual, incluida composta.
- Desbloqueo: melodía breve con límite para anuncios simultáneos.
- Primera cosecha/producto: señal de descubrimiento al mostrar su presentación.

Todos los efectos se sintetizan con Web Audio. La cola está acotada para evitar acumulaciones de sonidos. No se cambian precios, recetas, asistentes ni progresión. Los ambientes continuos de máquinas y agua quedan fuera de esta pasada; primero se evalúa la música junto con las señales.

## Validación

Cuatro grupos nuevos de regresión: colocación/venta/faltantes, desbloqueos/descubrimientos/silencio, reproducción diferida y controles independientes, y cola acotada. Los WAV se verifican por duración, nivel, ausencia de saturación y continuidad de sus extremos. Navegador: tres archivos decodificados y reproducción confirmada con el reproductor visible.

Resultado final: 226 grupos de verificación aprobados; catálogo y build correctos. Se verificó que los tres archivos de audio publicados por el build son idénticos a los originales del juego.
