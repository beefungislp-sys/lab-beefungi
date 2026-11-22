# Versión pública 1.0.0 — Lab BeeFungi

Por Angel Romo. Preparación de la versión pública solicitada, conservando balance y progresión aprobados.

## Cambios de publicación

- Tester y Modo prueba quedan ocultos y desactivados desde el HTML inicial y durante el juego. Los botones de recursos de prueba y llenado no funcionan en el entorno público.
- Se desactivan la secuencia hericium y sus funciones de desbloqueo. La página pública no contiene activaciones de herramientas internas ni ofrece un parámetro de URL para habilitarlas.
- El harness de regresión habilita herramientas explícitamente en un contexto aislado. Las pruebas nuevas cargan también el juego con ese acceso desactivado y comprueban el comportamiento público real. Esto es preparación de interfaz y flujo público; el juego sigue siendo código de cliente.
- Inicio con elección de personaje, kit de suministros, 15 monedas, mejoras disponibles según progreso, primera cosecha/cliente y compras reales sin cambios. Las partidas existentes conservan datos y formato de guardado.
- Opciones conserva música, sonido, ayuda breve, Guardar partida y Nueva partida. Créditos conserva «Por Angel Romo».
- Se identifica la entrega como 1.0.0 en package.json, lockfile y version.json. El build registra canal público, hash de fuente y hashes de los tres audios; rechaza activaciones de pruebas incrustadas accidentalmente en la fuente.
- README pasa a describir la versión actual y deja de presentar economía gratuita o funciones históricas como pendientes.
- El fork local de exploración sigue intacto y se excluye del staging mediante .gitignore. El script de publicación incluye assets y lockfile además de fuente, pruebas y notas.

## Validación

292 grupos aprobados con npm test. Cuatro grupos públicos nuevos cubren inicio y controles ocultos en todas las salas, ausencia de regalos/truco, selección y continuidad del guardado, y ciclo de primera cosecha/cliente/venta/reposición con saldo real. Las regresiones históricas conservan su entorno de pruebas.

Build 1.0.0 y catálogo gráfico generados. Fuente y tres WAV del build verificados por hash. En navegador se continuó una partida existente y se comprobó la interfaz de Opciones sin Tester ni Modo prueba. Captura local `work/version-publica-1.0.0.jpg`, fuera del respaldo de código.

El usuario confirmó anteriormente la prueba manual de celular y del final/logros. No se añaden expansiones, analítica, cuentas ni sincronización de partidas. El guardado permanece en el navegador y no hay producción fuera de línea.
