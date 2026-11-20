# Presentaciones de primera cosecha

Al cosechar por primera vez cada especie se abre una ventana con el hongo en primer plano y sólo su nombre: Pleurotus, Melena de león, Reishi o Cordyceps. Cada primer lote de goteros por especie tiene su propia presentación y el mismo nombre, sin textos explicativos. La primera cosecha de espirulina presenta su frasco y el nombre Espirulina.

El retrato reutiliza los dibujantes nativos aprobados, ampliados sobre un fondo oscuro con iluminación suave. No se carga una imagen alternativa ni se duplican sprites. Los goteros cambian de ámbar a vidrio negro con reflejos fríos, conservando el color de su especie en la etiqueta; origen, llenado, arrastre, tienda y retrato comparten el cambio.

Hay nueve primeros encuentros independientes: cuatro hongos, cuatro goteros y espirulina. No se repiten en flushes o tandas posteriores. Si coinciden varias producciones se ordenan en una cola. Se registran sólo productos completados, nunca una vista previa ni una cosecha de cero gramos. Este registro dura la partida en memoria y se reinicia al recargar, como el resto del juego.

La ventana se cierra con ×, E o Escape. Tiene foco modal, bloquea acciones detrás y pausa los relojes y salarios mientras se observa. Al cerrar se conserva el aviso de desbloqueo pendiente y se retoma el juego. No cambia dinero, materiales, rendimientos, precios ni hitos.

Las pruebas históricas omiten únicamente esta presentación mediante un registro explícito de productos vistos. Las regresiones dedicadas arrancan sin ese registro y verifican producción real, nueve encuentros sin repeticiones, cola, cierre, pausa, bloqueo de acciones, pureza del retrato y vidrio negro.

Validación: 209 grupos de pruebas aprobados y build correcto. Revisadas en navegador las cuatro especies, gotero negro, cierre con ×/E y conservación del aviso de tienda. Espirulina revisada en 844 × 390 y 390 × 844; corregido el fondo de las bandas laterales en horizontal. Catálogo regenerado. Captura local de Pleurotus: PRIMERA-COSECHA-QA.jpg.

## Revisión posterior de arte

Los cuatro retratos de hongos ampliados se sustituyen en [Retratos V2](TANDA-RETRATOS-HONGOS-V2.md) por dibujos nuevos basados en referencias generadas para cada especie. Se conservan el comportamiento de las presentaciones, los goteros negros y la espirulina.
