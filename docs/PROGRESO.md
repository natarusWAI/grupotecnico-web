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
- Login probado. Se borraron el worker de la cuenta vieja y el client secret original de la OAuth App.
- **Web3Forms:** clave nueva creada con `grupotecnico86@gmail.com` y cargada en `sitio.json`. Las consultas llegan solo a ese mail, sin reenvío (decisión del negocio).
- Prueba del formulario con la clave nueva: la consulta llegó a `grupotecnico86@gmail.com`.

## 2026-10-25 · Fase 5: preparación de la migración a Cloudflare Pages
- **DNS actual** (relevado con `dig`; el dominio y el cPanel los maneja un tercero, sin acceso nuestro):
  - NS `ns1/ns2.mauricioc.com`. `A` de la raíz y `www` → `66.225.201.22` (WordPress en cPanel).
  - MX `0 grupotecnico.com.uy` (mail en el mismo servidor), SPF con `+a +mx` y mailchannels, DKIM `default._domainkey`, DMARC `p=none`.
- **Mail:** `contacto@grupotecnico.com.uy` no se usa, se usa `grupotecnico86@gmail.com`. No se migra el mail del cPanel.
  - `email` y `contactForm.recipient` de `sitio.json` pasaron a `grupotecnico86@gmail.com` (pie, contacto, privacidad y schema).
- **Formulario:** queda Web3Forms (decisión del negocio). No se usa Resend; `functions/api/contacto.ts` queda por si algún día se cambia a `cloudflare`.
- **Dominio raíz:** Cloudflare Pages solo lo acepta si los nameservers pasan a Cloudflare, así que se va por la Opción B de `docs/hosting.md`.
- **Redirecciones** (`public/_redirects`): se relevó el sitemap de WordPress y se sumaron `/service-title-1..4`, `/map`, `/equipo`, `/marcas`, `/elementor-page-builder`, `/tag/*`, `/author/*`, `/portfolio/*` y `/feed`. Los destinos llevan barra final para no encadenar el 301 con el 308 de Pages. Probado con `wrangler pages dev`.
- **Revisión SEO con PREVIEW apagado** (build con `SITE=https://grupotecnico.com.uy`): sin fallas. Un `<h1>`, títulos ≤ 70 y descripciones ≤ 160 sin duplicados, canonical al dominio, robots con `Allow: /` y sitemap, JSON-LD válido, sin links internos rotos, imágenes < 200 KB.
  - Ojo: en una terminal sin `nvm use 24` el build falla por Node 22.23.3.
- **Pasos que faltan, en orden:**
  1. Cloudflare (cuenta `grupotecnico86`) → Workers & Pages → Create → Pages → conectar `natarusWAI/grupotecnico-web`. Build `npm run build`, salida `dist`, variables `SITE=https://grupotecnico.com.uy`, `BASE=/`, `NODE_VERSION=24`. Revisar el sitio en `*.pages.dev`.
  2. Cloudflare → Add a domain → `grupotecnico.com.uy` (plan Free). Borrar de la zona importada los registros del WordPress y del mail viejo. Agregar para que nadie mande mail falso con el dominio: MX nulo `0 .`, TXT `v=spf1 -all` y `_dmarc` `v=DMARC1; p=reject`.
  3. Pages → Custom domains → `grupotecnico.com.uy` y `www.grupotecnico.com.uy` (redirigir `www` a la raíz con una regla de redirección).
  4. Pedirle al tercero que cambie los nameservers del dominio en NIC.uy por los dos que da Cloudflare. Que no dé de baja el hosting hasta que la web nueva esté andando.
  5. Probar `/admin` en el dominio (el worker ya tiene `grupotecnico.com.uy` en `ALLOWED_DOMAINS`) y el formulario.
  6. Search Console (propiedad de dominio por TXT en Cloudflare), enviar `sitemap-index.xml`, inspeccionar home, servicios y posts. Cambiar el sitio web de la ficha de Google al dominio.
  7. GitHub Pages queda como vista previa (noindex).
- **Avance en Cloudflare (cuenta `grupotecnico86`):**
  - Proyecto de Pages `grupotecnico-web` andando en https://grupotecnico-web.pages.dev. Canonical, robots, redirecciones y formulario revisados en vivo.
  - Zona `grupotecnico.com.uy` creada en plan Free. Se borraron los 16 registros del cPanel y quedaron MX nulo, `v=spf1 -all` y DMARC `p=reject`.
  - Bot Preference Sync apagado para que no modifique el `robots.txt`.
  - Nameservers asignados: `lamar.ns.cloudflare.com` y `maria.ns.cloudflare.com`. El dominio no tiene DNSSEC.
