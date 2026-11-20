# Primera pasada de balance — Pleurotus

Objetivo confirmado: progreso gradual, agradable y sencillo, sin saltos enormes de dinero ni dificultad excesiva. Incluye compra de insumos. El usuario no asignó un nuevo identificador de tanda.

## Arranque y compra

La partida normal empieza con **6 monedas** y el kit existente: 3 pacas, 6 micelios, 6 bolsas, 2 cal y 2 limpiezas. Se añade un saldo compacto dentro de la barra del juego. Comprar sigue siendo un clic por unidad.

| Insumo | Precio por unidad |
|---|---:|
| Paca de paja, produce 2 cargas | 1 |
| Micelio de Pleurotus | 1 |
| Bolsa | 0,5 |
| Cal para una tanda | 0,5 |
| Limpieza | 0,5 |

Los otros insumos mantienen un precio provisional de 1. Los pedidos descuentan dinero real y se bloquean cuando no alcanza; también se valida el saldo al recibir el clic, sin inventario gratis ni saldo negativo. La compra de micelio conserva su especie y reserva.

## Mejoras

Disponibles después de la primera venta válida. Los importes son pequeños y cada etapa se compra por separado. No se cobra por mejoras máximas, ocupadas o bloqueadas.

| Estación | Etapas y coste |
|---|---|
| Trituradora | Tolva 3 pacas: 3; tolva 4 y cesto 12: 5 |
| Pasteurizado | 4 cargas: 3; 6 cargas: 5; agua automática: 4 |
| Mezcla | Llenadora automática: 6 |
| Incubación | 6 espacios: 5; 8 espacios: 7; control −10% tiempo: 8 |
| Fructificación | 6 espacios: 5; 8 espacios: 7; control −10% tiempo: 8 |

El árbol principal cuesta **26 monedas** en total. Se conserva el asistente de preparación: se habilita al completar los tres módulos, cuesta 5 y consume 0,25 cada 30 segundos; se pausa sin saldo. Las cámaras comparten mejoras con otras especies, pero este balance se calibra con Pleurotus.

Los tiempos base permanecen: trituración 3 s, pasteurizado 10 s, llenado 2,5 s, incubación óptima 30 s y fructificación óptima 35 s por flush. No se añadieron esperas largas.

## Venta y margen

Setas: 1 moneda por unidad de 250 g; composta: 1 moneda. Se conservan los tres flushes de 500/300/150 g y el riesgo de limpieza existente.

El gotero de Pleurotus pasa de su precio de prueba a **0,5 monedas**: un matraz sigue rindiendo cuatro goteros. Extraer una unidad de setas aumenta su valor de 1 a 2 monedas, en lugar de multiplicarlo por ocho. Los precios de los otros extractos siguen provisionales.

Simulación con dos bloques sanos, ambiente óptimo, compra completa desde cero y sin ayudante:

| Concepto | Monedas |
|---|---:|
| Saldo inicial | 6 |
| Insumos para dos bloques, incluida una limpieza | −5 |
| Venta de 7 unidades de setas | +7 |
| Dos compostas | +2 |
| Saldo final | **10** |
| Recomprar la misma tanda | −5 |
| Saldo tras reponer | **5** |

Quedan además 150 g de setas (0,6 unidades) que se suman a futuras cosechas. Es un escenario de comprobación, no una garantía de rendimiento: contaminación, ambiente, momento de compra y ventas cambian el resultado. El margen esperado base con mesa limpia y ambiente óptimo es cercano a 2 monedas por bloque, incluyendo composta y costes proporcionales de insumos. No se añade deuda ni otro sistema económico.

## Partida normal y modo prueba

Ayuda contiene **Modo prueba**, apagado al abrir una partida. Sólo al activarlo aparecen reposiciones, saldo de prueba y desbloqueo completo, y compras/mejoras de prueba sin coste. No se conserva ese modo al recargar.

Las mejoras del cuarto estéril/agitación todavía no tienen un balance definitivo y permanecen en modo prueba. Sus procesos manuales siguen disponibles. El asistente de laboratorio y las demás especies no se recalibraron en esta tanda.

## Verificación

123 grupos de pruebas. Las pruebas históricas de mecánicas se ejecutan con herramientas de prueba explícitas; las nuevas pruebas de balance arrancan con la configuración real, sin ese modo. Incluyen compras, saldo insuficiente, especies, primera venta de setas o goteros, costes por etapa, asistentes, exclusión de herramientas gratuitas y la simulación completa desde compras hasta producción, tres cosechas, ventas y reposición de dos bloques.

Build y revisión de diff. Navegador en formato móvil vertical: precios compactos, saldo 6 → 2,5 al comprar los cinco insumos, existencias correctas, saldo cero y pedidos deshabilitados, mejoras pendientes de primera venta y herramientas gratuitas ocultas. Sin errores de consola. No se probó en un teléfono físico.

La partida sigue en memoria. Quedan por calibrar las otras especies, árboles estériles, química y espirulina; después, pulido general y visual.

## Revisión posterior

Esta primera propuesta se conserva como historial. Los valores vigentes y el alcance completo están en [Balance general](BALANCE-GENERAL-LAB-BEEFUNGI.md); se conserva la progresión posterior documentada.
