# Tanda C — implementada

## Oficina y especies
Ficha de información cíclica independiente de la especie elegida para comprar. Colores con nombre: Pleurotus azul, melena de león amarillo, reishi rojo y cordyceps naranja. Se aplican en ficha, pedidos, inventario y etiquetas de bolsas. Perfiles ambientales de juego conservados por bolsa.

## Cuarto estéril
Puerta izquierda en la sala principal. Acceso por clic, E o caminando; WASD en el cuarto, vistas cercanas de estaciones y E para regresar.

1. Comprar sustrato de madera a una moneda o usar las tres cargas iniciales.
2. Mesa de sustrato: arrastrar o doble clic para preparar hasta dos cargas.
3. Esterilizador: cargar material preparado e iniciar manualmente. Reloj sincronizado en sala e interior. Salida de hasta dos cargas.
4. Cabina con guantes: seleccionar reishi o melena, añadir sustrato listo y micelio en cualquier orden y preparar la bolsa. Consume un bote y una bolsa. Limpieza opcional de cabina y riesgo propio por uso.
5. Carrito de salida conectado con la espera de las cámaras existentes. Las bolsas conservan especie, perfil y riesgo; se colocan manualmente en los estantes.

No se automatizó la preparación inicial. Cordyceps sigue solo en inventario. Pleurotus permanece en la ruta de paja. Los tiempos, capacidades y riesgos son reglas simbólicas de juego, no procedimientos reales.

## Tienda
Se conserva arrastre y doble clic. Eliminada la instrucción «Arrastra setas al cliente» del canvas. Flecha inicial amarilla sobre setas que desaparece tras la primera entrega y se recuerda en el navegador.

## Verificación y límites
Sintaxis y pruebas de lógica: consumo único de material, micelio y bolsa; capacidad; inicio manual; transferencia por especie; puertas por clic/E/WASD; arrastre y cierre de guía. Revisión de renders del canvas de oficina, cuarto y cabina. La navegación automática al archivo local fue bloqueada por la política del navegador, por lo que falta la prueba real en navegador/celular.

Las especies nuevas usan todavía el aspecto base de fruto del prototipo; sus sprites propios son una mejora posterior. La partida sigue en memoria y se reinicia al recargar, salvo guías.

Tanda D sigue anotada, sin implementar: burbujas de pedidos, tanque con tamaños 2/4/6, contador por capacidad, caja de pasteurizado en sala e icono de la puerta de cultivo.
