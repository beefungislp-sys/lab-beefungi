# Lab BeeFungi

Prototipo de juego pixel art sobre producción de hongos. Fuente actual: `outputs/BEEFUNGI-MESA-PAJA.html`. Las reglas y tiempos son simbólicos de juego.

## Revisar y publicar

El juego no requiere dependencias externas en ejecución. Para las herramientas de desarrollo, instalar con `npm ci` (incluye Prettier con versión fijada):

```sh
npm test
npm run build
```

El build genera `dist/` y la copia publicable `docs/`, con index.html y version.json. Después de las pruebas locales, GitHub Pages publica `docs/` con cada subida a `main`. Se conserva un enlace estable entre tandas.

En PowerShell, después de terminar y revisar una tanda:

```powershell
./scripts/publicar-tanda.ps1 -Tanda E0
```

En GitHub, Pages usa Deploy from a branch: main, carpeta /docs. Las notas de cada tanda están en `outputs/`. El respaldo de código no guarda partidas: recargar reinicia la partida y no hay sincronización de progreso entre celular y computadora.

## Controles

WASD para caminar, E para entrar/salir y cerrar menús. Arrastre o doble clic para materiales y entregas. La interfaz táctil permite navegar por clic y arrastrar; el diseño se revisó en navegador a 390×844 y 844×390; la prueba física completa en otros teléfonos sigue pendiente.

## Estado

Tandas históricas A–D y sesión actual A0, B0, C0, D0, E0, F0, G0, H0, I0, J0, K0, L0, A1 y A2 implementadas y publicadas. E0 añade modelos por especie, cosechas separadas, precios y entregas táctiles. F0 añade tolvas, agua automática, llenadora y asistente de preparación. G0 añade cámaras 4/6/8, control climático de menor duración y venta de composta. H0 añade movimiento al tocar suelo, salida automática de sustrato y llenadora de depósitos 4+4. I0 añade esterilizador 2/4/6, elimina el bloqueo de salida, normaliza el agua al visitar estaciones y ralentiza al asistente con avisos. J0 añade mechero, cabina 3+3 y campana laminar con reserva sin límite de capacidad. K0 añade barras, agua rápida, asistente de laboratorio y cultivo líquido. L0 integra la preparación/esterilización en las estaciones existentes, conserva solo una mesa de agitación y completa Cordyceps hasta cosecha y venta. A1 integra selector, Regresar y Retirar dentro del área de juego, renueva los materiales y permite tandas mixtas de madera/Cordyceps con CL separado. A2 permite al ayudante llenar el agua por sí mismo y usar CL maduro directamente desde una mesa de agitación ampliable a seis puestos. La progresión ya está activa en un recorrido gratuito de revisión. Asistentes de otras zonas, deshidratación y guardado siguen pendientes. Cordyceps se desbloquea como Petri; el líquido maduro permite inocular su sustrato esterilizado y producir bloques y frutos.

Configuración de publicación basada en la documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Laboratorio de química

Química A–D: puerta inferior tras cosechar Cordyceps; primero extracción/envasado, y química/espirulina tras producir el primer gotero. Extracción desde 250 g cosechados, envasado de cada matraz en cuatro goteros, sales gratuitas para nutrientes y reactor de espirulina. La tienda reúne setas, goteros por especie y espirulina en una mesa central, con existencias en unidades y monedas al vender; conserva inventarios y precios separados. [Sonidos y avisos](outputs/TANDA-SONIDOS-AVISOS.md) añade dos señales mínimas. [Avisos mínimos](outputs/TANDA-AVISOS-MINIMOS.md) deja sólo un marco rojo sobre el requisito pendiente, sin cartel explicativo. [Tienda visual](outputs/TANDA-TIENDA-VISUAL-UNIFICADA.md) detalla el acomodo sin selector de inventarios. Las notas y verificaciones están en [Química A–D](outputs/QUIMICA-TANDAS.md). Estas letras identifican la expansión química y no cambian los nombres de tandas históricas. [A2 espirulina](outputs/TANDA-A2-ESPIRULINA.md) cambia el reactor por un garrafón de agua automática, mezcla previa e inoculación con un matraz secundario; un matraz madre permite replicar el inóculo con maduración visual por color, en paralelo al cultivo.

