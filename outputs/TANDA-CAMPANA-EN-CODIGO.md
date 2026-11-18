# Campana íntegramente dibujada en código

Continuación visual solicitada, sin nuevo identificador de tanda.

Se sustituye el sprite raster de la campana por geometría de canvas. Se mantienen el escenario por capas, los materiales y las zonas de interacción existentes.

## Componentes gráficos

- `drawLaminarFace`: planos y caras recortadas para la cubierta, laterales y superficie.
- `drawLaminarSteel`: bandas de reflexión y cepillado con semilla fija; acabado más claro para la mesa.
- `drawLaminarHoodFrame`: respaldo cálido, sombras interiores, superficies trapezoidales, techo inclinado, marco empotrado, malla de filtro, tornillos, luminaria, canto, patas y travesaño.
- `drawLaminarFlowHood`: composición y escala común para vista cercana y miniatura.

Se respetan la paleta de acero azul verdoso, bordes superiores claros/inferiores oscuros, sombras suaves y luz cálida constante de la guía gráfica. No se utilizan `Image`, data URI ni PNG para dibujar el equipo. El sprite de la prueba anterior se conserva archivado como referencia.

## Verificación

181 grupos aprobados. La prueba estática ahora incluye la campana y la miniatura, y falla si intentan usar `drawImage`; también compara el dibujo con otra posición del personaje y otro tiempo. Se conservan las pruebas de consumo, capacidad, medios y animación.

Revisión en navegador de campana, arrastre e inoculación, variante CL y miniatura. Revisión en marcos de 844 × 390 y 390 × 844. Catálogo y build regenerados. Recetas, tiempos, inventarios, Tester y desbloqueos permanecen iguales; el fork de referencia queda intacto.
