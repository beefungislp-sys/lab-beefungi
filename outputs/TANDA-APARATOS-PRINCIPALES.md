# Aparatos principales desde referencias

Segunda tanda del plan de cierre. Referencias nuevas del triturador, pasteurizador y llenadora de mezcla guardadas en `referencias/`; prompts en `PROMPTS-APARATOS-PRINCIPALES.md`. Se recrean en código sobre los fondos y muebles aprobados.

- Triturador: tolva abierta, rodillos, motor, ventilas, tornillos y salida. `drawStrawCrusher` comparte dibujo entre módulo y miniatura.
- Pasteurizador: tanque de acero con apertura superior, agua/paja dentro, borde, asas y marcas; conserva geometría creciente de 2/4/6 cargas. `drawPasteurBasin` y `drawLabFaucet` se reutilizan en sala y módulo. La cal descansa en una repisa y el mueble sostiene la base del tanque.
- Llenadora: entradas, acero, paleta, ventana, boquilla y desgaste. `drawMixFiller` comparte su silueta con la miniatura. La paja, el micelio y las bacterias se recortan a una región interior distinta para máquina y bandeja manual.

Se conservan hitboxes, guías, relojes, capacidades, recursos y acciones; las animaciones responden al estado existente. No se añaden procesos ni mejoras de balance. Los objetos de la primera tanda se reutilizan.

Validación y publicación se registran al cerrar esta tanda en el plan de remodelación.

Validación de cierre: 195 grupos de pruebas, dibujo puro y recorte del contenido por modo; build y catálogo regenerados; revisión de 2/6 cargas, mezcla, limpieza, sala y celular horizontal/vertical. Captura local ignorada: `APARATOS-PRINCIPALES-QA.jpg`.
