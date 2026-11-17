# Campana como sprite y corrección de mejoras iniciales

Continuación de las dos solicitudes, sin nuevo identificador de tanda.

## Campana

Se extrae la campana vacía de la imagen aprobada mediante `image_gen`, conservando filtro, acero, iluminación, mesa y patas. Se eliminan fondo, ingredientes y estante de limpieza de la imagen para que los recursos sigan siendo objetos del juego.

El sprite transparente se recorta y pixeliza a 448 × 296, con una paleta de 192 colores y escalado sin suavizado. Está guardado en `outputs/assets/campana-flujo-sprite.png` e integrado como data URI en el HTML fuente: la publicación sigue siendo autocontenida. La miniatura usa la parte superior del mismo sprite. El dibujo anterior queda de respaldo mientras carga o si falla la imagen.

Se ajusta el apoyo visual de bolsas y frascos sin cambiar los rectángulos de interacción, inventarios, recetas ni tiempos. El prompt y la preparación del asset están en `outputs/assets/README.md`.

## Mejoras iniciales

Se retira la condición de primera venta para las ramas de triturador, pasteurizado y mezcla, tanto en la lista como en la compra real. La siguiente etapa aparece al comprar la anterior. En el recorrido gratuito actual siguen sin coste; el modo de balance conserva cobros y validación de saldo.

El hito estéril conserva todos los requisitos: triturador máximo, tanque de seis con agua automática, llenadora de mezcla y cámaras de incubación/fructificación ampliadas a seis. Las mejoras de cámaras se ofrecen tras la primera venta. No se compra ni contrata automáticamente nada.

## Verificación

- 179 grupos aprobados, incluyendo compra inicial sin venta y bloqueo de sala estéril hasta cumplir el hito completo.
- Compra desde partida nueva comprobada en el menú superior; primera mejora del triturador aplicada sin ventas.
- Campana revisada con madera y CL; arrastre de micelio a bolsa verificado manualmente.
- Revisión visual en marcos de 844 × 390 y 390 × 844.
- Build y catálogo regenerados; fork de referencia intacto.
