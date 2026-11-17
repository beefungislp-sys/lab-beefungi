# Huecos adicionales localizados en la revisión

Estos puntos se anotan para una tanda posterior; no se presentan como ya corregidos.

1. **Recuperación de la guía si se pierde un intermedio.** La guía registra la primera producción de cada etapa, pero si luego se descarta o pierde el CL/material que necesita la siguiente, no retrocede para volver a fabricarlo. Reproducir tras completar agitación, perder el CL y llegar a inocular arroz. Proponer una flecha de recuperación, sin reiniciar toda la guía.
2. **Reposición de insumos en la guía.** La flecha apunta al ingrediente aun cuando su inventario está vacío. Los avisos de faltante y pedidos funcionan, pero no se indica Pedidos como ruta de recuperación. Revisar una ayuda mínima sin añadir carteles largos.
3. **Contaminación del CL.** Los frascos conservan `contaminationRisk`, pero `advanceLiquid` aumenta su progreso sin evaluar ese riesgo; `matureLiquidCount` cuenta los maduros sin ese control. Falta definir y conectar la consecuencia de contaminación del CL.
4. **Receta del asistente durante el desplazamiento.** `nextLabTask` encola funciones que leen el modo al ejecutarse. Falta fijar si al cambiar de modo mientras camina debe seguir el nuevo modo o cancelar su tarea anterior. Revisar este caso antes de ampliar automatización.
5. **Avisos ligados a texto.** Los marcos de faltantes dependen de expresiones regulares sobre mensajes. Se comprobó al cambiar la frase de vitrina; quedó compatible, pero conviene pasar a códigos de recurso para evitar que una futura edición de texto cambie el marco/sonido.

Corregidos en esta tanda: especie de mezcla cruzada, visibilidad y sincronía de asistentes, Petri inicial ausente, guía que omitía CL/arroz de Cordyceps, química/espirulina abiertas demasiado pronto, receta incorrecta que completaba la guía, obstáculos/clics de mesas ocultas y acciones por debajo del menú de mejoras.
