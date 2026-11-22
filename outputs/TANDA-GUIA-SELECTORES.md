# Guía: seleccionar medio antes de comprar

Aclaración del usuario: si el recurso ya existe y se está viendo otro material o receta, la flecha debe indicar el selector, no una compra adicional.

- En pedidos, cuando la ruta no tiene un faltante, se señala el selector de paja/madera/arroz que corresponda al paso de preparación. Una vez elegida la fila correcta, se señala cerrar pedidos; nunca +1 en este caso.
- Para micelio se distingue también la especie requerida por mezcla o campana. Si ya hay Petri de Cordyceps y se está viendo otro micelio, se señala cambiar la especie y volver al módulo.
- En la campana, cuando el recipiente esterilizado ya está disponible, cambiar a la receta adecuada tiene prioridad sobre solicitar micelio. CL maduro y sustrato Cordyceps mantienen sus dependencias y no entran en un bucle de selectores.
- CL se prepara cambiando el modo de la mesa; no se interpreta como un sustrato que deba comprarse en la fila de paja. Solo se solicitan insumos realmente agotados del medio correcto.
- La guía no cambia automáticamente selectores, inventarios, saldo ni hitos; el usuario realiza el cambio indicado. Paja, madera, arroz y CL siguen siendo reservas distintas.

Se añaden tres regresiones con existencias, selección intermedia incorrecta y ausencia real de Petri. Pasan también las pruebas enfocadas de todas las guías y la ruta completa CL/arroz/cosecha.

Resultado final: 278 grupos aprobados con npm test; build y catálogo gráfico generados correctamente.
