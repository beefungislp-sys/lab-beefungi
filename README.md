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

WASD para caminar, E para entrar/salir y cerrar menús. Arrastre o doble clic para materiales y entregas. La interfaz táctil permite navegar por clic y arrastrar; el diseño se revisó en navegador a 390×844 y 844×390; la prueba física completa en otros teléfonos sigue pendiente.

## Estado

Tandas históricas A–D y sesión actual A0, B0 y C0 implementadas y publicadas. D0 está anotada, sin construir. Mejoras completas, asistentes, deshidratación, guardado y sprites propios para nuevas especies siguen pendientes.

Configuración de publicación basada en la documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Enlaces

Juego: https://beefungislp-sys.github.io/lab-beefungi/

Respaldo: https://github.com/beefungislp-sys/lab-beefungi
