# Investigación y decisiones (25/10/2026)

## Web actual (grupotecnico.com.uy)
- WordPress con Site Kit y un plugin "Call Now Button". Páginas: Inicio, Reparación de Lavarropas, Reparación de Heladeras, Blog (2 posts de 2020), Contacto.
- Datos: Enrique Martínez 1631; tel. 2358 2250, 097 125 160, 097 498 778; contacto@grupotecnico.com.uy; lunes a sábado 9-19.
- Problemas: la meta description de lavarropas es texto de relleno ("Nullam ut tempor eros…"), las marcas solo están en una imagen (Google no las lee), no hay FAQ ni schema, la garantía dice 1 año (ahora es 1 y 2), no hay WhatsApp, el blog está quieto desde 2020.

## Stack elegido
| Necesidad | Elección | Por qué | Alternativas descartadas |
|---|---|---|---|
| Generador | **Astro 7** estático | HTML puro sin JS innecesario → máxima velocidad y SEO. Colecciones de contenido con validación. | Next.js (más complejo para un sitio de este tamaño), WordPress (lento, mantenimiento, seguridad) |
| Estilos | **Tailwind 4** | Rápido de iterar con Claude Code, CSS mínimo en producción | — |
| Admin / blog | **Sveltia CMS** (basado en Git) | Gratis, sin base de datos, funciona en GitHub Pages, login con GitHub, editor en español. Reemplazo moderno y más rápido de Decap/Netlify CMS. | Decap CMS (más lento, mantenimiento irregular), TinaCMS (requiere su nube), CMS headless pagos |
| Formulario fase 1 | **Web3Forms** | Gratis 250 envíos/mes, sin servidor, con hCaptcha | Formspree (50/mes gratis) |
| Formulario fase 2 | **Cloudflare Pages Function + Resend** | Mail de destino editable desde el panel, sin límites prácticos | — |
| Hosting final | **Cloudflare Pages** | Gratis, CDN, 301 reales, funciones | Netlify, Vercel, hosting compartido |

## Mejores prácticas de Claude Code aplicadas (del documento compartido)
- **CLAUDE.md corto**, solo con lo que el modelo no puede descubrir leyendo el código (reglas del negocio, zona, tono).
- **Procedimientos en skills** que se cargan bajo demanda (`.claude/skills/`): nuevo post, nueva página de servicio, revisión SEO.
- **Lo obligatorio en hooks**, no en instrucciones: el hook `Stop` corre `astro check` + `build` y devuelve **solo los errores** (backpressure eficiente en contexto).
- **Validación que el agente puede leer:** esquemas Zod en las colecciones; si un título supera 70 caracteres, el build falla con un mensaje claro.
- **Investigar → planificar → implementar** por fases (`docs/PLAN.md`), con `/clear` entre fases y un archivo de progreso como memoria entre sesiones (`docs/PROGRESO.md`).
- Empezar simple y agregar configuración solo cuando algo falle de verdad.

## Zona de cobertura
- El **Peaje de Pando** está en el km 33 de la Ruta Interbalnearia, pasando el puente del arroyo Pando (Ciudad de la Costa queda antes). Por eso la zona costera llega hasta El Pinar / Médanos de Solymar.
- **La Paz** (Canelones) por Ruta 5, pasando Colón. Las Piedras queda fuera (confirmar).

## Fuentes
- [Web actual](https://grupotecnico.com.uy/) y [página de lavarropas](https://grupotecnico.com.uy/reparacion-lavarropas)
- [MTOP: peaje Pando, km 33 Ruta Interbalnearia](https://www.gub.uy/ministerio-transporte-obras-publicas/comunicacion/comunicados/reduccion-carriles-peaje-pando-remodelacion)
- [Web3Forms: precios y límites](https://web3forms.com/pricing)
- [Sveltia CMS](https://github.com/sveltia/sveltia-cms) y [autenticador para Cloudflare Workers](https://github.com/sveltia/sveltia-cms-auth)
- [Sveltia CMS en GitHub Pages (Chris Ayers)](https://dev.to/chris_ayers/headless-cms-on-github-pages-37jo)
- [Comparativa de CMS para Astro 2026 (Bitdoze)](https://www.bitdoze.com/best-headless-cms-for-astro/)
- [Países con Local Services Ads (Ranktracker)](https://www.ranktracker.com/es/blog/are-google-local-service-ads-available-in-your-area-find-out-here/)