## Balance inicial de Pleurotus

[Primera pasada de balance](outputs/BALANCE-PLEUROTUS.md): referencia previa de precios y margen. Temporalmente el juego inicia con compras, mejoras y asistentes gratis para revisar el árbol; los insumos siguen consumiéndose y se piden sin coste. No se habilita el desbloqueo total del prototipo.

## Progresión activa — prueba gratuita

[Documento de progresión](outputs/PROGRESION-LAB-BEEFUNGI.md): condiciones actuales de cada desbloqueo. Pleurotus y mejoras de preparación desde el inicio → primera cosecha/tienda → primera venta/mejoras de cámaras → hito principal/sala estéril, Melena y primer asistente → cosecha Melena/Reishi → árbol estéril completo/Cordyceps, Petri inicial, agitación y segundo asistente → cosecha Cordyceps/victoria y extracción-envasado → primer gotero/mesa de química y espirulina. Sólo aparecen las opciones disponibles; las mejoras se reúnen en un menú superior con contador rojo. La mezcla principal permanece exclusiva de Pleurotus. [Guía del recorrido](outputs/TANDA-GUIA-RECORRIDO.md): una flecha encadena los módulos por primera vez y espera sus desbloqueos. [Nota de la tanda](outputs/TANDA-DESBLOQUEOS-GRATUITOS.md).

## Asistentes y cambios de receta

[Revisión de asistentes](outputs/TANDA-REVISION-ASISTENTES.md): tareas con contexto capturado, cancelación al cambiar de modo, validación antes de consumir y protección de bolsas/carritos/cosechas. Ambos muestran faltantes o pasos manuales pendientes; el CL sigue sin contaminación por ahora.

## Organización y catálogo gráfico

[Catálogo gráfico](outputs/CATALOGO-GRAFICO.md): inventario de estaciones, sprites, interfaz, colores y referencias a líneas de código. `npm run format` ordena la fuente; `npm run catalog` regenera las referencias después de mover código. El archivo HTML continúa como fuente única; no se edita `docs/` a mano. [Iconos de arrastre](outputs/TANDA-ICONOS-ARRASTRE.md): 32 tipos en un catálogo compartido, con tamaño ampliado y desplazamiento para que el dedo no los tape.

## Enlaces

Juego: https://beefungislp-sys.github.io/lab-beefungi/

Respaldo: https://github.com/beefungislp-sys/lab-beefungi

## Primera muestra de arte cálido

[Muestra visual de sala y triturador](outputs/TANDA-MUESTRA-VISUAL-CALIDA.md): primera aplicación del rumbo de 16 bits, con madera, luz de ventana, acero y cestos con fibras. Mundo lógico de 320 × 240 sobre un lienzo doble para detalles más finos; conserva controles, reglas y geometrías. El resto de estaciones mantiene su arte anterior por ahora.

## Continuación del pulido cálido

[Pasteurizado y mezcla](outputs/TANDA-PULIDO-PASTEURIZADO-MEZCLA.md): tanque con nivel de agua y acero detallado, vitrina, bandeja y llenadora renovadas, madera y cestos unificados. Mantiene reglas y zonas de interacción; añade pruebas de dibujo sin efectos sobre la simulación.

## Estilo visual de referencia

[Guía visual](outputs/ESTILO-VISUAL-LAB-BEEFUNGI.md): pixel art cálido, texturas estables, volumen y sombras suaves, con mapa y luz fijos. [Adaptación de electronicwave](outputs/TANDA-TEXTURAS-SOMBRAS-FIJAS.md) documenta lo reutilizado del fork y su aplicación a sala principal, triturador, pasteurizado y mezcla.