- **En pausa:** el tercero perdió las credenciales de NIC.uy y está tratando de recuperarlas. Pages no deja agregar el dominio hasta que la zona esté activa.
- **Para retomar:**
  1. El tercero cambia los nameservers en NIC.uy a `lamar.ns.cloudflare.com` y `maria.ns.cloudflare.com` (y saca los de mauricioc.com). No da de baja el hosting todavía.
  2. Cuando la zona figure activa (llega un mail a grupotecnico86), agregar enseguida en Pages → Custom domains `grupotecnico.com.uy` y `www.grupotecnico.com.uy`. Hasta ese momento la web queda caída unos minutos.
  3. Verificar el dominio en vivo, `www` → raíz, `/admin` y el formulario. Después: Search Console y el sitio web de la ficha de Google.

## 2026-10-26 · Nameservers cambiados en NIC.uy
- Con las credenciales recuperadas se cambiaron los nameservers en NIC.uy a `lamar.ns.cloudflare.com` y `maria.ns.cloudflare.com`. NIC.uy confirmó el cambio.
- Al guardar, los servidores de `com.uy` todavía delegaban a `mauricioc.com`: NIC.uy publica la zona cada cierto tiempo. Siguen los pasos de «Para retomar» de la entrada anterior.
- 18:31: `com.uy` pasó a delegar a Cloudflare y la zona quedó activa (con «Check nameservers now»).
- Pages → Custom domains: `grupotecnico.com.uy` y `www.grupotecnico.com.uy` activos, con CNAME a `grupotecnico-web.pages.dev` creado por Pages y certificado hasta enero de 2027.
- Regla de redirección «www a la raíz» (template de Cloudflare, 301, conserva ruta y query). El aviso de «DNS no proxied» se ignoró: el CNAME de `www` ya está proxied.
- Probado contra Cloudflare:
  - Home, `/admin`, `robots.txt` y sitemap responden 200. Canonical al dominio, sin noindex.
  - Las URLs viejas, `/feed` y `/service-title-1` redirigen bien. `www` y `http` van con 301 a `https://grupotecnico.com.uy`.
- **Falta:**
  - ~~Probar el login de `/admin` y el formulario en el dominio~~: los dos andan (2026-10-26).
  - Search Console y el sitio web de la ficha de Google.
  - Recién después, avisarle al tercero que puede dar de baja el hosting.

## 2026-10-26 · Logo en alta resolución
- El negocio pasó el logo completo en PNG (2056×765, fondo transparente). Es el mismo diseño, con más resolución.
- `public/uploads/logo.webp` regenerado recortado a 539×120 (3× para el header de 40 px); el `<img>` pasa a 180×40.
- `public/og-default.png` (1200×630) rehecho desde el original: se ve más nítido al compartir en WhatsApp y redes.
- Nuevo `public/logo.png` (600 px) y campo `logo` en el JSON-LD de `LocalBusiness`.
- El pie sigue con el nombre en texto: el logo azul marino no se lee sobre el fondo `brand-900`. Favicon y apple-touch-icon siguen saliendo del isotipo vectorial.
- Pie: el nombre en texto pasó a ser el logo dentro de una tarjeta blanca (el negocio pasó una versión con fondo blanco). Se reusa `logo.webp` sobre fondo blanco, que da el mismo resultado sin otro archivo para descargar.
- Formulario probado en el dominio: llega a `grupotecnico86@gmail.com`. Un envío de prueba con datos de relleno («aca va el telefono») repetido varias veces lo rechazó el antispam de Web3Forms con 400 «Could not submit this form for security reasons»; con datos realistas anda.
- Login de `/admin` probado en el dominio: anda.
- **Para retomar (2026-10-27):**
  1. Search Console: propiedad de dominio, TXT en Cloudflare → DNS, enviar `sitemap-index.xml` e inspeccionar la home, los servicios y los posts.
  2. Cambiar el sitio web de la ficha de Google a `https://grupotecnico.com.uy/`.
  3. En un par de días, avisarle al tercero que puede dar de baja el WordPress y la zona de `mauricioc.com`.
  4. Fase 6: IDs de GA4 (y Google Ads / Meta si hay publicidad).

