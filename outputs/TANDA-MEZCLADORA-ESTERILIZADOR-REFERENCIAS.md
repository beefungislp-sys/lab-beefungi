# Mezcladora y esterilizador basados en referencias

Continuación visual solicitada, sin nuevo identificador de tanda.

## Resultado

- Mezcladora/llenadora de sustrato: dos tolvas transparentes con salida cónica y nivel real, cámara redondeada con ventana y paleta, boquilla, estructura abierta y plataforma para el recipiente. El dibujo se comparte con la miniatura de la sala.
- Agua de la llenadora conducida a la cámara; los recipientes de madera, arroz y medio líquido conservan sus pasos y posiciones.
- Esterilizador: cuerpo cilíndrico con cepillado tenue, tapa abatible con junta y asa, canastilla, borde que tapa las bases de los recipientes, cierres, manómetro, indicador de agua, válvula y patas. La tapa conserva el cierre y el vapor durante el proceso.
- Mesa de apoyo ajustada a la base del esterilizador. La llave cae dentro de la abertura y conserva el mando en su zona táctil.
- Bolsas preparadas: mismo dibujante que las bolsas de campana, visible en reservas, carga, animación y arrastre.

El fondo `drawSterileWorkroom` permanece idéntico al de la versión anterior. No se cambian recetas, capacidades, tiempos, desbloqueos ni hitboxes.

## Referencias y componentes

Las imágenes `referencias/MEZCLADORA-SUSTRATO-CONCEPTO.png` y `referencias/ESTERILIZADOR-MESA-CONCEPTO.png` se conservan como inspiración. Los aparatos del juego se dibujan en código; no cargan los PNG.

Componentes principales: `drawSubstrateMixer`, `drawSubstrateHopper`, `drawWoodFiller`, `drawPressurePot`, `drawPressureLid` y `drawPreparedSubstrateBag`.

## Validación

182 grupos de pruebas aprobados; catálogo y build regenerados. Revisión visual de olla abierta/cerrada, capacidades de 2/4/6, cierre por el botón real, agua, recipientes de CL y mezcla de sólidos; llenadora vacía y con reservas, arroz y CL, arrastre real de bolsa y encuadres de celular horizontal/vertical.

Capturas locales de QA: `MEZCLADORA-REFERENCIA-QA.jpg` y `ESTERILIZADOR-REFERENCIA-QA.jpg`. No forman parte de la publicación.
