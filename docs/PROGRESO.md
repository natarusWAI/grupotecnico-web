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
- **Correcciones del negocio:**
  - «Qué reparamos» ya no dice «te entregamos el equipo» (sonaba a que lo retiramos).
  - En los pasos y en las FAQ, los pagos dicen «efectivo, transferencia o Mercado Pago».
  - En heladeras se sacó «con dispensador» y se puso «Especialistas en heladeras inverter».
- **Logos en la franja:**
  - Mercado Pago lleva su isotipo de Simple Icons, en el color de la marca.
  - DGI no lleva logo: el oficial (MEF-DGI) tiene el escudo nacional y puede sugerir respaldo del Estado. Se usa el texto «Factura electrónica DGI».
- **Reseñas cargadas:** 8 reseñas reales de Google, todas de 5 estrellas, copiadas de capturas de la ficha.
  - El texto va tal cual, sin corregir la ortografía.
  - Los nombres van con la inicial del apellido («Edith T.»), por privacidad (Ley 18.331).
  - Las reseñas no dicen barrio.
  - En la home se ven en una grilla de 4 columnas en escritorio.
- **Ficha de Google:** `social.googleBusiness` = https://maps.app.goo.gl/tMXw8jHNCiqtEPNSA.
  - Se usa en «Ver todas las reseñas en Google» y en `sameAs` del schema.
  - El nombre correcto es «Grupo Técnico» (lo confirmó el negocio). La ficha de Google figura como «Reparación Heladeras y Lavarropas»: el dueño tiene que cambiarla desde el panel de Google Business («Editar perfil» → «Nombre de la empresa»).
- **Lighthouse móvil** (home, build local): Performance 100, Accesibilidad 100, Buenas prácticas 100, SEO 100.
- **Pendientes:**
  - Correcciones de texto que quiere hacer el negocio antes de seguir.
  - Probar en un celular real que el menú desplegable no quede tapado por el hero.

## 2026-10-25 · Fase 3: panel con login de GitHub
- **Worker de login:** `sveltia-cms-auth` en Cloudflare Workers: https://sveltia-cms-auth.nataruswai-c32.workers.dev
  - Se creó desde Cloudflare como repo privado aparte (`natarusWAI/sveltia-cms-auth`), no dentro de este repo.
  - Variables `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` y `ALLOWED_DOMAINS` (`nataruswai.github.io, grupotecnico.com.uy, *.grupotecnico.com.uy`). Las tres van como **Secret**: los despliegues desde Git borran las variables comunes cargadas en el panel de Cloudflare.
- **OAuth App de GitHub** «Grupo Técnico CMS» con callback `<worker>/callback` y sin vencimiento de tokens (el worker no los renueva).
- `base_url` del worker activado en `public/admin/config.yml`.
- **Prueba de punta a punta:** cambiar el WhatsApp desde el panel generó un commit y la web se republicó con el número nuevo en ~1 min. Después se volvió a 59897125160 de la misma forma.
- El panel reescribe `sitio.json` en el orden de sus campos y agrega `"area": ""` a las reseñas. No afecta la web.
- **Pendientes:**
  - En la Fase 5, con el dominio en Cloudflare Pages, revisar que `/admin` funcione en `grupotecnico.com.uy`. Si se usan las vistas previas `*.pages.dev`, sumarlas a `ALLOWED_DOMAINS`.
  - Las imágenes que se suban dentro del texto de un post apuntan a `/uploads/...` sin el prefijo `/grupotecnico-web`: en la vista previa de GitHub Pages no se ven, pero en el dominio final sí.

## 2026-10-25 · Fase 4: SEO local
- **Auditoría** (skill revision-seo, build de producción). Estaba bien: un `<h1>` por página, títulos y descripciones únicos, canonical sin `/repo`, robots/sitemap, links internos, imágenes con alt y medidas, JSON-LD por tipo de página. Se corrigió:
  - Título de post > 70: el sufijo « | Grupo Técnico» solo se agrega si entra.
  - `BlogPosting` sin `image`: ahora usa `og-default.png` si el post no tiene portada.
  - `areaServed` del `Service` tenía nombres de grupo («Ruta 5 hasta…»). Ahora son las mismas localidades que el `LocalBusiness`.
  - Las páginas noindex (404, gracias) ya no llevan canonical.
  - `og-default.png` de 208 a 97 KB (PNG con paleta, también en `npm run fotos`).
  - `_redirects`: las URLs viejas de WordPress también sin barra final.
  - Fechas de los posts: salían un día antes por la zona horaria (se formatean en UTC).
  - Botones de WhatsApp en verde oscuro `#0f7a3f`: blanco sobre `#25d366` tenía contraste 2:1 y Lighthouse bajaba Accesibilidad a 95 en los posts. El botón flotante sigue con el verde de WhatsApp.
  - `docs/seo-local.md` tenía la dirección vieja; ahora dice Eduardo Pondal 705 y las zonas actuales.
