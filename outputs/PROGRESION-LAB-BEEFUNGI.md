# Progresión de Lab BeeFungi — revisión de coherencia

**Estado: documento de diseño, no implementado.** Los accesos del juego publicado no cambian por esta nota. No se renombra ninguna tanda histórica.

Este documento reúne las decisiones del usuario y una secuencia recomendada para que no existan bloqueos circulares. Las propuestas pendientes están identificadas expresamente; no se presentan como decisiones aprobadas.

## 1. Reglas confirmadas

- El juego comienza cultivando Pleurotus: triturar → pasteurizar → mezclar → incubar → fructificar → cosechar.
- Incubación y fructificación básicas están disponibles desde el inicio: son necesarias para completar ese primer cultivo.
- Tienda, sala estéril y laboratorio de química empiezan bloqueados. No se adelanta su contenido al jugador.
- La sala estéril requiere varias tandas y reinversión. No se abre con la primera venta de Pleurotus.
- Al abrirse la sala estéril, sólo se añade Melena de León. Reishi, Cordyceps y agitación siguen bloqueados.
- La primera cosecha de Melena de León desbloquea Reishi.
- Completar las tres estaciones del cuarto estéril es requisito para habilitar al segundo asistente y llegar a Cordyceps/agitación. Falta precisar si el acceso a esas dos funciones espera a contratarlo; ver el apartado 8.
- La primera **cosecha** de Cordyceps completa el objetivo principal y abre química gratis. No hay que vender Cordyceps ni pagar otra entrada.
- Química es una bonificación rentable para explorar y hacer crecer el negocio, con extracción, envasado, nutrientes y espirulina. Extracción no lleva otro árbol de mejoras.
- Cada especie o área que se desbloquea tiene un aviso visible, una sola vez. Estos avisos son distintos de los faltantes, que conservan sólo marco rojo y sonido.

## 2. Secuencia recomendada para revisar

| Paso | Qué ocurre | Condición |
|---|---|---|
| 1 | Cultivar Pleurotus con estaciones básicas | Inicio de partida |
| 2 | Abrir tienda | **Propuesta:** primera cosecha de Pleurotus |
| 3 | Empezar a comprar mejoras | Primera venta válida, como en el balance actual |
| 4 | Abrir sala estéril y habilitar la compra del primer asistente | Hito principal completo del apartado 3 |
| 5 | Abrir Reishi | Primera cosecha de Melena de León |
| 6 | Habilitar al segundo asistente, Cordyceps y agitación | Tres estaciones estériles completas; propuesta de coherencia: Reishi ya desbloqueado |
| 7 | Completar objetivo principal y abrir química gratis | Primera cosecha de Cordyceps |
| 8 | Continuar en etapa libre de bonificación | Química abierta; logros de extractos y espirulina |

La condición de la tienda es una propuesta, no una autorización ya recibida. La propuesta para el paso 6 abre el contenido al **habilitar contratar** al segundo asistente, no al pagarlo. Si se decide exigir contratarlo, sólo cambia esa transición; no sus requisitos previos.

## 3. Hito principal: sala estéril y primer asistente

Se necesitan todas estas mejoras:

- [ ] Trituradora completa: tolva de cuatro pacas y cesto de doce cargas.
- [ ] Pasteurizado completo: seis cargas y llenado automático de agua.
- [ ] Mezcla completa: llenadora automática.
- [ ] Incubación ampliada una vez: de cuatro a **seis espacios**.
- [ ] Fructificación ampliada una vez: de cuatro a **seis espacios**.

Al alcanzar el conjunto se abre la sala estéril con Melena de León y se habilita **comprar** al asistente de preparación. Este asistente atiende triturador, pasteurizado y mezcla.

No es necesario contratarlo para abrir la sala. No se requieren ocho espacios ni el control climático final de las cámaras. La sala no tiene un precio extra de entrada.

