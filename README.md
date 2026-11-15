# Lab BeeFungi

Prototipo de juego pixel art sobre producción de hongos. Fuente actual: `outputs/BEEFUNGI-MESA-PAJA.html`. Las reglas y tiempos son simbólicos de juego.

## Revisar y publicar

Sin dependencias externas de npm:

```sh
npm test
npm run build
```

El build genera `dist/` y la copia publicable `docs/`, con index.html y version.json. Después de las pruebas locales, GitHub Pages publica `docs/` con cada subida a `main`. Se conserva un enlace estable entre tandas.

En PowerShell, después de terminar y revisar una tanda:

```powershell
./scripts/publicar-tanda.ps1 -Tanda E
```

En GitHub, Pages usa Deploy from a branch: main, carpeta /docs. Las notas de cada tanda están en `outputs/`. El respaldo de código no guarda partidas: recargar reinicia la partida y no hay sincronización de progreso entre celular y computadora.

## Controles

WASD para caminar, E para entrar/salir y cerrar menús. Arrastre o doble clic para materiales y entregas. La interfaz táctil permite navegar por clic y arrastrar; la prueba completa en celular sigue pendiente.

## Estado

Tandas A–D implementadas. Mejoras completas, asistentes, deshidratación, guardado y sprites propios para nuevas especies siguen pendientes.

Configuración de publicación basada en la documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