## 2026-10-27 · Search Console
- Propiedad de dominio `grupotecnico.com.uy` creada con la cuenta `grupotecnico86@gmail.com` y verificada por DNS en Cloudflare.
- Sitemap enviado: en una propiedad de dominio hay que poner la URL completa, `https://grupotecnico.com.uy/sitemap-index.xml`. Lo procesó bien: `sitemap-0.xml` con 13 URLs.
- Se pidió la indexación de las 13 URLs (home, 3 servicios, zonas, blog y 6 posts).
- `/reparacion-lavarropas/` figuraba indexada con 2 rutas de exploración con fallas: eran de la versión vieja de WordPress. La prueba en tiempo real da 1 elemento válido.
- **Para retomar:**
  1. En unos días, revisar en Indexación → Páginas que las URLs viejas de WordPress figuren como «Página con redirección» y no como 404.
  2. Cambiar el sitio web de la ficha de Google a `https://grupotecnico.com.uy/`.
  3. En un par de días, avisarle al tercero que puede dar de baja el WordPress y la zona de `mauricioc.com`.
  4. Fase 6: IDs de GA4 (y Google Ads / Meta si hay publicidad).

## 2026-10-27 · Fase 6: medición
- **GA4:** `ga4Id` = `G-DKR1MZTC1D` en `sitio.json`. Es la propiedad «GA4 - Grupo Técnico» (251611296), flujo web «Flujo 1» con `https://grupotecnico.com.uy`: la misma que usaba el WordPress, así que se conserva el historial.
- **Google Ads:** cuenta 546-504-1046. No se cargó `googleAdsId` (`AW-…`): las conversiones se importan desde GA4 vinculando las cuentas (ver abajo). Si más adelante se quiere remarketing o la etiqueta propia de Ads, cargar el `AW-…` en el panel.
- **Píxel de Meta:** no se activa, el negocio no tiene Facebook ni Instagram. El código ya manda `Contact` y `Lead` a `fbq` si algún día se carga.
- **Cambios:**
  - La vista previa de GitHub Pages (`PREVIEW=true`) no carga gtag, para no mezclar visitas de prueba con las reales.
  - Se sacó `generate_lead` de `/gracias`: el formulario se envía por `fetch` sin salir de la página, así que a `/gracias` solo se llegaba entrando directo y contaba consultas falsas.
  - **Bug corregido:** el script de `ContactForm.astro` se repite por cada formulario de la página y enganchaba otra vez los ya enganchados. En la home (2 formularios), el de arriba mandaba **cada consulta dos veces** a Web3Forms (dos mails) y dos `generate_lead`. Puede explicar el rechazo del antispam en la prueba del 2026-10-26. Ahora cada formulario se engancha una sola vez (`data-bound`).
- **Verificación** (Chromium con Playwright contra el build de producción, WhatsApp y Web3Forms simulados): llegan a GA4 `page_view`, `whatsapp_click`, `phone_click` y un solo `generate_lead`, y Web3Forms recibe un solo envío. Esos eventos de prueba quedaron en la propiedad real (son pocos, no afectan).
- **Para el dueño, en GA4** (Administrar → Visualización de datos → Eventos), cuando los eventos aparezcan en la lista (hasta 24 h después de la primera visita real):
  1. Marcar como **evento clave** (la estrella) `whatsapp_click`, `phone_click` y `generate_lead`.
  2. Opcional: Administrar → Definiciones personalizadas → crear la dimensión de evento `method` para ver en los informes si el lead vino del formulario.
  3. Para probar en vivo: Administrar → DebugView, abriendo la web con https://tagassistant.google.com.
- **Para el dueño, en Google Ads:**
  1. ~~Vincular GA4 con Google Ads~~: la cuenta 546-504-1046 ya estaba vinculada desde el 4 nov 2020, con publicidad personalizada habilitada.
  2. Google Ads → Objetivos → Conversiones → Nueva acción de conversión → Importar → Propiedades de Google Analytics 4 → Web → elegir los 3 eventos clave.
  3. Dejar `generate_lead` y `whatsapp_click` como conversión **principal** y `phone_click` como **secundaria** (el clic en «Llamar» no garantiza que la llamada se haga). Recuento: «Una» por clic.
- **Pendiente:** la Fase 7 (publicidad) arranca cuando GA4 muestre los eventos clave con visitas reales.

