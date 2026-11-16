# Sonidos y avisos de faltantes

Tanda solicitada antes del rediseño de tienda; el usuario no asignó un identificador nuevo. No modifica nombres históricos.

Dos señales mínimas generadas con Web Audio, sin archivos externos: dos notas ascendentes al completar un proceso y dos descendentes cuando una acción manual falla por un faltante. Volumen bajo, menos de un cuarto de segundo por señal. Se habilitan con un gesto del usuario; Ayuda permite apagar/encender y conserva esa preferencia localmente.

Los finales se detectan al cruzar a listo, no al dibujar ni al entrar. Los puestos de una misma cámara que terminan juntos producen una sola señal; otra estación conserva su aviso. Permanecer listo o volver a la vista no repite el sonido. Incluye triturador, pasteurizado, mezcla, preparación estéril, esterilizador, campana, incubación, fructificación, agitación, extracción, envasado, nutrientes y espirulina/matraces. Los errores automáticos de asistentes no disparan avisos continuos.

Un fallo manual muestra el mensaje dentro del juego durante un momento y marca la zona de origen en rojo. En espirulina se redibuja específicamente **SOLUCIÓN 0** en rojo para indicar que falta la solución fabricada en la mesa de química. No requiere abrir Ayuda para leer el motivo. Los intentos repetidos muy rápidos tienen una breve protección para no saturar el audio. Agregar nutrientes a un garrafón ya alimentado no dispara un falso faltante.

Validación: 104 grupos de pruebas y build correctos. Se verifican las frecuencias/generación y silencio con un contexto de audio simulado, los avisos únicos por cámara y el faltante manual con contador rojo y caducidad. Revisión en navegador con tamaño móvil: contador rojo, aviso visible, control de sonido y ausencia de errores de consola. No se verificó la salida física de los altavoces del usuario.

Siguiente tanda autorizada por separado: tienda con inventario completo sobre mesa central, unidades y monedas al entregar, sin selector de productos.
