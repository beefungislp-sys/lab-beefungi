# Revisión de flujo, especies y menú de mejoras

Tanda sin identificador nuevo. Se conservan nombres históricos y el recorrido gratuito.

## Cambios solicitados

- **Mezcla principal exclusiva de Pleurotus:** vitrina, etiqueta y consumo usan su inventario independiente. Seleccionar Melena, Reishi o Cordyceps en pedidos/campana no cambia esa estación ni permite consumir su micelio allí. El ayudante usa la misma función de dosificación.
- **Primer asistente:** se ofrece exactamente al abrir la sala estéril, desde el menú global, sin depender de dónde esté el personaje. No se contrata solo.
- **Segundo asistente:** se ofrece al desbloquear Cordyceps; ya no se anuncia con el árbol estéril completo si todavía no está disponible Reishi/Cordyceps.
- **Mejoras en barra superior:** un recuadro abre el panel dentro del juego. Contador rojo de ofertas comprables; estaciones agrupadas, siguiente nivel de cada rama, contrataciones y ampliación de agitación. Mejoras completas, asistentes contratados y árboles futuros no se ofrecen. Las ofertas ocupadas quedan deshabilitadas.
- **Menú sin acciones debajo:** bloquea clic/doble clic, teclado del canvas, caminar, cambios de modo, retirar materiales y vender. E/Escape/Regresar/× cierran; Pedidos lo cierra antes de abrirse; un anuncio tiene prioridad y cierra el menú.
- **Cordyceps completo:** entrega inicial de una placa Petri una sola vez. La guía distingue CL y sustrato aunque reutilicen estaciones: preparar CL → esterilizar → Petri en campana → agitación → preparar arroz → esterilizar → CL en campana → incubación → fructificación/cosecha. Señala el selector si falta el modo correcto y espera la producción del medio correspondiente.
- **Química en dos hitos:** primera cosecha de Cordyceps abre extracción/envasado y victoria; primer lote producido de goteros abre mesa de química y espirulina. Aviso: “Desbloqueaste mesa de química y cultivo de espirulina.”
- **Solución de espirulina:** receta inicial correcta al desbloquear, flecha al selector si se eligió otra, después sales A/B y el garrafón. Producir nutrientes de hongos no completa ese paso. Una receta parcial se puede terminar antes de cambiar, sin bloqueo circular.

## Huecos adicionales corregidos

Las mesas químicas futuras ya no se dibujan, no reciben clic/E y no dejan obstáculos invisibles. La descripción accesible del laboratorio tampoco adelanta mesas bloqueadas. Se mantuvieron compatibles los avisos mínimos de falta de micelio al corregir el texto de vitrina.

## Pendientes encontrados

Quedaron anotados con evidencia y alcance en [PENDIENTES-REVISION-FLUJO.md](PENDIENTES-REVISION-FLUJO.md): recuperación tras perder intermedios, flecha de reposición, contaminación de CL, modos de tareas pendientes del asistente y avisos basados en texto. No se presentan como resueltos.

## Verificación

- 151 grupos de regresión aprobados. Se actualizaron expectativas que describían reglas sustituidas; se conservaron las demás verificaciones.
- Nuevas pruebas: stock/especie en mezcla, simultaneidad de asistentes, Petri inicial sin duplicados, menú con conteo y compras globales sin cambiar sala, ocupación/acciones debajo, árbol principal comprado desde menú, química cerrada hasta goteros, receta correcta de solución y ruta completa guiada de Cordyceps desde CL hasta cosecha.
- Navegador con fixture de etapas construido desde la fuente: menú/contador, contratación del primer asistente en viewport horizontal 844×390, selector CL antes de agitación, Cordyceps con una placa en inventario, laboratorio de dos mesas antes del gotero, anuncio exacto después y flecha sobre sal A con solución de espirulina. Sin errores de JavaScript. El fixture sólo adelanta etapas para QA; no se publica ni sustituye una nueva prueba física en teléfono.
- Catálogo regenerado, `npm test` y `npm run build` completos. Pages se verifica con `version.json` al publicar.

No cambian precios, tiempos, rendimientos ni contaminación general. La partida sigue en memoria: recargar comienza de nuevo.
