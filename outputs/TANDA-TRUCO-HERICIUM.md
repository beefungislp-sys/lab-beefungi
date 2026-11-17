# Truco HERICIUM

## Uso

Con el juego enfocado, escribir `hericium`, sin Enter. Acepta mayúsculas y minúsculas. Hay hasta cuatro segundos entre letras. El premio se activa una vez por partida en memoria; recargar inicia otra partida como antes.

## Efecto

- Abre tienda, cuarto estéril, agitación/cultivo líquido, extracción/envasado, mesa de química y espirulina.
- Habilita las especies y medios ligados a esos desbloqueos. Si Cordyceps seguía cerrado, concede su placa Petri inicial.
- Añade 1 000 000 de monedas al saldo existente.
- Muestra un único aviso de activación.
- Conserva recursos, bolsas, procesos y mejoras ya compradas. No fabrica cosechas ni marca el recorrido como completado; las mejoras conservan sus condiciones y el estado actual.

## Controles

El reconocedor consume la secuencia para que su E no entre o salga de una estación. Ignora escritura en campos editables, composición de texto, combinaciones con Ctrl/Alt/Meta y repetición al mantener teclas. Las secuencias erróneas o vencidas no activan el truco. Volver a escribirlo no duplica el premio.

## Validación

- `npm test`: 175 grupos, incluidos acceso completo, dinero añadido una vez, placa inicial, conservación de la partida y entradas que no deben activarlo.
- Navegador desde partida nueva: escritura con eventos de teclado, saldo de 6 a 1 000 006, aviso y puertas disponibles. Captura QA local fuera de la publicación.
- Catálogo y build regenerados desde la fuente única. Sin persistencia entre recargas o dispositivos.
