# Huecos adicionales localizados en la revisión

Estado actualizado tras la revisión de ambos asistentes. Se distingue lo pendiente de lo corregido o aplazado por decisión del usuario.

1. **Recuperación de la guía si se pierde un intermedio.** La guía registra la primera producción de cada etapa, pero si luego se descarta o pierde el CL/material que necesita la siguiente, no retrocede para volver a fabricarlo. Reproducir tras completar agitación, perder el CL y llegar a inocular arroz. Proponer una flecha de recuperación, sin reiniciar toda la guía.
2. **Reposición de insumos en la guía.** La flecha apunta al ingrediente aun cuando su inventario está vacío. Los avisos de faltante y pedidos funcionan, pero no se indica Pedidos como ruta de recuperación. Revisar una ayuda mínima sin añadir carteles largos.
3. **CL sin contaminación — decisión vigente.** El usuario pidió conservarlo sin contaminación por ahora. No se implementa su riesgo y deja de ser una corrección pendiente de esta tanda. Los datos de riesgo existentes no provocan contaminación del líquido.
4. **Receta del asistente — corregido.** Cada tarea captura medio, revisión de selector y estado relevante. Cambiar de modo cancela la tarea y reinicia su demora; la nueva receta se planifica aparte. Se protegen también agua, cargas, cosechas, cambios de mayoría climática y traslados. [Revisión de asistentes](TANDA-REVISION-ASISTENTES.md).
5. **Avisos ligados a texto.** Los marcos de faltantes dependen de expresiones regulares sobre mensajes. Se comprobó al cambiar la frase de vitrina; quedó compatible, pero conviene pasar a códigos de recurso para evitar que una futura edición de texto cambie el marco/sonido.

Corregidos en esta tanda: especie de mezcla cruzada, visibilidad y sincronía de asistentes, Petri inicial ausente, guía que omitía CL/arroz de Cordyceps, química/espirulina abiertas demasiado pronto, receta incorrecta que completaba la guía, obstáculos/clics de mesas ocultas y acciones por debajo del menú de mejoras.
