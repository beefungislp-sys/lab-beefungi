# Auditoría de assets, arrastres libres, Petri y limpieza

## Inventario antes de cambiar

La [auditoría](AUDITORIA-ASSETS-REMODELACION.md) enumera 32 tipos de arrastre y las familias gráficas de los módulos. Detectó 17 tarjetas opacas pendientes y 15 iconos ya libres de ellas. Conserva ese diagnóstico inicial, distingue superficies del objeto de fondos del cuarto y registra funciones, referencias y próximas tandas descriptivas.

## Integración

- `dragIcon` declara sprites libres por defecto. `drawDragPreview` deja de pintar los dos rectángulos de fondo; los 32 tipos conservan escala, centro del mouse, separación táctil y destino real.
- El Petri se genera como referencia transparente y se recrea en `drawPetri`: vidrio oval bajo, doble borde de tapa, agar ámbar y colonia radial blanca. Mantiene su firma y contorno de 29 × 14, compartido por reserva, arrastre y animación.
- Limpieza sigue el mismo método: referencia transparente, spray redondeado con nivel, gatillo crema y paño plegado en código. `drawInoculationCleaning` delega en `drawCleaningKit`, compartiendo aspecto con mezcla y ambos arrastres.
- No se cambian recetas, consumos, tiempos, desbloqueos ni zonas de recepción. No se cargan PNG en el juego: las imágenes archivadas son referencias.
- Auditoría, Petri y limpieza se delegaron por archivo/función; la integración, renderizador común y validación se cerraron en el hilo principal.

Referencias y prompts: `referencias/PETRI-MICELIO-CONCEPTO.png`, `referencias/KIT-LIMPIEZA-CONCEPTO.png` y [PROMPTS-PETRI-LIMPIEZA.md](referencias/PROMPTS-PETRI-LIMPIEZA.md). Se usó la herramienta integrada image_gen y se comprobó el canal alfa de ambas.

## Comprobación

- 191 grupos de pruebas aprobados: los 32 tipos sin fondo en mouse, touch y lápiz; posición real preservada; dibujo sin consumo; kit compartido; Petri determinista y dentro del contorno.
- Galería en navegador de los 32 sprites sobre crema y azul, sin tarjeta accidental.
- Arrastre real de limpieza sobre la mezcladora: elimina las bacterias. Arrastre del Petri a la campana: consume una placa y un frasco e inicia la animación con el nuevo dibujo.
- Revisión de limpieza y Petri en marcos de celular horizontal y vertical.
- Catálogo gráfico y build regenerados.

Capturas locales de QA excluidas del respaldo: `AUDITORIA-32-ARRASTRES-QA.jpg`, `PETRI-LIMPIEZA-MOVIL-QA.jpg` y `PETRI-EN-CODIGO-QA.jpg`.

## Siguientes familias

El diagnóstico no marca todo el juego como remodelado por retirar tarjetas. Quedan propuestas: unificar el micelio heredado de mezcla manteniendo Pleurotus explícito; compartir cal y molido entre módulo/arrastre; después cristalería de extracción y envasado, sales/nutrientes y espirulina. Reutilizar referencias ya aprobadas antes de generar imágenes adicionales.
