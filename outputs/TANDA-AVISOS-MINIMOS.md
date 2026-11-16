# Avisos mínimos — marco sobre el requisito pendiente

Continuación solicitada después de sonidos y tienda. No se asignó un identificador nuevo; no se renombra el historial.

- Se elimina el cartel explicativo emergente. El aviso queda como marco rojo temporal y el sonido existente; se conserva el contador rojo de solución en espirulina.
- El marco usa la geometría del requisito que falta, no la posición del dedo o del material arrastrado.
- En sustrato manual, aserrín o nutrientes sin recipiente remarcan las bolsas/frascos. En la llenadora se pueden seguir almacenando ingredientes sin bolsa, como antes.
- En mezcla manual o automática, se remarcan paja, micelio, bolsas o limpieza según el faltante. Si faltan paja y micelio, se señalan ambos. La vitrina vacía también genera el aviso.
- En envasado, tocar el matraz sin extracto emite el sonido y marca el matraz, incluso cuando no se puede iniciar un arrastre. No consume ni crea materiales. El gesto repetido muy rápido no duplica el sonido.
- Se conservan sonidos de finalización, volúmenes, controles y producción. No se amplía la mecánica de extracción.

## Validación

`npm test`: 114 grupos correctos. Incluyen marcos por requisito, prioridad del recipiente, compatibilidad con llenadora, ausencia del cartel, caducidad del marco, envasado vacío y envasado normal.

`npm run build`: correcto; `docs/` y `dist/` se generan desde la fuente única.

Revisión visual en navegador a 844 × 390: aserrín sin bolsa marca las bolsas; paja inexistente en mezcla marca el cesto; envasado sin extracto marca el matraz. Sin cartel en los tres casos y sin errores de consola. Capturas locales de QA ignoradas por git. No se verificó la salida física de audio en el dispositivo del usuario.

La partida sigue solamente en memoria.
