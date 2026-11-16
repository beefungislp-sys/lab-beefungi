# Desbloqueos activos — recorrido gratuito

Tanda solicitada sin identificador nuevo; se usa nombre descriptivo y no se renombra el historial.

## Cambios

- Inicio sólo con Pleurotus y su circuito básico, oficina/pedidos y cámaras de cuatro espacios.
- Primera cosecha de Pleurotus abre tienda; primera venta habilita mejoras.
- Trituradora, pasteurizado y mezcla completos + ambas cámaras a seis abren sala estéril/Melena y habilitan contratar al primer asistente.
- Cosechar Melena abre Reishi. Completar sustrato, esterilizador y cabina habilita contratar al segundo asistente. Con Reishi disponible, abre también todo Cordyceps/agitación.
- Primera cosecha de Cordyceps muestra victoria y abre química gratis como bonificación.
- Compras, mejoras y asistentes sin coste ni mantenimiento. Insumos sí se consumen; se reponen gratis en pedidos. Ventas mantienen ingresos.
- Sólo aparecen puertas, materiales, especies, inventarios, modos y contrataciones disponibles. Mejoras de una en una por módulo; las completas y asistentes contratados dejan de ofrecerse.
- Avisos únicos en cola, con botón Continuar. Mantienen visibles los eventos si se desbloquean varias cosas juntas.
- Ocultas las herramientas de reposición/desbloqueo total; gratis conserva las condiciones del árbol.
- Catálogo gráfico regenerado y documento de progresión actualizado como implementación vigente.

## Decisiones concretas para esta prueba

La autorización de activar la propuesta se aplica con tienda tras primera cosecha; puertas futuras ocultas; Cordyceps/agitación dependen de completar el árbol estéril y tener Reishi disponible, sin exigir contratar al asistente ni cosechar Reishi. Las ampliaciones máximas y controles de las cámaras no son requisito para el árbol estéril.

No se añaden aún logros secundarios de extracto/espirulina. Se conservan contaminación, tiempos, clima, inventarios y demás reglas productivas. La partida permanece en memoria y recargar la reinicia.

## Verificación

- 132 grupos de regresión: 125 históricos y 7 del arranque público con progresión activa. Los históricos usan una configuración aislada para conservar las expectativas del prototipo/balance anterior.
- Nuevos recorridos: inicio oculto, entradas por clic/E/caminar, pedidos gratis y filtro de especies, producción real de Pleurotus desde paca hasta cosecha/venta, todos los hitos, avisos sin repetirse, contratación/mantenimiento gratis y ruta completa Petri/CL/arroz hasta cosecha de Cordyceps sin depender de química.
- Navegador: cultivo manual real desde triturador hasta primera cosecha, aviso de tienda, compra sin descuento de saldo, venta y mejora secuencial gratuita, y apertura de sala estéril. Agitación permanece oculta. Sin errores de consola.
- Aviso revisado también en viewport horizontal 844 × 390. No se afirma prueba física nueva en teléfono.
- `npm test`, `npm run catalog` y `npm run build` completados; publicación se confirma mediante `version.json` antes de entregar el enlace.
