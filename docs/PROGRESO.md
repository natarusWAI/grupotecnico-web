# Progreso

Claude: agregá una entrada al terminar cada tarea (fecha, qué se hizo, decisiones, pendientes).

## 2026-10-25 · Proyecto inicial
- Astro 7 + Tailwind 4 + Sveltia CMS. Build y `astro check` sin errores.
- Home, páginas de lavarropas y heladeras (mismas URLs que WordPress), zonas, blog (2 posts migrados y reescritos), privacidad, gracias, 404, RSS, sitemap, robots.
- WhatsApp y formulario configurables desde `sitio.json` / panel.
- **Pendiente de confirmar con el negocio:** número de WhatsApp (se puso 097 125 160), marcas reales (la lista es tentativa), qué repuestos tienen 1 o 2 años de garantía, barrios límite de cobertura (¿Barros Blancos, Pando ciudad, Las Piedras?), coordenadas exactas de Enrique Martínez 1631.
- Conocido: en GitHub Pages las redirecciones de URLs viejas apuntan sin `/repo`; en el dominio final funcionan bien (y además se cubren con `public/_redirects`).

## 2026-10-25 · Fase 0: proyecto en GitHub
- Repo público `natarusWAI/grupotecnico-web`, Pages con GitHub Actions. Web de prueba (noindex): https://nataruswai.github.io/grupotecnico-web/
- `public/admin/config.yml` apunta al repo real.
- Node: Astro exige ≥ 22.23.4; se instaló Node 24 con nvm y quedó como default (con 22.23.3 fallan `check` y `build`).
- Clave de Web3Forms cargada en `sitio.json` (las consultas llegan al mail configurado en la cuenta de Web3Forms, no al campo `recipient`).

## 2026-10-25 · Fase 1: datos reales y contenido base
- **Datos en `sitio.json`:**
  - Teléfonos en orden de prioridad: celular/WhatsApp 097 125 160, fijo 2304 5504 y el celular 097 498 778 como última opción.
  - Dirección nueva: Eduardo Pondal 705, CP 12900, con coordenadas de OpenStreetMap.
  - Horario: lunes a viernes de 8 a 17 h, sábados de 8 a 13 h.
  - Marcas: se sacaron Drean, Patrick y Philco; se sumaron Smartlife, Xion, Ariston, Dikler y Greenwind.
- **Zona:** se sumaron Ruta 5 hasta Las Piedras y Ruta 8 hasta Barros Blancos. Pando ciudad no.
- **Garantía:** 2 años en bombas, electroválvulas, condensadores, correas, termostatos y resistencias; 1 año en el resto.
- **Reparación en el domicilio:** no se retiran equipos. Está en diferenciales, FAQ y pasos.
- **Esquema:**
  - `hours` ahora tiene `schedule` (varias franjas → un `OpeningHoursSpecification` por franja).
  - Nuevos campos `coverage` (frase de cobertura, antes estaba repetida a mano en 4 lugares) y `warranty.text`.
  - `config.yml` quedó sincronizado.
- **Fotos:**
  - `npm run fotos` convierte los originales de `fotos/` (fuera del repo por `.gitignore`) a `.webp` < 200 KB en `public/uploads` (1920/960 el hero; 1200/600 los servicios).
  - También genera `logo.webp`, `favicon.png`, `apple-touch-icon.png` y `og-default.png`. Se borró `favicon.svg`.
  - Hero de home y servicios con foto de fondo + overlay; tarjetas de servicios con foto.
- **Servicio nuevo:** `/reparacion-secarropas`.
- **Pendientes:**
  - Las fotos son generadas con IA. Conviene reemplazarlas por fotos reales (técnico, camioneta) para la confianza y para Google Business Profile.
  - En las fotos de lavarropas y heladera, el técnico tiene una remera con el texto «SPIRIT».
  - OpenStreetMap da CP 11700 (Sayago) para Eduardo Pondal 705. Se dejó 12900 como indicó el negocio; confirmar con Correo Uruguayo.
  - En celular, el menú de la cabecera se desplaza de costado y «Contacto» queda oculto a la derecha. Revisarlo en la Fase 2.