## 2026-10-27 · Fase 7: campaña de Google Ads preparada
- Sitio web de la ficha de Google cambiado a `https://grupotecnico.com.uy/` (lo hizo el dueño).
- **Decisiones del negocio:** US$ 300 por mes, sobre todo en lavarropas y heladeras (secarropas es de nicho). Las campañas viejas de la cuenta 546-504-1046 se pausan y se arranca de cero.
- **`docs/ads/`:** 4 CSV para Google Ads Editor (campañas en pausa, 80 palabras clave, 43 negativas por campaña, 1 anuncio adaptable por grupo) y `README.md` con el paso a paso: limpiar la cuenta, importar, ubicaciones, horario, recursos, checklist antes de activar y rutina.
  - 2 campañas: «Lavarropas y secarropas» US$ 5,40/día (secarropas como grupo, sin presupuesto propio) y «Heladeras» US$ 4,40/día. En verano se invierten.
  - Largos de títulos (≤ 30) y descripciones (≤ 90) verificados con un script.
  - Horario de anuncios igual al de atención (L-V 8-17, sáb 8-13). Pando excluido.
- **`docs/publicidad-uruguay.md` corregido:** tenía Drean entre las marcas, horario 8:30-18:30, faltaban Las Piedras, Barros Blancos y secarropas, y una sección de Meta que no aplica.
- **Confirmado por el negocio:** no reparan Drean, Patrick ni Philco, y no hacen carga de gas en heladeras. Las cuatro van como negativas, se sacó la palabra clave «carga de gas heladera» y se sacó la FAQ «¿Hacen carga de gas?» de `/reparacion-heladeras`, que decía que sí.
- **Pendiente:** importar con Ads Editor y activar cuando estén los eventos clave (ver recordatorio de conversiones).
- **Cuenta de Google Ads limpia (2026-10-27):** campañas viejas en pausa; quitadas las conversiones del WordPress («Click - Botón Enviar Formulario», «Click - Botón WhatsApp», «Click - Botón Llamada»). Quedan las de Google («Clicks to call» y las acciones locales de la ficha). Moneda USD, etiquetado automático activado, aplicación automática apagada. `grupotecnico86@gmail.com` es el único usuario y es Admin.
- **Campaña publicada en pausa (2026-10-27)** con Google Ads Editor: 2 campañas, 3 grupos, 79 palabras clave, 96 negativas, 3 anuncios. Los detalles de la importación quedaron en `docs/ads/README.md`. Falta en la web de Google Ads: ubicaciones (Editor puso «Uruguay»), horario, límite de CPC (propuesto US$ 0,70: el CPC medio histórico de la cuenta es US$ 0,36) y recursos.
- **Configuración en la web de Google Ads (2026-10-27):** ubicaciones (Montevideo, Ciudad de la Costa, Paso Carrasco, La Paz, Las Piedras, Barros Blancos; Pando excluido; opción «Presencia»), horario L-V 8-17 y sáb 8-13, «Maximizar clics» con CPC máximo US$ 0,70, sin socios de búsqueda ni Display, IA Max apagado, extensiones a nivel de cuenta.
- **GA4 en vivo:** `whatsapp_click` llegó en tiempo real desde un celular. También llega `click` (clic de salida automático): no se marca como clave porque duplicaría. Había 3 eventos clave viejos del WordPress («a», «Botón», «clic») para desmarcar.
- **Para retomar:** marcar los eventos clave cuando aparezcan en «Eventos recientes» (GA4 no deja crearlos a mano por nombre), importarlos en Ads y activar las 2 campañas.

## 2026-10-28 · Conversiones importadas y campañas activas
- **GA4:** `whatsapp_click`, `phone_click` y `generate_lead` marcados como eventos clave; desmarcados los viejos del WordPress («a», «Botón», «clic»). Recuento de los tres en «Una vez por sesión»: para eventos importados, Ads no deja cambiar el Count y lo toma de GA4.
- `grupotecnico86@gmail.com` confirmado como Administrador en GA4.
- **Google Ads:** importados desde GA4 (New conversion → Conversions on a website → URL → tildar la propiedad «GA4 - Grupo Técnico», sin «Google tag»).
  - `generate_lead` → objetivo «Submit lead form», principal.
  - `whatsapp_click` → objetivo «Contact», principal.
  - `phone_click` → objetivo «Phone call lead», **secundaria**. Ads no deja crear un objetivo nuevo con una acción secundaria: se creó como principal, después se apagó «Account default» del objetivo y se pasó a secundaria.
  - «Clicks to call» (de Google) queda principal pero fuera de los objetivos de la cuenta: «Contacts» es «website only».
  - No tildar `purchase` (evento de fábrica de GA4) ni la otra propiedad que aparece en la cuenta de Google del usuario.
