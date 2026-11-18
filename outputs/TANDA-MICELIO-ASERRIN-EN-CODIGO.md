# Frascos de micelio y bolsas de aserrín en código

Continuación visual solicitada, sin nuevo identificador de tanda.

Se adapta la referencia aprobada `referencias/MICELIO-MELENA-ASERRIN-CONCEPTO.png` a los materiales de la campana, conservando sus proporciones y áreas de interacción.

- `drawLaminarOval` construye curvas escalonadas a medio píxel, sin imágenes externas.
- `drawLaminarJar` dibuja hombros y base de vidrio redondeados, tapa crema con acanalado, reflejos y grano cubierto por una trama de micelio blanco. La marca de especie pasa a la tapa y conserva el color del frasco concreto, incluida la animación.
- `drawLaminarBag` dibuja aserrín fino sin colonizar, espacio transparente, filtro claro, sellado térmico, fuelle, pliegues y reflejos. El filtro blanco no representa micelio en el sustrato.
- Los dibujantes se comparten en reservas de la campana, miniatura, iconos de arrastre e inoculación/sellado/salida. Las cabinas anteriores y otros tipos de recipientes mantienen sus dibujos.

## Verificación

181 grupos aprobados, con conservación de especies, consumo único, límite de dos frascos/cuatro bolsas, pureza de render y patrón estático sin bitmap. Arrastre e inoculación revisados en navegador; revisión visual en marcos de 844 × 390 y 390 × 844.

No se modifican recetas, inventarios, tiempos, capacidades, controles, Tester ni desbloqueos. Se regenera el catálogo gráfico y el build desde `outputs/BEEFUNGI-MESA-PAJA.html`; el fork de referencia permanece intacto.
