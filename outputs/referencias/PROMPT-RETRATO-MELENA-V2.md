# Referencia de retrato: Melena de León V2

Herramienta: `image_gen.imagegen`, modalidad integrada (sin CLI ni API key). Referencia para reconstrucción en canvas; el PNG no se carga en el juego.

Salida conservada: `RETRATO-MELENA-V2.png`, RGBA de 1536 × 1024. Se conserva la generación y una edición puntual de transparencia. La referencia conserva un halo suave residual; el dibujante en código lo omite por completo y sólo representa el hongo.

## Prompt de generación exacto

```text
Use case: stylized-concept. Asset type: transparent hero discovery portrait reference for the cozy 16-bit / Game Boy Advance pixel-art game Lab BeeFungi; this reference will be carefully recreated with native canvas code, not loaded as a bitmap at runtime. Generate ONE isolated close-up of a beautiful natural Hericium erinaceus (lion's mane) mushroom cluster. One substantial asymmetrical central body merges organically with two smaller attached side lobes, sharing a continuous hidden root; absolutely not three equal spherical balls. Rich cascading thin ivory teeth, individually readable tapered hanging strands, layered irregular fringes, dense organic texture and small overlapping tuft structures. Cream warm highlights from upper left, subtle muted sage / warm ochre shadows in deep folds, luminous ivory middle values, restrained thin stepped pixel contours. Silhouette broad and cohesive, fuller at upper center with naturally hanging lobes and staggered tooth tips at bottom. Front view slightly elevated, protagonist composition with a little transparent margin around the whole cluster, no cropping. Elegant detailed hand-crafted pixel illustration, crisp stepped pixels and restrained dithering, coherent with warm cream glass-and-sage laboratory sprites. TRUE transparent alpha background outside the mushroom; no backdrop, no ground, no floor, no cast shadow floating below, no glow cloud, no border, no frame, no text, no labels, no pots, no bags, no substrate, no accessories. No photorealism, no 3D render, no smooth vector cartoon, no uniform hair loops, no detached mushroom balls.
```

## Prompt de edición exacto

```text
Use case: background-extraction. Edit the attached generated lion's mane portrait: preserve the actual mushroom cluster exactly, its silhouette, cascading ivory teeth, cream highlights, organic lobes and pixel art. Remove ONLY the entire hazy warm glow, mist, shadow cloud and any background around and between the mushroom teeth. Make everything outside the mushroom TRUE fully transparent alpha, including all four corners and all clear gaps between the strand tips; no semitransparent aura or rectangular backdrop. Keep the actual fine tooth edges and their natural antialiasing, but no halo. No other changes, no text, no new objects.
```

## Proveniencia

- Generación: `C:/Users/Angel Romo/.codex/generated_images/01a1f125-c61a-7c40-a52d-9d22cc0d97f4/exec-e03ebde6-6150-4771-90fe-f94a16f17cd9.png`.
- Edición seleccionada: `C:/Users/Angel Romo/.codex/generated_images/01a1f125-c61a-7c40-a52d-9d22cc0d97f4/exec-a1a561d5-aeda-4ee9-95c9-1f6a0d92774d.png`.
- No se sustituyó el sprite de Melena usado dentro del mundo; se prepara un dibujante independiente para el retrato de descubrimiento.

## Reconstrucción en código

- Entrega de integración: `work/hero-melena-v2.js`, función `drawDiscoveryLionsMane(x, y, scale = 1)`.
- Plano canónico: 200 × 150. Límites dibujados comprobados: X = 12…186.5; Y = 4…139.5.
- Cuerpo unido, lóbulos secundarios desiguales y 14 capas de dientes con raíz curvada y puntas variables; sin ampliar el sprite del mundo.
- 1217 primitivas en la comprobación focal; sin PNG, fondo, suelo, marco ni halo durante el juego.
- Sintaxis válida, dibujo repetible con `Math.random` prohibido y `save/restore` equilibrados.
- Previsualización focal de geometría en `work/hero-melena-v2-qa.png` (fondo verde de prueba, ajeno al dibujante).