- **Recursos revisados:** el sitelink viejo «Contacto» apunta a `https://grupotecnico.com.uy/#contacto` (la web nueva no tiene `/contacto`); sacado el sitelink de heladeras repetido. El negocio confirma que la visita es gratuita, así que «Visita Gratuita» queda.
- **Campañas «Búsqueda - Lavarropas y secarropas» y «Búsqueda - Heladeras» activadas.**
- **Seguimiento:** la primera semana, cada 2-3 días revisar Keywords → Search terms para sumar negativas. Con 15-30 conversiones por mes, pasar a «Maximizar conversiones».

## 2026-10-28 · LCP en celular
- PageSpeed (celular) daba 84 de rendimiento con LCP de 4,2 s. El LCP era la foto de fondo del hero, que en celular casi no se ve bajo el degradado.
- La foto ahora va en un `<picture>` que solo la descarga desde `md` (768 px); en celular queda el degradado sobre `brand-900`. En PC no cambia.
- Lighthouse local (celular, 2 corridas): LCP de 1,3-1,4 s a 0,8 s, y el LCP pasa a ser el `<h1>`. PageSpeed varía bastante entre corridas porque mide desde servidores de Google lejos de Uruguay.

## 2026-10-29 · Calidad del anuncio de Heladeras
- Google marcaba «Average» por faltar palabras clave en los títulos. Cambiados 7 títulos (en Ads y en `docs/ads/4-anuncios.csv`): «Garantía por Escrito», «Especialistas en Inverter», «Factura Electrónica», «Reparamos en tu Casa», «Mvd y Ciudad de la Costa», «Técnicos Desde 1986» y «Pagá con Mercado Pago» → «¿Tu Heladera No Enfría?», «Service Heladeras Inverter», «Técnico en Refrigeración», «Service Heladera a Domicilio», «Service Heladeras Montevideo», «Freezer No Enfría» y «Arreglo de Heladeras». Factura y Mercado Pago siguen en la descripción 3.
- Siguió en «Average» hasta sacar los pins de los 3 títulos de posición 1: ahí subió a «Good».
- **Lavarropas:** mismo arreglo. «Garantía por Escrito», «Factura Electrónica», «Reparamos en tu Casa», «Técnicos Desde 1986», «Mvd y Ciudad de la Costa» y «Pagá con Mercado Pago» → «¿Tu Lavarropas No Centrifuga?», «Lavarropas No Desagota», «Arreglo de Lavarropas», «Lavarropas No Carga Agua», «Service Lavarropas Montevideo» y «Lavarropas Pierde Agua», y sin pins: «Good». Secarropas también sin pins y en «Good».
- **Imágenes cargadas (2026-10-29):** generadas con IA, 4 escenas por grupo (Heladeras, Lavarropas, Secarropas) en 1200×628 y 1200×1200, sin texto ni logos, en casa y no en taller. Prompts en la conversación del 2026-10-29. Reemplazarlas por fotos reales de trabajos cuando haya.

## 2026-10-31 · Primera revisión de términos de búsqueda
- **Search Console:** el informe de Indexación → Páginas todavía dice «Processing data». Las 301 de las URLs viejas del WordPress se probaron con curl contra el sitio en vivo y andan. Se vuelve a mirar el 2026-11-03, antes de pedir la baja del WordPress.
- **Google Ads, 28 al 31/10:** 33 clics, US$ 21,97 y 2 conversiones (US$ 11 cada una). Casi todos los términos de búsqueda sirven; no se coló ninguna de las negativas que ya estaban.
- **Confirmado por el negocio:** reparan General Electric (agregada a `brands` en `sitio.json`) y heladeras comerciales; no reparan aire acondicionado ni cámaras de frío.
- **Negativas nuevas**, cargadas en Google Ads el mismo día (también en `docs/ads/3-negativas.csv`): «oficial» en las dos campañas; «aire acondicionado», «aires acondicionados», «split», «camara frigorifica», «camaras frigorificas» y «camara de frio» en Heladeras.
- **En observación:** las búsquedas tipo «por qué mi freezer no enfría» (4 clics, unos US$ 2,50) y «tecnicos en refrigeración» (3 clics, US$ 2,04). Si en 2 semanas no convierten, se recortan.
