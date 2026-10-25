# Plan por fases

Cada fase trae el prompt para pegar en Claude Code. Antes de cada fase: `/clear`, y empezá en **modo plan** (Shift+Tab) para revisar el plan antes de que toque código. Al terminar, Claude anota en `docs/PROGRESO.md`.

---

## Fase 0 · Poner el proyecto en GitHub (vos, ~30 min)

1. Creá una cuenta en GitHub (si no tenés) y un repo **público** llamado `grupotecnico-web` (GitHub Pages gratis requiere repo público; con GitHub Pro puede ser privado).
2. En la carpeta del proyecto: `git init && git add . && git commit -m "Proyecto inicial" && git branch -M main && git remote add origin https://github.com/USUARIO/grupotecnico-web.git && git push -u origin main`.
3. Repo → **Settings → Pages → Source: GitHub Actions**. En 2 minutos la web queda en `https://USUARIO.github.io/grupotecnico-web/`.
4. En `public/admin/config.yml` cambiá `USUARIO/grupotecnico-web` por tu repo.
5. Creá la clave del formulario en https://web3forms.com (gratis, 250 envíos/mes) con el mail que recibe las consultas, y pegala en `sitio.json` → `contactForm.web3formsKey` (o después, desde el panel).

## Fase 1 · Datos reales y contenido base

```
Leé CLAUDE.md y docs/PROGRESO.md. Vamos a dejar los datos del negocio correctos.
Te paso: [número de WhatsApp, marcas con las que trabajan, qué repuestos tienen 1 año y cuáles 2 de garantía,
otros electrodomésticos que reparen (secarropas, lavavajillas, freezers, aires…), fotos reales en /fotos].
1. Actualizá src/content/settings/sitio.json y los servicios.
2. Optimizá las fotos a .webp < 200 KB en public/uploads y usalas en hero y servicios con <Image> o width/height.
3. Si hay servicios nuevos usá la skill pagina-servicio.
4. Mostrame capturas móvil y escritorio de la home.
```

## Fase 2 · Landing que vende

```
Leé CLAUDE.md. Objetivo: que la home convierta (WhatsApp, llamada o formulario) en el primer pantallazo del celular.
1. Revisá la home en 390px: el botón de WhatsApp y el de llamar deben verse sin scroll.
2. Agregá una sección de reseñas reales (te paso 5-8 reseñas de Google con nombre y barrio; no inventes ninguna).
3. Agregá una franja de confianza: años de experiencia, garantía por escrito, factura electrónica (logo DGI/CFE no), Mercado Pago.
4. Si te doy el logo, reemplazá favicon.svg y og-default.png.
5. Lighthouse móvil ≥ 95 en Performance, SEO y Accesibilidad. Reportá solo lo que falle.
```

## Fase 3 · Panel de administración con login

Ver `docs/admin-cms.md`. Prompt:

```
Leé docs/admin-cms.md. Guiame paso a paso para dejar /admin funcionando con login de GitHub
(Cloudflare Worker sveltia-cms-auth + OAuth App). Yo hago los clics; vos actualizá public/admin/config.yml
y verificá que editar el número de WhatsApp desde el panel genere un commit y republique la web.
```

## Fase 4 · SEO local

```
Leé docs/seo-local.md y usá la skill revision-seo.
1. Corregí lo que falle.
2. Escribí los primeros 4 posts del calendario de docs/seo-local.md con la skill nuevo-post.
3. Dame la checklist de lo que tengo que hacer yo en Google Business Profile y Search Console.
```

## Fase 5 · Migrar al hosting definitivo (Cloudflare Pages)

```
Leé docs/hosting.md. Vamos a pasar grupotecnico.com.uy de WordPress a Cloudflare Pages sin perder el mail
ni el posicionamiento. Primero relevá conmigo los registros DNS actuales (sobre todo MX/SPF/DKIM del mail),
después configurá Pages, el formulario con Resend (functions/api/contacto.ts, provider "cloudflare")
y las redirecciones 301. Hacé la revisión SEO final con PREVIEW apagado.
```

## Fase 6 · Medición

```
Configurá GA4 y Google Ads en sitio.json (te paso los IDs). Verificá con Tag Assistant que se registran
los eventos whatsapp_click, phone_click y generate_lead. Documentá en docs/PROGRESO.md cómo marcarlos
como conversiones en GA4 e importarlos en Google Ads. Si activamos el píxel de Meta, agregalo en Base.astro
leyendo metaPixelId de sitio.json.
```

## Fase 7 · Publicidad

Ver `docs/publicidad-uruguay.md`. Arrancar recién cuando la Fase 6 mida bien.
