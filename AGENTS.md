# Lab BeeFungi

El juego actual es `outputs/BEEFUNGI-MESA-PAJA.html`. Mantenerlo como fuente única; `dist/` y `docs/` se generan. No editar el prototipo Pocket salvo que se solicite.

## Cierre de cada tanda

El usuario autorizó respaldar en GitHub y actualizar la página después de cada tanda terminada. Al finalizar cambios solicitados:
1. Ejecutar `npm test` y `npm run build`.
2. Revisar los cambios y actualizar la nota de la tanda.
3. Guardar y subir a `main` con `scripts/publicar-tanda.ps1 -Tanda <nombre>`, o git equivalente. Nunca subir credenciales, archivos .env, ni archivos ajenos al proyecto.
4. Verificar que GitHub Pages publique correctamente. Confirmar la versión publicada con `version.json` antes de afirmar que está en línea.
5. Entregar el enlace estable de la página. Si falla publicación o autenticación, informar el bloqueo sin afirmar despliegue exitoso.

GitHub Pages sirve exclusivamente `docs/`, generado por el build, con el juego como `index.html`. El repositorio respalda fuente, pruebas y notas; los renders de QA y temporales se ignoran.

La partida se guarda localmente en el navegador (esquema versionado y respaldo). No hay sincronización entre dispositivos ni progreso fuera de línea. El modo de prueba y los trucos no reemplazan una partida real.

## Nombres de tandas

El formato actual es letra + número de sesión, comenzando por A0. Registrar el identificador confirmado por el usuario en la nota de la tanda y en el commit. Mantener A–D anteriores como historial. No renombrar notas históricas ni inventar un cambio de sesión.
