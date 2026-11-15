# Tanda J0 — cabina ampliable y campana de flujo laminar

- Tres mejoras gratuitas en el botón de prueba de la cabina: mechero, caja ampliada y campana laminar. No se permite mejorar durante una inoculación.
- Cabina inicial al 78% del tamaño anterior, con zonas de interacción ajustadas al dibujo. La cabina ampliada tiene el tamaño anterior. Guantes visibles en ambas entradas de las cajas.
- Mechero animado: multiplica por 0.5 el riesgo de inoculación existente, conservando la relación con limpieza y usos. Valores provisionales de juego.
- Caja ampliada: tres bolsas esterilizadas y tres frascos. Un gesto sobre el suministro carga hasta los tres lugares libres, limitado por las existencias. Cada inoculación consume una bolsa y un frasco; los demás permanecen dentro. Los frascos mantienen su especie y se usan en orden.
- Campana laminar: cambia la caja por una campana abierta, filtro y corrientes de aire. Riesgo de inoculación provisional de 0.1%, independiente de los usos; los riesgos ambientales posteriores en incubación se mantienen.
- La campana usa directamente las bolsas esterilizadas y el micelio compatible disponibles en inventario, sin límite de capacidad. No genera ni regala insumos. Conserva también las cargas que estuvieran dentro al mejorar. Muestra como máximo dos frascos y cuatro bolsas, además de los contadores totales.
- Arrastrar micelio a una bolsa inicia inoculación; sellado y salida a espera son automáticos. Doble clic sobre el micelio es una alternativa. No empieza otra bolsa sin intervención. La reserva se limita a reishi y melena de león: Cordyceps sigue sin cultivo.
- No se añade asistente estéril ni de cultivo en esta tanda.

Validación: npm test (58 grupos), npm run build y revisión del diff. Riesgos por mejora, carga 3+3, conservación de especie al transformar, dieciséis bolsas sin tope ni duplicación, bloqueo de Cordyceps, inicio por arrastre y límites visuales. Navegador: comparación de los tres tamaños/configuraciones, tres frascos cargados, arrastre en campana y salida automática confirmada en espera. Pantallas 844×390 y 390×844, sin desbordamiento ni errores de consola; botones de 44 px. Partida y mejoras permanecen en memoria.
