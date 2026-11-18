# Campana con escenario por capas

Continuación visual solicitada, sin nuevo identificador de tanda.

Se aproxima la composición de `referencias/PERSPECTIVA-CERCANA-MESAS.png`, manteniendo el lenguaje pixelado del juego y las piezas separadas.

| Capa | Implementación |
|---|---|
| Ambiente fijo | `drawLaminarRoom`: pared crema, ventana alta, moldura miel, azulejo salvia y suelo con juntas en perspectiva; todo dibujado en código |
| Equipo | `drawLaminarFlowHood`: sprite transparente ya aprobado, independiente del escenario |
| Materiales | `drawLaminarJar` y `drawLaminarBag`: vidrio, tapas claras, grano, fibras y pliegues dibujados en código |
| Acciones y avisos | Arrastre, inoculación, micelio, sellado, salida, flechas y contadores existentes sobre las capas anteriores |

Se usa el mismo canvas y orden de dibujo; no hay fondo móvil ni ciclo horario. El suelo comienza detrás de las patas para apoyar visualmente el equipo. La perspectiva cercana es frontal ligeramente elevada; la navegación conserva la vista aérea.

Los nuevos materiales se usan también al arrastrar, durante la animación y en la miniatura de sala. Las cabinas de niveles anteriores mantienen sus dibujos. Las variantes CL/Cordyceps comparten escenario y equipo, conservando sus recipientes propios.

## Verificación

- 181 grupos aprobados. Se conserva el control de máximo dos frascos/cuatro bolsas y el consumo único en la inoculación.
- Regresión de fondo y materiales estáticos: dibujan lo mismo con otra posición del personaje y otro valor del reloj, sin azar.
- Arrastre e inoculación comprobados en navegador; variante Cordyceps y marcos de 844 × 390 y 390 × 844 revisados visualmente.
- Recetas, tiempos, inventarios, zonas de interacción, Tester y desbloqueos se mantienen. Build y catálogo regenerados.

Fuente única: `outputs/BEEFUNGI-MESA-PAJA.html`. El fork de referencia no se modifica.
