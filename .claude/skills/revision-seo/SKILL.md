---
name: revision-seo
description: Auditoría SEO técnica y local del sitio antes de publicar o después de cambios grandes. Usar cuando se pida revisar SEO, rendimiento o antes de pasar a producción.
---

Corré `npm run build` y revisá `dist/` (no el código fuente):

1. Cada página: un solo `<h1>`, `<title>` ≤ 70 y `meta description` ≤ 160 únicos (script: buscar duplicados con grep en `dist/**/index.html`).
2. `canonical` absoluto al dominio correcto; en fase 2 sin `/repo`.
3. JSON-LD válido: `LocalBusiness` en todas, `Service` + `FAQPage` en servicios, `BlogPosting` en posts. Los datos (NAP) idénticos a la ficha de Google Business Profile.
4. `robots.txt` y `sitemap-index.xml`: en preview `Disallow: /`; en producción permitido y con sitemap.
5. Imágenes con `alt`, `width/height` y < 200 KB. Lighthouse móvil ≥ 95 en Performance, SEO y Accesibilidad (`npx lighthouse <url> --preset=perf --form-factor=mobile --only-categories=performance,seo,accessibility --quiet --chrome-flags=--headless`).
6. Links internos sin 404 y redirecciones 301 de las URLs viejas en `public/_redirects`.
7. Reportá solo lo que falla, con archivo y arreglo propuesto.
