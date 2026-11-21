# Guardar y continuar partida

## Comportamiento

La partida normal se guarda automáticamente cada cinco segundos de juego y al ocultar/cerrar la pestaña. Ayuda incluye Guardar partida y Nueva partida. Al abrir el juego con un guardado válido aparece Continuar partida; hasta elegir no se simula ni se sobrescribe el guardado.

Se conservan dinero, compras, inventarios por especie/medio, mejoras, desbloqueos, guía, presentaciones pendientes, cámaras y carritos, limpieza/riesgo, procesos y sus tiempos, cultivo líquido, química, espirulina y salarios de los asistentes. La ubicación y la estación actual también se recuperan. Los procesos y salarios se pausan mientras el juego está cerrado.

Los asistentes replantean sus tareas al cargar: no se serializan funciones ni acciones pendientes sobre recetas antiguas. Los controles mantenidos con el dedo, arrastres, rutas de movimiento y menús transitorios se liberan.

## Seguridad del guardado

- Esquema explícito versionado y verificación de integridad; sólo se restauran datos admitidos.
- Un respaldo conserva el guardado válido anterior y se utiliza si el principal falla.
- Los guardados corruptos o de una versión futura no se reemplazan automáticamente.
- Si otra pestaña actualizó la partida, esta pestaña deja de escribir y solicita recargar.
- Si el navegador bloquea el almacenamiento o se agota su cuota, se informa sin afirmar que guardó.
- Nueva partida requiere confirmar. Cancelar conserva la partida y la pausa del menú de inicio.
- Tester, trucos y fixtures no reemplazan la partida normal. Recargar permite recuperar el último guardado real.

El guardado reside en localStorage del mismo navegador/origen. No sincroniza celular y computadora. Borrar los datos del sitio o usar un navegador privado puede perderlo. El respaldo de GitHub conserva el código, no las partidas personales.

## Verificación

Pasaron los 226 grupos existentes y 14 grupos nuevos de guardado (240 en total). Incluyen recarga sin progreso fuera de línea, ronda completa de estados avanzados, respaldo, corrupción, versiones futuras, cuota, cancelación/reinicio, protección del modo prueba, presentaciones pendientes y concurrencia entre pestañas.

En navegador se comprobó compra de paja (saldo 14 e inventario 4), guardar, recargar y continuar con esos valores; cancelar Nueva partida y volver a recargar conserva el guardado. Build y catálogo gráfico actualizados. La captura de QA queda fuera del respaldo de código.
