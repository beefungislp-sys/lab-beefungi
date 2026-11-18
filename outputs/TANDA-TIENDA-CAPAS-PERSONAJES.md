# Tienda por capas y personajes

## Referencias

Se conserva el concepto general del mostrador y seis referencias independientes: fondo, mostrador, estante, cuadro, planta y personajes. Están en `referencias/`, con los prompts en `PROMPTS-TIENDA-CAPAS.md`. Son guías de arte: el juego dibuja las piezas en código, sin cargar estas imágenes.

## Composición

El mismo canvas dibuja las capas en este orden:

1. `drawShopBackdrop`: arquitectura, ventana, piso en perspectiva, textura y luz fija.
2. `drawShopWallLayer`: estante, cuadro de cuatro hongos y planta, con dibujantes independientes.
3. Personaje principal cuando está detrás del mostrador.
4. `drawShopCounter` y `drawShopInventoryTray`: mueble adaptable y productos sobre bandejas.
5. `drawShopCharacterLayer`: personajes ordenados por profundidad sin modificar el orden real de la fila.
6. Burbujas, selección, monedas y controles.

El fondo permanece inmóvil: no hay parallax ni ciclo de día y noche. El piso tiene una sola cuadrícula en perspectiva y textura tenue. Los muebles conservan madera cálida, crema y acero verde azulado.

## Personajes

El pulido delegado añade pelo, rostros, ropa, accesorios y sombras a tres variantes de cliente. El personaje principal usa bata, solapas y botones; su dibujante compartido se reutiliza en las demás salas. Las bolsas de compra siguen apareciendo al salir.

Se mantienen los anclajes y tamaños de interacción. La composición conserva las posiciones de las tarjetas, entregas táctiles, movimiento, precios, llegada de clientes y crecimiento del mostrador según los productos disponibles. La tienda inicial muestra sólo Pleurotus y el mostrador corto.

## Verificación

- 185 grupos de pruebas aprobados, incluida una regresión de dibujo sin mutaciones, fondo fijo y profundidad del personaje respecto al mostrador.
- Revisión en navegador de tienda completa, inicio con mostrador corto y ocultación de piernas detrás del mueble.
- Entrega real a un cliente de dos unidades mediante arrastre y clic: descuentan existencias, pagan y salen de la fila.
- Revisión en marcos de celular horizontal y vertical.
- Catálogo gráfico y build regenerados para publicar. Captura de QA local: `TIENDA-CAPAS-PERSONAJES-QA.jpg`, excluida del respaldo.
