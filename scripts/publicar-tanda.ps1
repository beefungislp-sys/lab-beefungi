param([Parameter(Mandatory=$true)][string]$Tanda)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
$gitArgs = @('-c', ('safe.directory=' + $PWD.Path))
& npm test
if ($LASTEXITCODE -ne 0) { throw 'Las pruebas fallaron. No se publica.' }
& npm run build
if ($LASTEXITCODE -ne 0) { throw 'La preparación falló. No se publica.' }
& git @gitArgs add -- outputs tests scripts assets docs README.md AGENTS.md .gitignore package.json package-lock.json
if ($LASTEXITCODE -ne 0) { throw 'No se pudo preparar el respaldo.' }
& git @gitArgs diff --cached --quiet
if ($LASTEXITCODE -eq 1) {
  & git @gitArgs commit -m "Tanda $Tanda"
  if ($LASTEXITCODE -ne 0) { throw 'No se pudo guardar la tanda.' }
} elseif ($LASTEXITCODE -ne 0) { throw 'No se pudo revisar el respaldo.' }
& git @gitArgs push origin main
if ($LASTEXITCODE -ne 0) { throw 'No se pudo subir a GitHub.' }
Write-Output 'Tanda subida. GitHub Pages publicará la página automáticamente desde docs.'