Con el balance vigente, las mejoras principales suman 26 monedas y las dos ampliaciones iniciales suman 10: **36 monedas en mejoras**, además de insumos y eventual contratación. Es una referencia económica, no otro requisito de pago.

## 4. Sala estéril, especies y segundo asistente

### Primera apertura

Disponibles: mesa de sustrato, esterilizador y cabina con sus funciones básicas, micelio de Melena de León, madera y nutrientes comprables. Se conserva todo el circuito anterior de Pleurotus.

Bloqueados: micelio de Reishi, Petri de Cordyceps, medios de Cordyceps/CL, funciones específicas de la campana y mesa de agitación.

Los nutrientes para esta etapa se compran en pedidos. **No necesitan fabricarse en química**, porque química se abre después de cosechar Cordyceps.

### Melena de León → Reishi

Cosechar por primera vez Melena de León desbloquea Reishi y sus opciones de micelio/inoculación. Comprar micelio, preparar una bolsa o vender Pleurotus no sustituye esa cosecha.

### Completar el cuarto estéril

- [ ] Mesa de sustrato completa: llenadora y mejora final de agua rápida.
- [ ] Esterilizador completo: capacidad máxima y agua automática.
- [ ] Cabina completa: mechero, ampliación y transformación en campana de flujo laminar.

Este conjunto habilita al segundo asistente de laboratorio. **No incluye mejoras de agitación**, ya que la mesa todavía está bloqueada, ni exige maximizar las cámaras a ocho espacios/control climático.

El asistente mantiene su función prevista: sustrato, esterilizador y apoyo a incubación/fructificación. Su disponibilidad no significa que se contrate automáticamente ni que inocule por el jugador.

### Cordyceps y agitación

Propuesta para respetar el orden de especies: abrirlos cuando las tres estaciones estériles estén completas **y Reishi ya esté desbloqueado**. Si el jugador compra todas las mejoras antes de cosechar Melena de León, se conserva ese avance y la apertura espera al desbloqueo de Reishi.

Esta regla de coherencia no exige cosechar Reishi: ese requisito adicional no fue solicitado. El vínculo entre abrir Cordyceps y pagar al segundo asistente sigue pendiente de confirmación.

Al abrir Cordyceps, se habilita conjuntamente lo necesario para completar su ruta:

1. Compra de Petri y frascos vacíos.
2. Medios CL y sustrato Cordyceps en preparación y esterilizador.
3. Modos correspondientes en la campana.
4. Mesa de agitación con su capacidad básica; su ampliación se compra después.
5. Uso del CL maduro para inocular su sustrato y continuar a incubación/fructificación.

No basta con mostrar un botón de Cordyceps si alguno de esos pasos permanece inaccesible. La ruta no depende de química ni de producir espirulina.

## 5. Victoria principal y química como bonificación

La primera cosecha de Cordyceps marca la victoria principal y abre química automáticamente, sin compra adicional ni contratación obligatoria nueva.

Al abrir química están disponibles extracción, envasado, nutrientes y espirulina, sin otra cadena de mejoras en extracción. La rentabilidad definitiva de esta etapa todavía debe balancearse para que funcione como bonificación.

Logros previstos:

- **Primer extracto vendido:** primera venta válida de un gotero de extracto.
- **Primera espirulina:** propuesta, primera venta válida de espirulina. El usuario también mencionó primera cosecha; el disparador exacto se confirma antes de implementarlo.

Propuesta de presentación del cierre: mostrar el mensaje al ganar con Cordyceps, invitando a continuar en química o reiniciar. Los logros de bonificación se muestran después sin volver a cerrar el juego. Así la victoria principal no queda retrasada hasta terminar el contenido opcional.

Texto de cierre propuesto: “¡Completaste Lab BeeFungi! Gracias por jugar. Puedes seguir explorando y haciendo crecer tu laboratorio, o empezar una nueva partida.” No se reinicia ni se borra la partida automáticamente.

