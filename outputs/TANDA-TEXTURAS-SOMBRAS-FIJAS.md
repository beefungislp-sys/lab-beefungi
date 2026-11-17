# Texturas y sombras fijas — adaptación de electronicwave

## Solicitud

Aprender de la prueba visual de electronicwave y aplicar una mejora pequeña al original: más textura, detalle, contraste de materiales y sombras/luces suaves; mapa y suelo inmóviles y sin ciclo de día y noche. Sin identificador nuevo de tanda confirmado.

## Revisión y cambios

- Se leyeron README e INSTRUCCIONES-SESION y las funciones gráficas del fork, y se revisó la captura diurna.
- El movimiento extraño del fondo corresponde a `updateParallax`, que desplaza con CSS el canvas del piso según el personaje. No se incorporó esa arquitectura.
- Se adaptaron únicamente los helpers visuales independientes: hash de textura estable, vetas/motas/juntas y desgaste, reflejos y volumen de materiales, sombras elípticas y luz cálida de baja opacidad.
- Aplicado a sala principal, triturador, pasteurizado y mezcla, con sprites compartidos para pacas, madera y cestos.
- La cámara, controles, movimiento y simulación del original conservan su lógica. No se ejecutaron los scripts de parche del fork ni se modificó su carpeta.
- Se documentó el rumbo en ESTILO-VISUAL-LAB-BEEFUNGI.md.

## Validación

- 168 grupos de pruebas aprobados. La regresión nueva compara las órdenes de dibujo del fondo completo con el personaje en dos posiciones y dos tiempos distintos: piso, paredes y luz permanecen idénticos. Continúan pasando las verificaciones de recursos, recetas y dibujo sin consumo de azar de simulación.
- Navegador: inspección de sala, caminar con teclado sin desplazamiento del mapa, entrada/salida a pasteurizado y mezcla. Sin errores de consola.
- Inspección en marcos de navegador de 844 × 390 y 390 × 844. La prueba física en más teléfonos sigue pendiente.
- Catálogo y publicación se generan desde la fuente única. Las capturas QA y las páginas temporales de prueba no se publican.
