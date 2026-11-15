# Revisión de pendientes — Lab BeeFungi

## Última tanda
Implementado: limpieza preventiva, bacterias palpitantes, primera guía de limpieza, riesgo creciente hasta 100%, contaminación visible en incubación, tres flushes con rendimientos 500/300/150 g, cosecha sin retirar bloque, composta desde incubación y fructificación, y botones de llenado de prueba.

La composta de incubación faltaba y se agregó en esta revisión. Acepta bloques creciendo y contaminados. Las contaminadas también van a composta mediante doble clic.

Pendiente de comprobación: revisión visual real en navegador y prueba manual del recorrido completo en celular. Las verificaciones actuales son sintaxis y lógica con canvas simulado.

## Solicitudes anteriores para futuras tandas
- Progresión de mejoras por zona, tres niveles y asistentes desbloqueables. Actualmente solo existe la ampliación de tanque 2/4/6 como prueba sin costo.
- Asistentes para automatizar todo el flujo de su zona; el trabajo actual es manual y no implementa esos asistentes.
- Deshidratación y destino posterior de la cosecha.
- Economía y compra con cantidades más/menos: actualmente los pedidos son +1 gratuitos de prueba.

Limitación actual: no hay guardado de partida; recargar reinicia, salvo guías iniciales. La contaminación se resuelve durante incubación; no hay contagio entre bolsas ni contaminación nueva durante fructificación.

## Siguiente tanda: tienda / mostrador

Solicitud anotada, sin construir todavía: colocar una tienda o mostrador en la parte superior de la sala principal. Allí se venderán las setas cosechadas. Quedan por definir la interacción de venta y los precios. No se modificó el juego con esta solicitud.

## Actualización: tienda construida

La tienda del mostrador ya está implementada: se desbloquea con la primera cosecha y tiene puerta superior, clientes y ventas básicas. Detalles en TANDA-TIENDA.md. Sustituye la nota anterior de no construir todavía, porque después se autorizó su construcción. Pendiente revisión visual.

## Catálogo y tienda manual

Ya disponibles para comprar: Pleurotus, melena de león, reishi y cordyceps. Futuros desbloqueos por dificultad, actualmente todas abiertas. Faltan reglas y apariencia propias para las nuevas especies. La tienda ahora tiene fila y entrega manual. Ver TANDA-TIENDA-MANUAL-ESPECIES.md.

## Tandas A, B y C

A implementada y probada a nivel de lógica; revisión visual pendiente. B anotada en TANDA-B-PLAN.md. C definida en TANDA-C-PLAN.md: ficha cíclica, colores por especie y propuesta de cuarto de preparación estéril para reishi/melena; sin construir todavía.

## Estado actualizado

A y B implementadas y verificadas a nivel de lógica. C pendiente de construcción, con la propuesta del cuarto estéril aprobada. D anotada: burbujas de pedido de una o dos porciones. Revisión visual general pendiente.

## C terminada

A, B y C implementadas. C incorpora ficha cíclica, colores, cuarto estéril y flecha de tienda. D está definida y pendiente; ver TANDA-D-PLAN.md. Sprites específicos de las especies nuevas y prueba real en navegador/celular siguen pendientes.

## D terminada

A, B, C y D implementadas. D incorpora burbujas de pedido, tanque visual 2/4/6, límites y contadores por capacidad, caja de paja pasteurizada e icono de cultivo. Validación de lógica y renders realizada; prueba real en navegador/celular pendiente. Permanecen como trabajo futuro asistentes, mejoras completas por zona, deshidratación, sprites propios de especies nuevas y guardado de partida.

## Sesión 0 — cierre C0

A0 (respaldo/publicación, preparación en bolsa y pedidos compactos), B0 (interfaz móvil) y C0 (guía, expansión, acero y olla) implementadas y publicadas. D0 pendiente: guía y animaciones de cabina; ver TANDA-D0-PLAN.md. Revisión real de navegador a tamaños móviles realizada. Juego: https://beefungislp-sys.github.io/lab-beefungi/

## Sesión 0 — D0 terminada

