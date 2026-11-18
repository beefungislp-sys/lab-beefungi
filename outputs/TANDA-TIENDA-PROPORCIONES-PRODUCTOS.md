# Tienda: proporciones y productos sin tarjetas

## Comparación con las referencias

Se revisaron `referencias/TIENDA-MOSTRADOR-CONCEPTO.png` y `referencias/TIENDA-FONDO-CAPA-CONCEPTO.png` frente al juego. La versión anterior destinaba sólo 46 de 240 píxeles a la pared; el piso dominaba la escena y el mostrador tenía mucha más profundidad de cubierta que frente visible.

Ahora la pared llega a 132 de 240 píxeles: ventana alta a la izquierda, estante vertical al centro, cuadro y puerta a la derecha, zócalo de azulejos y piso más corto. La cuadrícula comparte una perspectiva fija y moderada. La luz y las texturas permanecen inmóviles. La planta vuelve al alféizar y la ventana muestra vegetación.

Se adapta la composición al canvas 4:3 y a nueve productos, en lugar de reproducir literalmente la proporción horizontal y los seis grupos de la imagen. El mostrador conserva un frente de madera visible y su tamaño depende de los productos desbloqueados.

## Productos

- Se eliminan tarjetas, bandejas individuales, nombres y marcos permanentes.
- Setas y espirulina ocupan la primera fila; los cuatro goteros, la segunda.
- Cada producto comparte el sprite de su circuito y muestra sólo la cantidad disponible.
- La selección añade una luz suave bajo el producto. El aviso rojo de faltante conserva su función.
- `shopDisplayLayout` define las posiciones tanto para dibujar como para seleccionar, también en modo tester. Se elimina el acomodo anterior de tres filas.
- Las zonas invisibles de selección tienen al menos 44 píxeles de pantalla; si se solapan, gana el centro más cercano.

## Movimiento y ventas

La colisión incluye el frente del mostrador. Se amplía el pasillo inferior y se mueve la entrada del personaje a un punto libre, evitando aparecer dentro del mueble completo. La guía apunta al nuevo centro del producto. Se conservan inventarios por especie, precios, cantidades y pedidos de clientes.

## Verificación

Revisión visual en escritorio y marcos de celular 844 × 390 y 390 × 844; entrega mediante arrastre desde el sprite en escritorio y en el marco vertical, con descuento de existencias y cobro. Se revisan además tienda inicial y personaje detrás del mostrador.

Las pruebas de interacción históricas siguen los nuevos centros de producto. Se añaden regresiones para ausencia de tarjetas y nombres, entrega de los nueve productos sin cruzar inventarios, encaje sobre la cubierta, colisión frontal y zonas táctiles mínimas. Total: 188 grupos de verificación. Se regeneran catálogo y build para publicar.

Captura local de QA: `TIENDA-PROPORCIONES-PRODUCTOS-QA.jpg`, excluida del respaldo.
