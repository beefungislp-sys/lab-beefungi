# Muebles por desbloqueo y pulido de tienda

## Solicitud

Mostrar únicamente los muebles disponibles: estantes de incubación/fructificación, agitación y mesas de química/espirulina. Pulir la tienda y sus proporciones con el estilo cálido ya aprobado. No se asignó un nuevo identificador de tanda.

## Muebles progresivos

- Se eliminó el dibujo de puestos bloqueados en ambas cámaras. Solo aparecen los 4, 6 u 8 puestos comprados, sin candados ni huecos de mueble.
- En la vista aérea solo se dibujan las filas disponibles; a seis puestos, la fila inferior tiene dos lugares y ancho acorde. A cuatro, no existe fila inferior.
- `visibleCultivationRacks` reúne dibujo y geometrías visibles. Colisiones, clic sobre el suelo, acceso por clic y selección con E usan esos mismos estantes. El piso liberado se puede recorrer.
- Se retiró el renderer de estantes bloqueados y su variante gráfica sobrante.
- Agitación ya tenía una condición de visibilidad por `liquidUnlocked`; se verificó su aparición y se eliminó el texto de bloqueo que era inalcanzable tras esa condición.
- Química y espirulina ya se ocultaban mediante `chemistryStationAvailable`; se verificaron dos mesas antes del primer gotero y cuatro después. Se conservó esa regla.

## Tienda

- Fondo cálido con ventana, textura estable y sombras de contacto; mismo mapa y luz fijos.
- Mostrador de madera con patas y bandejas de productos, cabeceras por especie y cantidades legibles. Se conservan unidades, iconos, pedidos, monedas y economía.
- La profundidad del mostrador responde a las filas de productos desbloqueados: 46 al inicio y hasta 122 con el inventario completo. No cambia el rectángulo de cada producto ni las zonas amplias de entrega.
- Colisiones y camino del personaje siguen el tamaño visible del mostrador. La escala de personajes y productos se mantiene coherente con el resto del laboratorio; los clientes reciben detalles de cara, ropa y sombra sin cambiar la fila.

## Validación

- `npm test`: 173 grupos aprobados. Regresiones nuevas para contar los puestos y mesas visibles, filas parciales, suelo transitable, E sin muebles invisibles y entrega correcta tras el pulido.
- Navegador: contraste entre cámaras de 4 y 6 puestos; agitación ausente antes del desbloqueo; química con 2 y 4 mesas; tienda inicial y completa.
- Entrega por arrastre comprobada: consume una unidad, añade moneda y reduce el pedido. En marco móvil se completó un pedido de dos unidades mediante el botón de entrega.
- Revisión de tienda en marcos de navegador 844 × 390 y 390 × 844. No sustituye pruebas físicas en otros teléfonos.
- Sin errores de consola observados. Capturas y páginas QA locales no forman parte del juego publicado.
- Catálogo y build regenerados desde la fuente única.

La carpeta del fork electronicwave permanece intacta. La partida continúa únicamente en memoria.
