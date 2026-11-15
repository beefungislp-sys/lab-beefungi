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
./scripts/publicar-tanda.ps1 -Tanda E0
```

En GitHub, Pages usa Deploy from a branch: main, carpeta /docs. Las notas de cada tanda están en `outputs/`. El respaldo de código no guarda partidas: recargar reinicia la partida y no hay sincronización de progreso entre celular y computadora.

## Controles

WASD para caminar, E para entrar/salir y cerrar menús. Arrastre o doble clic para materiales y entregas. La interfaz táctil permite navegar por clic y arrastrar; el diseño se revisó en navegador a 390×844 y 844×390; la prueba física completa en otros teléfonos sigue pendiente.

## Estado

Tandas históricas A–D y sesión actual A0, B0, C0, D0, E0, F0, G0, H0, I0, J0, K0 y L0 implementadas y publicadas. E0 añade modelos por especie, cosechas separadas, precios y entregas táctiles. F0 añade tolvas, agua automática, llenadora y asistente de preparación. G0 añade cámaras 4/6/8, control climático de menor duración y venta de composta. H0 añade movimiento al tocar suelo, salida automática de sustrato y llenadora de depósitos 4+4. I0 añade esterilizador 2/4/6, elimina el bloqueo de salida, normaliza el agua al visitar estaciones y ralentiza al asistente con avisos. J0 añade mechero, cabina 3+3 y campana laminar con reserva sin límite de capacidad. K0 añade barras, agua rápida, asistente de laboratorio y cultivo líquido. L0 integra la preparación/esterilización en las estaciones existentes, conserva solo una mesa de agitación y completa Cordyceps hasta cosecha y venta. La progresión definitiva, asistentes de otras zonas, deshidratación y guardado siguen pendientes. Cordyceps se desbloquea como Petri; el líquido maduro permite inocular su sustrato esterilizado y producir bloques y frutos.

Configuración de publicación basada en la documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Enlaces

Juego: https://beefungislp-sys.github.io/lab-beefungi/

Respaldo: https://github.com/beefungislp-sys/lab-beefungi
