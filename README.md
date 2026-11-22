# Lab BeeFungi

Juego de producción de hongos en pixel art, por **Angel Romo**. Versión pública **1.0.0**.

[Jugar](https://beefungislp-sys.github.io/lab-beefungi/)

## Jugar

Sigue las flechas. Arrastra los materiales o haz doble clic. Cultiva, cosecha y vende para comprar mejoras. Toca el suelo para caminar; en computadora usa WASD y E para entrar o salir. En Opciones están el sonido, la música, Guardar partida y Nueva partida; Créditos muestra la autoría.

Empiezas con Pleurotus, 15 monedas y un kit de insumos. Las mejoras abren el cuarto estéril, Melena de León, Reishi y Cordyceps. La primera cosecha de Cordyceps completa el objetivo principal y abre extracción/envasado; el primer gotero abre química y espirulina. Puedes seguir jugando después del final. Las reglas y tiempos son simbólicos de juego.

Precios de venta por porción de 250 g: Pleurotus 1, Melena 2, Reishi 3 y Cordyceps 3 monedas. Todos los goteros valen 3 por unidad; un matraz produce cuatro. [Balance vigente](outputs/BALANCE-GENERAL-LAB-BEEFUNGI.md).

## Guardar y continuar

La partida se guarda automáticamente en el navegador y puede guardarse manualmente desde Opciones. Recargar ofrece Continuar; Nueva partida pide confirmación. Se conservan la apariencia y el progreso de partidas anteriores.

El guardado es local al navegador y dispositivo: no hay sincronización ni producción fuera de línea. Borrar los datos del sitio elimina el guardado. El respaldo de GitHub conserva el proyecto, no las partidas personales. [Detalles del guardado](outputs/TANDA-GUARDAR-Y-CONTINUAR.md).

## Desarrollo y publicación

La fuente única es `outputs/BEEFUNGI-MESA-PAJA.html`. No editar `docs/` ni `dist/`: se generan. El juego funciona sin dependencias externas en ejecución. Las herramientas requieren Node y `npm ci`.

```sh
npm test
npm run build
```

El build prepara `dist/` y `docs/`, incluidos los audios y `version.json` con versión, canal público y hashes de fuente/audio. GitHub Pages publica exclusivamente `docs/` desde `main`. Después de cada tanda autorizada, verificar las pruebas, revisar el diff y la nota, subir y comparar el `version.json` publicado. La rutina PowerShell es `scripts/publicar-tanda.ps1 -Tanda <nombre>`.

La versión pública no ofrece Tester, modo prueba, regalos de recursos ni el truco hericium. Las regresiones habilitan herramientas internas explícitamente en su entorno aislado; la selección de personaje y el guardado se prueban también con esas herramientas desactivadas. No hay un interruptor público ni parámetro de URL para activarlas.

`npm run format` ordena la fuente y `npm run catalog` regenera el [catálogo gráfico](outputs/CATALOGO-GRAFICO.md). La [guía de arte](outputs/GUIA-REMODELACION-ARTE.md) documenta las capas y sprites compartidos. Las notas de tandas permanecen en `outputs/` como historial; no describen siempre el balance o la interfaz vigentes.

El usuario confirmó completadas satisfactoriamente las pruebas manuales de celular y del final/logros. La música tiene fades de entrada/salida y cinco segundos de silencio entre las tres canciones. Los personajes miran siempre de frente y los dos asistentes comparten el estilo detallado del protagonista.

[Nota de versión pública](outputs/TANDA-VERSION-PUBLICA.md).