## Cámaras con el acabado cálido

[Incubación y fructificación](outputs/TANDA-PULIDO-CAMARAS-CULTIVO.md): vista aérea, estantes de acero, carritos, panel de ambiente y bolsas integrados al estilo de texturas estables y sombras suaves. Conserva colonización, especies y reglas de cultivo.

## Aparición de muebles y tienda

[Muebles progresivos y tienda](outputs/TANDA-MUEBLES-PROGRESIVOS-TIENDA.md): los puestos de cámaras aparecen al comprarlos; las filas ocultas dejan suelo transitable. Agitación, química y espirulina aparecen únicamente cuando corresponde. La tienda usa el acabado cálido, bandejas por producto y un mostrador que crece con las filas de inventario disponibles.

## Truco de revisión

[HERICIUM](outputs/TANDA-TRUCO-HERICIUM.md): escribir `hericium` con el juego enfocado abre todas las áreas y añade 1 000 000 de monedas, una vez por partida. Conserva los procesos y recursos existentes; no simula cosechas ni compra mejoras.

## Cuarto estéril con el acabado cálido

[Pulido del cuarto estéril](outputs/TANDA-PULIDO-CUARTO-ESTERIL.md): sala, mesas inoxidables, llenadora, olla, cabina/campana y agitadores con textura, reflejos y sombras suaves. Conserva las recetas, las animaciones y la aparición de agitación por desbloqueo.

## Proporciones de mesas estériles

[Acomodo y proporciones](outputs/TANDA-PROPORCIONES-MESAS-ESTERILES.md): cubiertas ajustadas a sus aparatos, reservas apoyadas, llave centrada y agitadores proporcionados en uno o dos niveles. Incluye revisión en tamaños de celular y conserva las zonas de interacción.

## Cuarto de química con el acabado cálido

[Pulido de química](outputs/TANDA-PULIDO-CUARTO-QUIMICA.md): sala, destilador, envasadora, reactivos y reactor de espirulina integrados al estilo del laboratorio. Proporciones, soportes, reflejos y etiquetas ajustados, conservando procesos y controles.

## Campana basada en la referencia

[Campana abierta](outputs/TANDA-CAMPANA-REFERENCIA.md): filtro delgado, luz cálida, mesa con profundidad y patas propias, compartidos por sus tres medios y la miniatura. Las [referencias de arte](outputs/referencias/README.md) incluyen también una propuesta nueva para el esterilizador.


## Campana con sprite de la referencia

[Sprite y mejoras iniciales](outputs/TANDA-SPRITE-CAMPANA-MEJORAS-INICIALES.md): campana transparente pixelizada a partir de la imagen aprobada, con materiales interactivos separados. Triturador, pasteurizado y mezcla ofrecen sus mejoras desde el inicio; se conserva el hito completo de sala estéril.

## Tester visible

[Botón Tester global](outputs/TANDA-BOTON-TESTER-GLOBAL.md): disponible arriba en cada módulo. Abre todas las áreas y especies, instala las mejoras y añade un millón de monedas. Conserva los procesos; los asistentes se contratan manualmente. Recargar vuelve al arranque normal porque la partida sigue en memoria.

## Escenario de campana por capas

[Campana, ambiente y materiales](outputs/TANDA-CAMPANA-CAPAS.md): fondo fijo dibujado en código, suelo en perspectiva, campana independiente y frascos/bolsas renovados que comparten dibujo con sus iconos de arrastre y animaciones.

## Campana íntegramente en código

[Campana procedural](outputs/TANDA-CAMPANA-EN-CODIGO.md): sustituye el sprite por planos de acero, reflejos, textura cepillada, filtro, luz cálida y sombras de contacto dibujados en canvas. Vista cercana y miniatura comparten componentes; la guía visual y el catálogo quedan actualizados.
