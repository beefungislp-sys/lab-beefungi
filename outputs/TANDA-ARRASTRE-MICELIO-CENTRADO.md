# Micelio sin tarjeta y arrastre centrado con mouse

Corrección solicitada, sin nuevo identificador de tanda.

- Los iconos `jar`, `gloveJar` y `gloveInoculum` declaran `bare: true` en el catálogo: al arrastrarlos se dibuja únicamente el frasco, sin tarjeta azul ni marco exterior.
- Con mouse, el centro de la vista previa coincide con el cursor, incluso junto a los bordes. Se conserva la escala existente y se centra también la geometría del frasco dentro del icono.
- En táctil/lápiz se mantiene la separación sobre el dedo y el ajuste a los bordes. El destino sigue siendo la posición real del puntero.
- Las marcas amarillas del destino se dibujan sólo en táctil; no aparecen detrás del frasco centrado con mouse.

No se modifican los materiales del frasco, recetas, consumos ni validación de entregas. Otros iconos conservan su tarjeta; el centrado con mouse se aplica al render común.

## Verificación

182 grupos aprobados. La nueva regresión comprueba centro exacto con mouse en distintos tamaños y bordes, escala conservada y ausencia de fondo para los tres iconos de micelio. Las verificaciones táctiles anteriores siguen pasando.

Se revisa visualmente la vista previa transparente y se prueba un arrastre real de frasco a bolsa en la campana, iniciando la inoculación. Catálogo y build regenerados desde la fuente única.