Cabina con bolsa esterilizada, bote interior, guía inicial, limpieza opcional, inoculación por arrastre/doble clic y sellado/salida automática. Verificado en navegador público y veintiocho grupos de pruebas. A0, B0, C0 y D0 implementadas y publicadas.

## Sesión 0 — E0 terminada

Modelos propios por especie, cosechas separadas, precios provisionales y entregas mediante toque, arrastre o botón nativo. Ver TANDA-E0.md. Verificación pública en horizontal y vertical, 36 grupos de pruebas y build correctos. Cordyceps sigue sin ruta de cultivo. Las notas anteriores conservan el historial; este cierre sustituye el pendiente de sprites y entrega móvil. Continúan pendientes mejoras completas, asistentes, deshidratación, guardado y prueba física en otros teléfonos.

## Sesión 0 — F0 terminada

Mejoras de prueba por módulo: triturador con tolva 3/4 y cesto 12, agua automática y llenadora con limpieza cada seis bolsas. Asistente de preparación desbloqueable, contratación y salario provisionales, animación de recorrido y uso de suministros existentes. Ver TANDA-F0.md. Sustituye el pendiente de automatización en estos tres módulos; faltan economía definitiva, mejoras/asistentes de otras zonas, deshidratación y guardado.

## Sesión 0 — G0 terminada

Incubación y fructificación con mejoras independientes de 4 a 6 y 8 espacios y control climático de 10% menos tiempo. Composta vendible a una moneda por unidad con un toque. Ver TANDA-G0.md. Asistente del área de cultivo anotado para después de mejorar el área estéril; no construido. Pendientes balance/precios definitivos y las demás mejoras del cuarto estéril.

## Sesión 0 — H0 terminada

Movimiento por toque con rutas y prioridad de módulos. Mesa de sustrato sin cierre manual ni cubo de adorno, salida automática, mejoras de llave y llenadora de depósitos 4+4. Espera de bolsas preparadas sin límite; cuatro visibles y olla de dos cargas. Ver TANDA-H0.md. Siguen pendientes las otras mejoras del esterilizador/cabina y el asistente de esta área y cultivo.

## Sesión 0 — I0 terminada

Esterilizador ampliable 2/4/6 y después agua automática; corregido límite oculto de salida esterilizada. Asistente de preparación más lento con burbujas de faltantes. Las mejoras de agua funcionan al visitar su estación y no rellenan después de terminar fuera. Ver TANDA-I0.md. Pendientes mejoras de cabina, asistentes estéril/cultivo y balance definitivo.

## Sesión 0 — J0 terminada

Cabina con mechero, ampliación a 3+3 y transformación a campana laminar. Reservas reales sin límite de capacidad, inoculación por arrastre y salida automática. Ver TANDA-J0.md. Sustituye el pendiente de mejoras de cabina; asistentes estéril/cultivo y balance definitivo continúan pendientes.

## Sesión 0 — K0 terminada

Barras de depósitos y agua rápida; protagonista y nuevo asistente con bata. Laboratorio automatiza sustrato/esterilizador y cámaras (clima por mayoría, colocación, traslado, cosecha y composta); inoculación manual. Árbol completo desbloquea asistente y sala de cultivo líquido; hay botón de desbloqueo total de prueba. Ruta de Cordyceps: Petri comprado, frasco nutritivo esterilizado, campana existente e incubación con agitación hasta reserva líquida. Ver TANDA-K0.md. Pendientes bloques/frutos de Cordyceps, contaminación específica del líquido, balance/economía finales, deshidratación y guardado.

## Sesión 0 — L0 terminada

Ciclo Cordyceps completo mediante selectores de preparación, olla y campana. El cuarto líquido de K0 se sustituye por una sola mesa de agitación en el cuarto estéril. CL maduro y sustrato esterilizado generan un bloque para incubación/fructificación, cosecha y venta. Ver TANDA-L0.md. Sustituye el pendiente de bloques/frutos Cordyceps; siguen pendientes contaminación específica del líquido, balance/economía finales, deshidratación y guardado.
