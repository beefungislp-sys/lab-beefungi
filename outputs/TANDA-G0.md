# Tanda G0 — cámaras ampliables y venta de composta

- Incubación y fructificación empiezan con cuatro espacios habilitados cada una. Las mejoras de prueba, independientes por cámara, habilitan seis y después ocho espacios.
- La tercera mejora instala control climático: duración del proceso multiplicada por 0.90 (10% menos tiempo). Se aplica a las bolsas existentes desde la mejora y a las nuevas, sin reiniciar progreso ni alterar los perfiles de especie. En fructificación se conserva el rendimiento previsto según ambiente; siguen existiendo las consecuencias del clima elegido.
- Los espacios bloqueados se muestran con candado en la vista cercana y marcados en la sala aérea. No aceptan bolsas mediante arrastre, doble clic ni llenado de prueba. Las ampliaciones no borran bolsas, riesgos ni avance.
- Un toque/clic sobre el carrito de composta vende una unidad por una moneda. El inventario es compartido entre incubación y fructificación; vacío no vende. No cambia el arrastre de bloques al carrito. El saldo se comparte con ventas y salarios del asistente de preparación.
- Las mejoras continúan gratuitas mediante el botón de prueba de cada cámara; precios y balance definitivos pendientes.
- No se construye asistente de cultivo. Queda anotado para después de mejorar el área estéril. El asistente existente de F0 sigue limitado a preparación.

Validación: npm test (46 grupos aprobados) y npm run build. Se probó capacidad 4/6/8, rechazo de espacios bloqueados, conservación de lotes, reducción exacta de duración y venta de composta sin duplicar al soltar. Revisión visual en navegador: ampliación de ambas cámaras y venta por toque después de arrastrar un bloque. Formatos 844×390 y 390×844, sin desbordamiento y con botones de 44 px; consola sin errores. No se agrega guardado de partida.
