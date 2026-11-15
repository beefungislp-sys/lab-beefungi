# Tanda F0 — mejoras de estaciones y asistente

Implementada. Las mejoras se activan gratis mediante un botón de prueba en cada módulo; no hay automatización inicial.

- Triturador, nivel 1: tolva de tres pacas, contando la que se está procesando. Puedes cargar las siguientes sin esperar; se trituran una a una. Nivel 2: tolva de cuatro y cesto de doce cargas. Una paca produce dos cargas. Al llenarse el cesto, la cola espera y reanuda sin perder material.
- Pasteurizado: llenado automático de agua entre ciclos, incluso al salir. Se conservan ampliaciones del tanque de 2 a 4 y 6 cargas, reservas y reloj.
- Mezcla: llenadora de acero en vez de bandeja, con boquilla y animación de llenado existente. Añade paja pasteurizada y micelio en cualquier orden; la bolsa se llena y sale automáticamente. Usa las bolsas del inventario.
- Limpieza: bacterias sobre la máquina y riesgo 10/20/50/100% por cada 6/12/18 bolsas sin limpiar, en lugar de 3/6/9. Limpiar reinicia el contador incluso antes de ver bacterias. Sigue siendo opcional; el ayudante limpia cada seis si hay insumo.
- Desbloqueo del asistente: ambas mejoras de triturador, tanque de seis, agua automática y llenadora. Contratación provisional 5 monedas, salario 0.25 cada 30 segundos de juego activo. No cobra una segunda contratación. Botón de prueba para añadir diez monedas. Se pausa sin saldo y reanuda al reponerlo.
- El asistente camina por el pasillo entre estaciones y carga pacas, cal y paja, mueve la pasteurizada, añade micelio Pleurotus y limpia la máquina. No compra ni inventa suministros. Trabaja aunque se cambie de vista y no cambia la especie seleccionada por el jugador. Su alcance termina en las bolsas en espera de incubación.
- El saldo usado es el mismo de ventas. Compras de insumos conservan el modo ilimitado de prueba. Balance y economía definitiva pendientes.

Validación: 43 grupos de pruebas (cola, bloqueo/reanudación, consumos, agua, llenado, contaminación, salarios y flujo completo con especie seleccionada distinta), build y revisión visual de módulos. Navegador a 844×390 y 390×844; controles de 44 px y sin desbordamiento. Partida y mejoras permanecen en memoria, sin guardado.
