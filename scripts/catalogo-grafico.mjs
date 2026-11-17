import { readFile, writeFile } from 'node:fs/promises';
const sourcePath = 'outputs/BEEFUNGI-MESA-PAJA.html';
const source = await readFile(sourcePath, 'utf8');
const lineAt = index => source.slice(0, index).split('\n').length;
const link = (name, index) => `[\`${name}\`](https://github.com/beefungislp-sys/lab-beefungi/blob/main/${sourcePath}#L${lineAt(index)})`;
const locate = name => {
  const match = new RegExp(`\\b(?:function\\s+${name}\\s*\\(|${name}\\s*=\\s*function\\s*\\()`).exec(source);
  if (!match) throw new Error('Referencia gráfica ausente: ' + name);
  return link(name, match.index);
};
const scenes = [
  ['Sala principal', 'drawBaseScene', 'Suelo, paredes, puertas, estaciones, cestos, protagonista, asistentes y relojes'],
  ['Triturador', 'drawBaseScene', 'Pacas, tolva, motor, cesto de paja desordenada, cola, selección y carga'],
  ['Mezcla', 'drawMix', 'Vitrina, micelios, cesto, bandeja/llenadora, bacterias, limpieza, bolsa y salida'],
  ['Pasteurizado', 'drawPasteur', 'Tanque por capacidad, agua, llave, cal, paja, reserva, guía y reloj'],
  ['Oficina', 'drawWarehouse', 'Inventario, ficha de especie, colores y acceso a pedidos'],
  ['Cultivo: sala', 'drawCultivation', 'Estantes, división de áreas, puerta y personaje'],
  ['Incubación', 'drawIncubation', 'Bolsas, colonización blanca, manchas verdes, espacios, clima y carritos'],
  ['Fructificación', 'drawFruiting', 'Frutos por especie, flushes, cosecha, composta, espacios y clima'],
  ['Cuarto estéril', 'drawSterileRoom', 'Mesas de acero, puertas, agitación y personaje'],
  ['Preparación estéril', 'drawWoodPrepStation', 'Aserrín/arroz, recipientes, nutrientes, mezcla, llave, llenadora y depósitos'],
  ['Medios especiales', 'drawSpecialPrep', 'Frascos, CL y sustrato Cordyceps; mezcla y expansión'],
  ['Esterilizador', 'drawWoodSterilizer', 'Pool preparado, olla, tapa, agua, vapor y reloj'],
  ['Inoculación', 'drawGloveStation', 'Cabina/campana, guantes, bolsas, micelio, mechero, limpieza y animación'],
  ['Agitación', 'drawAgitationStation', 'Frascos CL, puestos, progreso, crecimiento y reservas'],
  ['Química: sala', 'drawChemistry', 'Cuatro puestos, aparatos en miniatura, puerta, personaje y relojes'],
  ['Extracción', 'drawExtraction', 'Especie, hongos, molino, material molido, destilador, mechero y matraz'],
  ['Envasado', 'drawBottling', 'Matraces, llenadora y cuatro goteros con llenado'],
  ['Nutrientes', 'drawNutrients', 'Selector de receta, sales A/B, recipiente, mezcla y existencias'],
  ['Espirulina', 'drawSpirulina', 'Madre/inóculo, vertido, maduración por color, garrafón, agua, luz y burbujas'],
  ['Tienda', 'drawShop', 'Mesa, nueve productos, unidades, clientes, pedidos, monedas y salida'],
  ['Avisos', 'drawSignalFeedback', 'Marcos temporales sobre requisitos; sin cartel explicativo'],
];
const functions = [...source.matchAll(/\bfunction\s+(draw\w+|box|text|smallText|bale|bench|jar|roomBase|scene)\s*\(/g)];
const native = [...source.slice(0, source.indexOf('<script>')).matchAll(/<([a-z][\w-]*)\b[^>]*\bid="([^"]+)"/g)];
const colors = [...new Set(source.match(/#[\da-fA-F]{6}\b/g))].sort();
const dragIcons = [...source.matchAll(/^\s+(\w+): dragIcon\(\s*"([^"\n]+)"/gm)];
if (!dragIcons.length) throw new Error('Catálogo de arrastres ausente');
const doc = `# Catálogo gráfico y mapa del código

Generado con \`npm run catalog\` desde la fuente única. Los enlaces apuntan a las líneas actuales del código en GitHub; regenerar después de formatear o mover funciones. No editar \`docs/\` ni \`dist/\` a mano.

## Cómo abordar el pulido visual

1. Elegir una estación de la tabla y revisar su función de dibujo.
2. Revisar también sus geometrías de interacción y marcos de faltantes: dibujo y zona activa deben corresponder.
3. Probar estados vacío, parcial, trabajando, listo, falta de material, mejora y arrastre.
4. Verificar en horizontal/vertical, generar catálogo y ejecutar pruebas/build.

El juego dibuja sus sprites en canvas de 320 × 240 mediante código; no usa una colección externa de imágenes para estos objetos. Las capturas de QA no son recursos de juego.

## Estaciones y elementos

| Área | Entrada gráfica | Elementos |
|---|---|---|
${scenes.map(([area, fn, elements]) => `| ${area} | ${locate(fn)} | ${elements} |`).join('\n')}

## Todos los dibujantes y sprites compartidos

Incluye protagonistas/batas/asistentes, especies, recipientes, muebles, líquidos, bacterias, relojes, monedas, marcos, indicadores y ayudas. Una función puede componer varias piezas; se enumera su punto de entrada, no cada rectángulo/píxel individual.

${functions.map(match => `- ${link(match[1], match.index)}`).join('\n')}

## Interfaz nativa: botones, paneles y contadores

| Elemento | Tipo | Código |
|---|---|---|
${native.map(match => `| ${match[2]} | ${match[1]} | ${link(match[2], match.index)} |`).join('\n')}

Los estilos están en el bloque \`<style>\`: marco de juego, barra superior, botones, pedidos/tablas, diálogos, Ayuda y reglas móviles. Los controles de prueba se mantienen separados del modo normal.

## Interfaz generada desde JavaScript

Pedidos y sus botones de compra/especie: ${locate('renderOrders')}. Inventario de micelios: ${locate('openMyceliumInventory')}. Botones de mejoras: ${locate('updateUpgradeControls')}. Economía/saldo y modo prueba: ${locate('updateEconomyControls')} y ${locate('updateWallet')}. Controles del cuarto estéril: ${locate('updateK0Controls')}. Entregas de tienda: ${locate('updateShopControls')}. Preferencia de sonido: ${locate('updateSoundButton')}. Avisos de desbloqueo: ${locate('renderUnlockNotice')}. Visibilidad del recorrido: ${locate('updateProgressionControls')} y ${locate('refreshProgression')}. Flecha encadenada: ${locate('drawRouteGuide')}, ${locate('routeGuideTarget')} y ${locate('currentRouteStep')}.

## Contrato de interacción

| Acción | Interacción |
|---|---|
| Botones, selectores y puertas | Un clic/toque |
| Materiales y recipientes | Arrastrar y soltar; doble clic equivalente cuando la estación lo admite |
| Clientes | Arrastre del producto, toque al pedido/cliente o botón Entregar |
| Suelo | Caminar por clic, con menor prioridad que módulos/clientes; WASD alternativo |
| Entrar/salir y cerrar menús | E; Regresar nativo |
| Llaves manuales | Mantener pulsado; las automáticas conservan su comportamiento por estación |

Puntos comunes: ${locate('beginDrag')}, ${locate('updateDrag')}, ${locate('point')}, ${locate('drawCanvasButton')}, ${locate('playerAction')}. Captura de puntero y umbral de cinco píxeles se comparten. Soltar fuera del destino no consume el material. Cancelar no deja un arrastre activo. No se convierte una entrega táctil en un doble clic duplicado.

Geometrías a revisar junto al dibujo: \`mixBasket\`, \`jarCase\`, \`mixTray\`, \`bagSlot\`, \`pasteurTankRect\`, \`incSlots\`, \`woodStations\`, \`preparedPoolCards\`, \`gloveRect\`, \`chemistryBenches\`, \`extractionRects\`, \`nutrientRects\`, \`spirulinaRects\`, \`shopInventoryCards\` y \`missingItemRects\`.

## Iconos de cada tipo de arrastre

${dragIcons.length} tipos explícitos en un único catálogo. Render común: ${locate('drawDragPreview')}; tamaño, desplazamiento para dedo y límites: ${locate('dragPreviewLayout')}. Los módulos ya no dibujan vistas previas por separado.

| Tipo de arrastre | Icono | Código |
|---|---|---|
${dragIcons.map(match => `| \`${match[1]}\` | ${match[2]} | ${link(match[1], match.index)} |`).join('\n')}

En celular/lápiz la tarjeta intenta medir 76 píxeles CSS y queda separada 52 píxeles del dedo; si falta espacio arriba, pasa al lado y se mantiene dentro del canvas. Se conserva un mínimo de escala para que los sprites aumenten respecto al dibujo anterior. El marcador amarillo pequeño sigue la posición real de entrega. La bolsa vacía sigue vacía, y la cosecha mueve hongos; al llevar a composta se ve el bloque.

## Paleta actual

${colors.length} colores hexadecimales encontrados en fuente/estilos. Son valores existentes, no una nueva paleta aprobada. La futura pasada puede agruparlos en tokens antes de cambiar colores.

${colors.map(color => `\`${color}\``).join(' · ')}

## Base de organización y estado actual

- Fuente formateada en HTML, CSS y JavaScript legibles; se conserva como archivo único.
- Inicio y movimiento de arrastre centralizados, usados por todas las estaciones que arrastran materiales.
- Botón canvas con un nombre compartido; botones nativos conservan su estilo común.
- Tienda con un renderizador vigente y un único actualizador de controles para los tres productos.
- Retirados renderizadores, selectores y manejadores de la antigua tienda por páginas, sus tipos de arrastre sin productores y estado sin referencias.
- No se borran adaptadores activos sólo por parecer antiguos: siguen existiendo capas de eventos en otros módulos. Su migración completa requiere otra refactorización por estación, con las regresiones existentes.
- La progresión activa oculta puertas, especies y materiales futuros. Las condiciones están centralizadas en la sección PROGRESION; el recorrido actual es gratuito para revisar sus hitos.
`;
await writeFile('outputs/CATALOGO-GRAFICO.md', doc, 'utf8');
console.log(`Catálogo: ${scenes.length} áreas, ${functions.length} dibujantes, ${native.length} elementos nativos.`);
