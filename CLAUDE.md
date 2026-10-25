# Grupo Técnico: web

Web de un **servicio técnico de reparación** de lavarropas y heladeras a domicilio en Montevideo (Uruguay). No venden repuestos: nunca escribas textos, ofertas ni schema que sugieran venta de repuestos.

## Stack
Astro 7 (estático) + Tailwind 4 + Sveltia CMS en `/admin` (edita archivos en GitHub). Node ≥ 22.23 (`.nvmrc` = 24).
- `npm run dev` · `npm run check` · `npm run build`
- Fase 1: GitHub Pages (`.github/workflows/deploy.yml`, con `PREVIEW=true` → noindex). Fase 2: Cloudflare Pages con dominio `grupotecnico.com.uy` (`functions/`, `public/_redirects`).

## Reglas que no se ven en el código
- Todo dato del negocio (teléfonos, WhatsApp, mail, zonas, marcas, IDs de analítica) sale de `src/content/settings/sitio.json`. Nunca lo hardcodees en componentes.
- Si cambiás un esquema en `src/content.config.ts`, actualizá el mismo campo en `public/admin/config.yml` o el panel se rompe.
- Links internos siempre con `url()` de `src/lib/site.ts` (en GitHub Pages hay BASE `/repo`).
- Textos en español rioplatense de Uruguay, con voseo ("escribinos", "coordiná"). Moneda en `$` uruguayos. Teléfonos en formato local (`097 125 160`), WhatsApp como `598XXXXXXXX`.
- Diferenciales que siempre deben estar visibles: visita en el día y presupuesto sin costo, repuestos originales, garantía de 1 y 2 años según repuesto, factura electrónica, Mercado Pago.
- Reparan en el domicilio del cliente: no retiran equipos para arreglarlos en taller.
- Zona (texto en `sitio.json` → `coverage`): toda Montevideo, Ciudad de la Costa hasta el Peaje de Pando (km 33 Interbalnearia), Ruta 5 hasta Las Piedras y Ruta 8 hasta Barros Blancos. Pando ciudad no. No crear páginas por barrio con texto repetido (Google las trata como doorway pages).
- Mantener las URLs viejas que ya rankean: `/reparacion-lavarropas`, `/reparacion-heladeras`.

## Cómo trabajamos
- Plan por fases en `docs/PLAN.md`; anotá avances y decisiones en `docs/PROGRESO.md` al terminar cada tarea.
- Investigá → planificá (modo plan) → implementá. Un commit por paso con mensaje en español.
- Procedimientos repetibles en `.claude/skills/` (nuevo post, nueva página de servicio, revisión SEO).
- El hook `Stop` corre `check` + `build`: si falla, corregí antes de terminar.
