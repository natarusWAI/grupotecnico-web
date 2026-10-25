---
name: pagina-servicio
description: Agregar o mejorar una página de servicio (ej. reparación de secarropas, lavavajillas, freezers). Usar cuando se pida un nuevo servicio o reescribir uno.
---

1. Confirmá con el usuario que el servicio realmente se ofrece (no inventes servicios).
2. Copiá la estructura de `src/content/servicios/reparacion-lavarropas.md`. El nombre de archivo es la URL: `reparacion-<equipo>.md`.
3. `seoTitle`: "Reparación de <equipo> en Montevideo | Visita en el día" (≤ 70). `seoDescription` con los diferenciales (≤ 160).
4. `problems`: fallas con las palabras que usa la gente ("no enfría", "no centrifuga"), 6-8 ítems.
5. `faqs`: 4-6 preguntas reales; siempre incluir costo de visita, garantía, "¿venden repuestos?" (no) y medios de pago.
6. El cuerpo: 150-400 palabras propias, sin copiar de otras páginas del sitio.
7. Si el servicio es nuevo, sumalo como opción del `select` del formulario (sale solo de la colección) y verificá el menú.
8. `npm run build`; validá el JSON-LD de la página con https://search.google.com/test/rich-results.
