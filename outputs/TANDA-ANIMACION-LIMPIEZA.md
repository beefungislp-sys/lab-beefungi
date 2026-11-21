# Animación breve de limpieza

Al completar una limpieza se muestra una confirmación visual de 1,35 segundos: rociado suave, una pasada de trapo y tres destellos al terminar. Si había suciedad visible, unas motas residuales se retiran conforme pasa el trapo. La limpieza preventiva también tiene animación.

Se reutiliza un dibujante de efecto para la bandeja manual, el interior de la llenadora y la cabina. El área de mezcla usa `mixContentRect`; la cabina usa `gloveRect`, respetando sus tamaños inicial y ampliado. Los dibujos se recortan al interior y no cubren contadores ni botones.

El efecto sólo comienza al consumir realmente un uso de limpieza. Superficies ya limpias, falta de insumos o una inoculación activa conservan sus rechazos y no muestran una limpieza falsa. No cambia recetas, contaminación de bolsas anteriores, costos ni duración de producción. No añade carteles, botones ni una espera obligatoria.

Las animaciones son transitorias, se actualizan con el tiempo activo del juego y no se guardan. Cambiar de módulo o mejora no deja una animación flotando en otra estación. Al cargar una partida se descartan, mientras que el estado de limpieza real sí se conserva como antes. Los asistentes pueden limpiar con las mismas reglas, sin notificaciones visuales globales fuera del módulo.

Cinco grupos nuevos comprueban éxito, limpieza preventiva, rechazos, consumo único, alineación en todas las superficies, fases gráficas distintas, pureza del dibujo y descarte al cargar. Revisión en navegador con las tres fases y con llenadora/cabinas inicial y ampliada a escala de celular. Las páginas de QA congelan fases sólo para inspección y no forman parte del juego publicado.

Resultado final: 262 grupos aprobados, build y catálogo gráfico generados correctamente.
