# Revisión de ambos asistentes y recetas pendientes

Tanda sin identificador nuevo. Se conserva el cultivo líquido sin contaminación por decisión del usuario; no se añade ninguna mecánica de contaminación al CL.

## Contrato de ejecución

- Cada tarea tiene tipo, ámbito y condiciones vigentes. No reserva ni consume insumos mientras el asistente camina.
- Se valida antes de desplazarse y otra vez al actuar. Una tarea ejecutada o cancelada no se puede ejecutar de nuevo.
- Cambiar madera/CL/arroz cancela sólo las tareas de esa estación, reinicia su demora y elimina permisos de llenado pendientes. Incluso cambiar de ida y vuelta invalida la tarea anterior mediante revisiones de modo.
- El recipiente o contenido de olla que motivó una tarea debe seguir siendo el mismo. Un cambio manual de carga, retirada de recipiente, falta de material o inicio/fin de ciclo cancela la acción obsoleta.
- Las tareas de cultivo comprueban la bolsa, el flush, la cabeza del carrito, el hueco y la capacidad. No cosechan otro flush ni trasladan otra bolsa por una tarea anterior. El clima se ajusta sólo si sigue vigente la mayoría que motivó la tarea.
- Al quedarse sin saldo en el balance anterior se cancelan acciones pendientes; al reanudar se planifica de nuevo. El recorrido público sigue gratis.

## Asistente principal

Mantiene Pleurotus y triturador → pasteurizado → mezcla, agua propia, limpieza y demora de dos segundos después de llegar. Antes de consumir vuelve a comprobar bolsas, micelio de Pleurotus, paja, cal, limpieza, espacio del cesto/tanque y reservas de salida. No puede actuar sobre un tanque que reemplazó al anterior.

Los mensajes indican falta de bolsas, micelio, cal, paja o limpieza, saldo si corresponde e incubación llena. No pide agua que él mismo puede llenar. Limpiar sigue siendo opcional cuando no hay producto de limpieza, conforme a la regla existente del juego.

## Asistente de laboratorio

Mantiene sustrato, esterilización y apoyo a cámaras. Captura la receta al planificar; los selectores no se cambian automáticamente. Al cargar la olla usa el tipo capturado, prioriza la entrada seleccionada y atiende otros pools compatibles disponibles. El CL permanece separado de sólidos; madera y arroz conservan sus tipos y pueden compartir el ciclo permitido.

Conserva la demora de 2.5 segundos tras llegar. No inocula ni coloca CL en agitación automáticamente: esas acciones siguen siendo manuales.

Ahora tiene burbuja con mensajes de bolsas, frascos, aserrín, arroz, nutrientes, micelio, Petri, CL maduro, cámaras/agitación llenas o preparación pausada. Cuando hay material listo para la campana indica la inoculación manual pendiente; si el CL aún madura, indica que está agitando. Los avisos se actualizan al reponer o cambiar de situación. Si ambas burbujas coinciden en la sala, se separan verticalmente.

## Verificación

164 grupos de regresión aprobados. Incluyen matriz completa de cambios de receta entre madera/CL/arroz, cargas incompatibles, tarea de agua/inicio obsoleta, recursos agotados durante viaje, recipiente retirado, tanques/bolsas sustituidos, otro flush, carrito cambiado, clima obsoleto, pausa/reanudación salarial, ambos tipos de mensajes y solapamiento de burbujas.

Simulación conjunta de 2,600 actualizaciones con ambos asistentes y cambios de receta: sin stocks negativos, sin desajuste entre carrito y contador, sin exceder capacidades, dos bolsas de Pleurotus con 1,900 g totales y dos bloques finales de composta, sin duplicación. Se verifica explícitamente que un CL con riesgo de prueba sigue madurando sin contaminarse.

Navegador con fixture controlado construido desde la fuente: burbujas “Falta bolsas”/“Falta arroz”, desaparición al reponer, cambio real de selector madera → CL y rechazo de la tarea anterior con recursos intactos. Sin errores de JavaScript. El fixture/capturas son QA local, no se publican; no se afirma prueba física nueva en teléfono.

Catálogo y build regenerados. Publicación confirmada con `version.json` antes de entregar el enlace. No se alteran requisitos de desbloqueo, precios, tiempos de producción ni guardado: la partida continúa en memoria.
