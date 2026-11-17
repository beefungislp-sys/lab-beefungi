# Sprite de campana de flujo

`campana-flujo-sprite.png` es un asset de 448 × 296 con alfa, derivado de la referencia aprobada `../referencias/CAMPANA-FLUJO-CONCEPTO.png`. Herramienta: `image_gen` integrada, sin CLI.

Preparación solicitada de pixelización: retirar alfa residual inferior a 32, recortar por alfa visible, reducir con filtro BOX, cuantizar RGB a 192 colores mediante MEDIANCUT sin dithering y conservar el canal alfa separado. Se integra una copia base64 en `../BEEFUNGI-MESA-PAJA.html`; no necesita solicitudes de red. El PNG es el original de trabajo de esta versión pixelizada.

## Prompt final

```text
Use case: precise-object-edit. Extract the LARGE laminar flow workstation from the upper panel of the attached image as a single reusable GAME SPRITE on a truly transparent background. Copy its exact silhouette, perspective, colors, stainless material, fine filter grid, warm light strip, pale cream solid back panel, steel worktop, two legs, crossbrace and feet as closely as possible. This is asset extraction, not a redesign. REMOVE all jars, substrate bags and their reflections, leaving the work surface completely empty. REMOVE the small right cleaning shelf, spray and cloth entirely. REMOVE all walls, tiles, floor, title, framing, bottom thumbnail, labels and background. Preserve ONLY the complete empty hood and its attached steel table/legs. The solid cream backing INSIDE the hood stays opaque; the space underneath the table and outside its silhouette is fully transparent. Maintain front-facing slightly top-down perspective and wide proportions matching the reference. Center tightly with small transparent margins, no text, no floor shadow baked outside the asset, no new objects. Crisp pixel-art material detail faithful to the original.
```
