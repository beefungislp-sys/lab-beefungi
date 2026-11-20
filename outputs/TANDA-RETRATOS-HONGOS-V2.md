# Retratos de hongos V2: imagen y reconstrucción en código

Se rehacen las cuatro presentaciones de hongos siguiendo el método solicitado: generar una referencia por especie, inspeccionarla, dibujar una versión propia en canvas y comprobarla dentro del juego. Se usó image_gen integrado, con trabajo paralelo por especie. Las imágenes y los prompts completos se conservan en `referencias/`; los PNG no se cargan durante la partida.

| Especie | Referencia | Dibujante nuevo |
| --- | --- | --- |
| Pleurotus | RETRATO-PLEUROTUS-V2.png | drawDiscoveryPleurotus |
| Melena de león | RETRATO-MELENA-V2.png | drawDiscoveryLionsMane |
| Reishi | RETRATO-REISHI-V2.png | drawDiscoveryReishi |
| Cordyceps | RETRATO-CORDYCEPS-V2.png | drawDiscoveryCordyceps |

Los retratos tienen una geometría canónica de 200 × 150, con capas, iluminación, volumen y texturas propios. No amplían los iconos de las estaciones. Pleurotus reúne abanicos con láminas y carne conectada; Melena usa lóbulos unidos y dientes desiguales; Reishi tiene sombreros arriñonados con anillos y ramas curvas; Cordyceps usa cuerpos curvos de distintas alturas con superficie granular.

Se conserva el fondo de las presentaciones, su pausa y cola, la aparición una sola vez por producto, el cierre con ×/E/Escape y el nombre como único texto visible. Goteros negros y espirulina conservan sus dibujantes ya aprobados. La progresión, economía, producción y sprites pequeños de las estaciones no cambian. Los retratos detallados sólo se calculan/dibujan al abrir una presentación, sin añadir esa carga a cada fotograma del mundo.

Prompts y procedencia: [índice de referencias](referencias/RETRATOS-HONGOS-V2.md). La referencia de Melena conserva un halo residual documentado en su prompt; el dibujo en código no lo reproduce.

Validación: 211 grupos de pruebas aprobados; build y catálogo regenerados. Galería de cuatro retratos nativos comparada con las referencias, ventana real de Melena revisada y cierre con E comprobado. Reishi revisado en 844 × 390 y 390 × 844 sin recorte. Verificaciones focales de geometría de subagentes aprobadas; pruebas compartidas confirman cuatro dibujos distintos, deterministas, sin llamadas a sprites pequeños ni cambios de inventario. Evidencia local: RETRATOS-HONGOS-V2-QA.jpg.