## 6. Visibilidad y avisos

- No mostrar materiales, especies, modos, asistentes o estaciones antes de su hito.
- Comprobar el bloqueo por clic, tecla E, caminar, pedidos y acciones automáticas. No basta con esconder un dibujo.
- Mantener accesible el circuito básico de incubación/fructificación desde el inicio.
- Propuesta visual: ocultar el contenido futuro; queda por decidir si sus puertas también se ocultan o se dibujan cerradas.
- Aviso sólo al cambiar de bloqueado a disponible. No repetir al visitar una sala, comprar un micelio ya disponible o volver a cosechar la misma especie.
- Si se habilitan varias cosas en un mismo hito, reunirlas en un aviso breve. Un asistente se anuncia como “disponible para contratar”.

Ejemplos:

- “Desbloqueaste la sala estéril. Ahora está disponible Melena de León.”
- “Ahora está disponible Reishi.”
- “Ahora están disponibles Cordyceps y la mesa de agitación.”
- “Desbloqueaste el laboratorio de química.”

## 7. Revisión de dependencias

| Posible contradicción | Resolución en la propuesta |
|---|---|
| Tienda cerrada, pero mejoras exigen vender | Abrir tienda con la primera cosecha, antes de cualquier requisito de venta |
| Comprar mejoras estériles abre Reishi demasiado pronto | Reishi depende de cosechar Melena de León, no del dinero gastado |
| Comprar todo permite saltar directamente a Cordyceps | Proponer también Reishi desbloqueado para esa transición |
| Agitación exige mejorar la propia agitación para abrirse | Su mejora no forma parte del hito estéril; se compra después |
| Cordyceps necesita nutrientes que sólo fabrica química | Habilitar nutrientes comprables desde la sala estéril |
| Se abre Cordyceps, pero faltan Petri, frascos o modos | Abrir su conjunto completo de producción en el mismo hito |
| Segundo asistente necesita maximizar cámaras por una regla del prototipo | La progresión propuesta usa sólo las tres estaciones estériles como requisito de mejoras |
| El final exige vender Cordyceps o completar química | Victoria al cosechar Cordyceps; química y sus logros son posteriores y opcionales |
| Un asistente disponible se interpreta como contratado | Separar desbloqueo, compra y mantenimiento |
| Un aviso reaparece siempre que se dibuja la sala | Emitir avisos por transición y una sola vez |

Bajo las decisiones propuestas, el circuito va hacia adelante y no hay dependencias circulares. Los supuestos se mantienen visibles en el apartado siguiente; no se presentan como reglas aprobadas.

## 8. Decisiones aún por confirmar

1. **Tienda:** propuesta, abrirla con la primera cosecha de Pleurotus.
2. **Segundo asistente:** propuesta, Cordyceps/agitación se abren al habilitar su contratación; alternativa, esperar a contratarlo efectivamente.
3. **Orden de especies:** validar la condición de coherencia “Reishi desbloqueado” antes de Cordyceps; no se exige su primera cosecha.
4. **Bonificación:** fijar primera venta o primera cosecha para el logro de espirulina y validar el momento propuesto del mensaje final.
5. **Presentación:** puertas futuras ocultas o visibles como bloqueadas.

Falta balancear los precios de la sala estéril, otras especies y bonificaciones. El modo prueba debe seguir separado del recorrido normal y no servir como evidencia de que la progresión se completó.

## 9. Estado y alcance de esta revisión

Se revisó el documento contra el balance actual y las decisiones de la conversación. No se modificó el código, ni se aplicaron bloqueos, nuevos logros o reinicio al juego. La partida actual continúa en memoria, sin atribuirle guardado entre dispositivos.

Referencia: [Primera pasada de Pleurotus](BALANCE-PLEUROTUS.md). Las notas anteriores conservan el historial; este documento reúne la progresión propuesta para revisar antes de construirla.
