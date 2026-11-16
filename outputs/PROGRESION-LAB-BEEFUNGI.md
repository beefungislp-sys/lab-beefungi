# Progresión de Lab BeeFungi — recorrido gratuito de revisión

**Estado: implementado en esta tanda.** Se conserva el balance anterior como referencia; temporalmente no se cobra por insumos, mejoras, contratación ni mantenimiento. La progresión sí se respeta. No se cambia el nombre de las tandas históricas.

## Recorrido actual

| Etapa | Condición | Lo que aparece |
|---|---|---|
| Inicio | Nueva partida | Pleurotus, triturador, pasteurizado, mezcla, oficina/pedidos e incubación/fructificación básicas de 4 espacios |
| Tienda | Primera cosecha de Pleurotus | Puerta superior y venta manual de la cosecha |
| Mejoras | Primera venta válida | Siguiente mejora de cada estación visitada, gratis |
| Sala estéril | Hito principal completo | Puerta izquierda, Melena de León, sustrato de madera, nutrientes y las tres estaciones estériles; primer asistente disponible para contratar |
| Reishi | Primera cosecha de Melena de León | Micelio, ficha e inoculación de Reishi |
| Segundo asistente | Tres estaciones estériles completas | Asistente de laboratorio disponible para contratar |
| Cordyceps y agitación | Tres estaciones estériles completas y Reishi desbloqueado | Petri, frascos, arroz, medios CL/Cordyceps, modos de campana y mesa de agitación |
| Victoria principal y química | Primera cosecha de Cordyceps | Mensaje de victoria y puerta inferior, con extracción, envasado, nutrientes y espirulina como bonificación |

Las áreas se abren automáticamente al cumplir el hito; las mejoras y asistentes se adquieren mediante sus botones gratuitos. No hace falta contratar ningún asistente para abrir un área o especie. No se exige cosechar Reishi para abrir Cordyceps.

## Hito principal

Se requiere todo lo siguiente:

- Trituradora completa: tolva de cuatro pacas y cesto de doce cargas.
- Pasteurizado completo: tanque de seis cargas y agua automática.
- Mezcla completa: llenadora automática.
- Primera ampliación de incubación, a seis espacios.
- Primera ampliación de fructificación, a seis espacios.

Este conjunto abre la sala estéril y habilita al primer asistente. No requiere ocho espacios ni control climático. Las mejoras se muestran de una en una por módulo; desaparecen al completarse.

## Hito estéril

- Sustrato: llave automática, llenadora y agua rápida.
- Esterilizador: capacidad de seis y agua automática.
- Cabina: mechero, ampliación y flujo laminar.

Este conjunto habilita contratar al segundo asistente. Para abrir Cordyceps/agitación también debe haberse desbloqueado Reishi mediante la cosecha de Melena. Si se completan las mejoras primero, se conservan y esperan ese hito. No se incluyen mejoras de agitación ni cámaras máximas como requisitos.

Cordyceps abre su ruta entera: Petri + frasco de CL preparado/esterilizado → campana → agitación → CL maduro + sustrato Cordyceps esterilizado → campana → incubación → fructificación → cosecha. Ningún paso necesita química.

## Presentación y acceso

- Puertas futuras ocultas. Tampoco se muestran especies, materiales, tarjetas de inventario, modos o botones de contratación futuros.
- Los accesos se comprueban por clic, caminar y tecla E; pedidos valida también las especies/materiales disponibles.
- Cada nuevo hito genera un aviso único; si coinciden varios, se leen con “Continuar”. No se repiten al visitar una sala ni al cosechar otra vez.
- La tienda abre con la primera cosecha para evitar el círculo “necesito vender para abrir dónde vender”.
- La oficina conserva la ficha de las especies disponibles y los pedidos compactos.
- Las reposiciones y el desbloqueo total del prototipo permanecen ocultos en este recorrido; gratuito no significa saltar el árbol.

## Economía temporal y límites

Compras y mejoras gratis; contratación y mantenimiento sin coste. Las ventas conservan sus ingresos para ver el flujo, pero el saldo no limita el recorrido. Los insumos sí se consumen: si faltan, hay que pedirlos gratis. Se conservan tiempos, contaminación, capacidades, cosecha y entregas manuales.

La primera venta sigue siendo el hito que habilita las mejoras. Recargar reinicia la partida; el progreso está en memoria y no se sincroniza entre dispositivos. El modo económico anterior permanece cubierto por regresiones, pero no es el arranque público de esta revisión.

## Pendientes posteriores

- Reactivar costes y balancear todo el recorrido después de revisar el orden.
- Logros adicionales de primera venta de extracto y primera venta/cosecha de espirulina; no se añadieron en esta tanda de desbloqueos.
- Pulido visual, guardado y otras expansiones no forman parte de este cambio.

Referencia de balance previo: [Pleurotus](BALANCE-PLEUROTUS.md). Fuente de reglas: funciones de la sección `PROGRESION` en `BEEFUNGI-MESA-PAJA.html`.
