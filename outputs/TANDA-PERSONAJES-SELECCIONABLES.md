# Tres personajes seleccionables

## Referencia y reconstrucción

Se generó una lámina de referencia original con tres trabajadores de laboratorio y poses de reposo, caminata y espalda. Se conserva en `assets/referencias/personajes-laboratorio-v1.png`. La imagen no se carga como sprite ni como fondo del juego: se reconstruyó en código mediante `paintLabCharacter`.

Tres opciones visuales: cabello corto con camisa salvia, cabello rizado con camisa azul y coleta con camisa terracota. Comparten bata marfil con solapas, bolsillo, pluma, credencial, pantalones y zapatos. Cambian piel, cabello y detalles de color; no tienen ventajas de producción.

El sprite lógico es de 32 × 48. Hay frente, espalda y perfiles, cuatro fases de caminata con brazos en contrafase, respiración y parpadeo en reposo. La dirección y los pasos dependen del desplazamiento real; una tecla contra un obstáculo no simula caminar.

## Interfaz y consistencia

Al empezar una nueva partida se elige entre tres personajes. El selector pausa la simulación y sólo escribe la elección al confirmar. Al continuar una partida que ya tiene personaje no se repite la elección.

Las salas principal, de cultivo, estéril y química llaman a `drawPlayer`/`drawLabAvatar` y al mismo dibujante de personaje. Se eliminó el protagonista antiguo de rectángulos que estaba incrustado en la sala principal. Se conservan los clientes y los asistentes con sus identidades. El protagonista sigue oculto en la tienda, como estaba solicitado.

Miniaturas sin fondo ni marco propio de sprite: el recuadro corresponde únicamente al botón de elección. Su relación de aspecto 2:3 se fija para que no hereden el 4:3 del canvas del juego. Se revisaron escritorio y vistas de celular 390 × 844 y 844 × 390.

## Guardado y compatibilidad

`avatarId` y `avatarChosen` forman parte del estado local. El lector del esquema 1 admite la partida anterior sin esos dos campos y los incorpora con la elección aún pendiente. Al continuar se elige apariencia sin reiniciar inventario, dinero, tiempos ni progresión. Cancelar una nueva partida mantiene el personaje anterior.

En esta revisión se detectó y corrigió también la lista de salas guardables: faltaban los identificadores de oficina (`warehouse`) y sala de cultivo (`cultivation`). Ambas ubicaciones ya se pueden guardar y recuperar.

## Verificación

Ocho grupos nuevos: selector, persistencia de las tres opciones, compatibilidad con partidas previas, pureza/geometría/poses, movimiento real, dibujante compartido en las cuatro salas, reinicio/cancelación y guardado de las dos ubicaciones. Las fixtures históricas omiten únicamente el selector inicial mediante una marca explícita de prueba; el recorrido público siempre lo presenta en partida nueva.

Prueba en navegador: elegir Coleta, iniciar, caminar, recargar y continuar conserva la apariencia. Se contrastó la sala principal tras reemplazar su dibujo antiguo y se revisaron las proporciones y controles en ambas orientaciones de celular.

Resultado final: 226 grupos existentes, 14 de guardado y 8 de personajes aprobados (248 en total); catálogo y build correctos.