- **Posts nuevos** (calendario 1 a 4): «Mi lavarropas no centrifuga», «La heladera no enfría pero el freezer sí», «Códigos de error del lavarropas Samsung», «¿Conviene reparar o cambiar el lavarropas?». Entre 780 y 980 palabras, con links cruzados y a las páginas de servicio.
  - El de reparar o cambiar no da precios del negocio: usa un ejemplo con $20.000 marcado como ilustrativo (no se encontraron precios uruguayos confiables en la web).
  - Los cuatro tienen fecha de hoy. Para publicar uno cada 2 semanas, se pueden pasar a `draft: true` y liberarlos de a uno.
  - Se agregaron estilos de `h3`, citas y tablas en `.prose-gt`.
- **Lighthouse móvil:** 100 en Performance, Accesibilidad y SEO en la home, `/reparacion-lavarropas` y los posts nuevos. Para correrlo hace falta `CHROME_PATH` apuntando al Chromium de Playwright (`~/.cache/ms-playwright/chromium-1148/chrome-linux/chrome`).
- **Checklist para el dueño:**
  - Google Business Profile, ya:
    - Cambiar el nombre a «Grupo Técnico» (hoy figura «Reparación Heladeras y Lavarropas»).
    - Categoría principal «Servicio de reparación de electrodomésticos». Secundarias: reparación de lavarropas y de refrigeradores.
    - Negocio de área de servicio. Ocultar la dirección si no se atiende público. Áreas: Montevideo, Ciudad de la Costa, Paso Carrasco, Las Piedras, La Paz, Barros Blancos.
    - Teléfono principal 097 125 160 y horario igual a la web.
    - Atributos: factura, Mercado Pago. Servicios con descripción: lavarropas, secarropas, heladeras.
    - Fotos reales todos los meses. Link de reseña para mandar por WhatsApp después de cada trabajo; responder todas las reseñas.
    - Una publicación por semana: puede ser el resumen de un post.
  - Google Business Profile, en la Fase 5: cambiar el sitio web de la ficha al dominio nuevo cuando esté en Cloudflare Pages.
  - Search Console, en la Fase 5 (hoy la vista previa es noindex):
    - Propiedad de dominio `grupotecnico.com.uy` verificada por DNS TXT.
    - Enviar `sitemap-index.xml` e inspeccionar la home, los 3 servicios y los posts nuevos.
    - Revisar en «Páginas» que las URLs viejas de WordPress figuren como redirigidas y no como 404.

## 2026-10-25 · Dirección corregida
- La dirección es **Eduardo Pondal 704**, no 705 (lo confirmó el negocio). Corregida en `sitio.json` y `docs/seo-local.md`. Las entradas anteriores de este archivo quedan como estaban.
- Ficha de Google: nombre, categorías, área de servicio (dirección oculta), áreas, teléfono y horario ya configurados por el dueño.
- Ficha de Google completada por el dueño:
  - Descripción del negocio y descripciones de los 3 servicios (los textos de la sesión de la Fase 4).
  - Pagos: «Solo dinero en efectivo» en No. Google no tiene atributo para transferencia ni Mercado Pago; quedan en la descripción.
- **Pendiente para la Fase 5:** cambiar el sitio web de la ficha al dominio nuevo y dar de alta Search Console.

## 2026-10-25 · Cuentas nuevas del negocio
- **Cloudflare:**
  - Cuenta nueva a nombre de `grupotecnico86@gmail.com`. `nataruswai@gmail.com` quedó invitado como Super Administrator.
  - El worker de login pasó a esa cuenta: https://sveltia-cms-auth.grupotecnico86.workers.dev, importado del mismo repo `natarusWAI/sveltia-cms-auth`.
  - Los 3 valores están cargados como **Secret**. Se generó un client secret nuevo en la OAuth App.
  - `base_url` de `public/admin/config.yml` actualizado.
- **Pendiente:** borrar el worker de la cuenta vieja y el client secret original de la OAuth App cuando el login nuevo esté probado. 
- **Web3Forms:** clave nueva creada con `grupotecnico86@gmail.com` y cargada en `sitio.json`. Las consultas llegan a ese mail; para verlas también en `nataruswai@gmail.com`, configurar el reenvío en Gmail.
- Prueba del formulario con la clave nueva: la consulta llegó a `grupotecnico86@gmail.com`.
