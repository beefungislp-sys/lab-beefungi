# Referencias de estaciones estériles

- `CAMPANA-FLUJO-CONCEPTO.png`: referencia aprobada por el usuario y adaptada al canvas del juego.
- `ESTERILIZADOR-CONCEPTO.png`: propuesta inicial del esterilizador, conservada como historial.
- `MICELIO-MELENA-ASERRIN-CONCEPTO.png`: referencia aprobada de frascos colonizados y bolsas esterilizadas sin inocular, adaptada a los dibujantes de la campana.

Las referencias se generaron con la herramienta integrada `image_gen`, sin CLI. Son referencias de arte, no instrucciones técnicas de laboratorio. Se preservan los originales generados.

## Mezcladora y esterilizador: referencias actuales

- `MEZCLADORA-SUSTRATO-CONCEPTO.png`: tolvas transparentes, cámara con paleta y plataforma para bolsas; adaptada al aparato de sustrato en código.
- `ESTERILIZADOR-MESA-CONCEPTO.png`: cilindro con tapa abatible, canastilla y manómetro; adaptada al esterilizador en código.
- [Prompts de ambas imágenes](PROMPTS-MEZCLADORA-ESTERILIZADOR.md).

Se conserva el fondo ya aprobado del juego. Las imágenes sirven para proporciones y materiales; el juego no las carga como sprites.

## Mesa de acero reutilizable

`MESA-ACERO-BASE-CONCEPTO.png`: referencia de cubierta, faldón, cuatro patas, pies y travesaños; adaptada al componente compartido `drawStainlessTable` para mesas de producción. [Prompt original](PROMPT-MESA-ACERO-BASE.md).

## Estante y assets de agitación

- `ESTANTE-AGITACION-CONCEPTO.png`: bastidor único de dos niveles y seis dispositivos.
- `AGITADOR-MAGNETICO-CONCEPTO.png`: agitador aislado con plato, perilla y luz; transparente.
- `FRASCOS-CL-ESTADOS-CONCEPTO.png`: cuatro estados del mismo frasco, incluido vacío; transparente.

Adaptados a dibujantes compartidos en código. [Prompts de generación](PROMPTS-ESTANTE-AGITACION.md).

## Cámaras y especies

- `INCUBACION-ESTANTES-CONCEPTO.png`: estantes abiertos, colonización y carritos.
- `FRUCTIFICACION-ESTANTES-CONCEPTO.png`: bloques de cuatro especies y carritos de entrada, cosecha y composta.
- `BOLSAS-COLONIZACION-CONCEPTO.png`: filtro, cierre, textura y blanqueamiento progresivo; transparente.
- `PLEUROTUS-SPRITE-CONCEPTO.png`: abanicos de ostra; transparente.
- `MELENA-SPRITE-CONCEPTO.png`: lóbulos con hebras colgantes; transparente.
- `REISHI-SPRITE-CONCEPTO.png`: abanicos rojos con bandas; transparente.
- `CORDYCEPS-FRASCO-CONCEPTO.png`: arroz colonizado y frutos naranjas; transparente.

Adaptadas al juego en código, conservando los fondos de las cámaras. [Prompts de las siete imágenes](PROMPTS-CAMARAS-ESPECIES.md).

## Tienda por capas

- `TIENDA-MOSTRADOR-CONCEPTO.png`: composición general aprobada; [prompt](PROMPT-TIENDA-MOSTRADOR.md).
- `TIENDA-FONDO-CAPA-CONCEPTO.png`: arquitectura y ambiente vacío.
- `TIENDA-MOSTRADOR-CAPA-CONCEPTO.png`: mostrador de madera con cubierta clara.
- `TIENDA-ESTANTE-CAPA-CONCEPTO.png`: estante compacto.
- `TIENDA-CUADRO-CAPA-CONCEPTO.png`: lámina enmarcada de cuatro especies.
- `TIENDA-PLANTA-CAPA-CONCEPTO.png`: planta decorativa.
- `TIENDA-PERSONAJES-CAPA-CONCEPTO.png`: protagonista y tres clientes.

Recreadas con dibujantes separados en el canvas. [Prompts de las seis capas](PROMPTS-TIENDA-CAPAS.md).

## Prompt final del esterilizador

```text
Use case: stylized-concept. Generate ONE new visual inspiration image for the pressure sterilizer station in the game Lab BeeFungi. The attached image is the APPROVED STYLE REFERENCE for the laminar flow hood; design a DIFFERENT station, the sterilizer, coherent with that image. Cozy crisp 16-bit pixel art, cream upper wall, sage tiled room, blue-green stainless steel, warm fixed light, honey trim, restrained texture and contact shadows, no photorealistic 3D. Landscape game-station concept. A large central stainless pressure cooker/autoclave with stepped rounded pixel silhouette sits securely on a sturdy proportional steel laboratory bench with visible legs. Beautiful curved metal highlights, two dark insulated side handles, thick removable lid, readable small round pressure gauge and valve. In the primary large panel show the pot OPEN, lid lifted and visibly resting securely on a dedicated stand to the right, empty visible basket inside ready for two sealed transparent bags of tan fibrous substrate. Small faucet directly above the pot, prominent red handle. On a narrow left steel cart/shelf are two sealed prepared substrate bags and two glass nutrient jars, organized with generous space. Clean worktop, no floating objects. A small bottom strip shows TWO small detail states of the SAME cooker: closed lid with small warm steam puffs and a circular process clock, then open with ready sterilized bags. This is a visual game mockup to later recreate in code; do not introduce extra machines, recipes or controls. One restrained pixel heading exactly 'ESTERILIZADOR'. No other words or numbers, no explanatory callouts, no chemical hazard symbols, no flames, no watermarks. Keep a simple attractive silhouette readable on mobile, same materials and palette as the approved hood.
```

