---
name: nuevo-post
description: Escribir un artículo de blog SEO para Grupo Técnico. Usar cuando se pida un post, artículo o contenido para el blog.
---

1. Leé `docs/seo-local.md` (sección Blog) y elegí una palabra clave principal con intención real de búsqueda en Uruguay (ej. "lavarropas no centrifuga", "heladera no enfría").
2. Revisá `src/content/blog/` para no repetir temas ni canibalizar palabras clave.
3. Creá `src/content/blog/<slug-corto>.md` con el frontmatter del esquema (`src/content.config.ts`): title ≤ 70, description 50-160, date de hoy, category.
4. Estructura: respuesta directa en el primer párrafo; H2 con las preguntas que se hace la gente; pasos que el usuario puede revisar solo (seguros, sin abrir partes eléctricas); cuándo llamar a un técnico; cierre con link a `/#contacto` o a la página del servicio.
5. 600-1200 palabras, español de Uruguay con voseo, sin relleno. Nunca ofrecer venta de repuestos.
6. Al menos 1 link interno a `/reparacion-lavarropas` o `/reparacion-heladeras`.
7. Si hay imagen: va en `public/uploads/`, < 200 KB, `.webp`, con `coverAlt` descriptivo.
8. `npm run build` y revisá que aparezca en `/blog` y en `rss.xml`.
