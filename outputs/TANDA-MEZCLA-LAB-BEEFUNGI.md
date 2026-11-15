# Lab BeeFungi · Tanda de mezcla y guía

Cambios acordados e implementados en BEEFUNGI-MESA-PAJA.html:

- Nombre definitivo: Lab BeeFungi.
- Flecha inicial hacia la mesa TRITURADOR. Desaparece al abrirla por primera vez y recuerda esa visita localmente; no envía por error a mezcla.
- Sala cenital, cesto compartido entre mesas y movimiento WASD conservados.
- Vista cercana de mezcla: vitrina de seis botes al fondo; mesa grande continua; bandeja ancha apoyada sobre ella, cesto a izquierda y puesto de llenado a derecha.
- Paja y micelio se añaden mediante arrastre o doble clic, en cualquier orden. Se representan con fibras doradas y granos blancos separados. Sin animación de abrir/voltear el bote en esta tanda.
- Arrastrar la bandeja a la bolsa, o doble clic en bandeja/bolsa, inicia llenado manual. Interpretación del fragmento de voz: dejar espacio para llenar bolsas en la misma mesa y que salgan sin almacenarse allí.
- Regla provisional visible: una carga + un bote + una bolsa por llenado. Se descuentan al iniciar, una vez. Llenado y salida visibles duran 2.5 segundos; al terminar aumenta el contador de bolsas recibidas en cultivo. La mesa de cultivo sigue siendo decorativa: su proceso posterior no se implementó aquí.
- Reponer insumos de prueba añade tres pacas, completa la vitrina a seis y suma seis bolsas. Es una utilidad de prototipo, no compra económica.

Verificación automatizada: sintaxis; dibujo de ambas vistas; tres pacas producen seis cargas; cesto lleno rechaza sin consumir; cesto compartido; seis botes sin duplicación; movimiento; micelio primero y paja después; doble inicio de llenado; salida única a cultivo y rechazo sin ingredientes.

Límite: no hubo inspección visual en navegador durante esta tanda. Revisar composición, claridad de drag and drop y legibilidad al abrir el archivo. El prototipo sigue sin guardado general de partida; únicamente recuerda haber mostrado la guía inicial. No se tocaron los juegos anteriores ni sus guardados.
