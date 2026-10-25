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
- **Resueltos:**
  - CP 12900 confirmado por el negocio (coincide con Google; OpenStreetMap figura con 11700).
  - Fotos de lavarropas y heladera regeneradas con remera lisa.

## 2026-10-25 · Fase 2: landing que vende
- **Celular:**
  - Hero más compacto en móvil. WhatsApp y Llamar se ven sin scroll incluso en 360×640 (en 390×844 terminan en 491 px).
  - La segunda fila del menú, con scroll de costado, se cambió por un menú desplegable sin JavaScript (`<details>`). «Contacto» ya no queda oculto.
  - El botón de la cabecera dice «Llamar» en móvil y muestra el número desde `sm`.
- **Años de experiencia:** `yearsExperience` se reemplazó por `foundingYear: 1986`. Los años se calculan al compilar con `yearsExperience()` de `src/lib/site.ts`. Se agregó `foundingDate` al schema LocalBusiness y el panel quedó sincronizado.
- **Franja de confianza** (`Confianza.astro`, debajo del hero): años de experiencia, garantía por escrito, factura electrónica y Mercado Pago. Íconos de trazo propios, sin logos de DGI ni de Mercado Pago.
- **Reseñas** (`Resenas.astro`, campo `reviews` en `sitio.json` y en el panel):
  - La sección no se muestra mientras no haya reseñas.
  - Sin schema `Review`: Google no muestra estrellas para reseñas publicadas por el propio negocio.
  - Si `social.googleBusiness` tiene link, aparece «Ver todas las reseñas en Google».
- **Favicon:** sale de `fotos/Isotipo vectorial.svg`. Se generan `favicon.svg`, un PNG de 48 px de respaldo y `apple-touch-icon` sobre blanco. `og-default.png` sigue con el logo completo.
- **Lighthouse móvil** (home, build local): Performance 100, Accesibilidad 100, Buenas prácticas 100, SEO 100.
- **Pendientes:**
  - Cargar 5 a 8 reseñas reales. El link de búsqueda de Google no se puede leer desde afuera: hay que copiarlas a mano.
  - Cargar el link de la ficha de Google Business en `social.googleBusiness`.
  - Correcciones de texto que quiere hacer el negocio antes de seguir.
  - Probar en un celular real que el menú desplegable no quede tapado por el hero.
