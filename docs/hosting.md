# Hosting: vista previa y definitivo

| | Fase 1: GitHub Pages | Fase 2: Cloudflare Pages (recomendado) |
|---|---|---|
| Costo | Gratis | Gratis (plan Free) |
| Dominio | usuario.github.io/grupotecnico-web | grupotecnico.com.uy |
| Indexación | Bloqueada (`PREVIEW=true`) | Abierta |
| Formulario | Web3Forms | Función propia + Resend (3.000 mails/mes gratis) |
| Redirecciones 301 | No (solo meta refresh) | Sí (`public/_redirects`) |
| CDN / HTTPS | Sí | Sí, con nodo en Sudamérica |

**Por qué Cloudflare Pages y no un hosting compartido:** la web es estática, así que no hay PHP ni base de datos que mantener o que puedan hackear; carga más rápido (mejor SEO y conversión) y permite funciones para el formulario. Alternativas equivalentes: Netlify o Vercel.

## Migración sin perder el mail
El dominio `.uy` sigue en tu registrador. El riesgo es el mail `contacto@grupotecnico.com.uy`:
1. Antes de tocar nada, exportá todos los registros DNS actuales (MX, SPF/TXT, DKIM, autodiscover). Pedíselos al hosting actual si hace falta.
2. Opción A (simple): en el DNS actual cambiá solo el registro `A`/`CNAME` de `grupotecnico.com.uy` y `www` hacia Cloudflare Pages. El mail no se toca.
3. Opción B (recomendada a mediano plazo): pasá los nameservers a Cloudflare, copiando antes todos los registros de mail.
4. Si el mail estaba en el mismo hosting que el WordPress, **no des de baja ese plan** hasta mover el mail (por ejemplo a Google Workspace o Zoho).

## Pasos
1. Cloudflare → Workers & Pages → Create → Pages → conectar el repo. Build: `npm run build`, output: `dist`, variables: `SITE=https://grupotecnico.com.uy`, `BASE=/`, `NODE_VERSION=24`, `RESEND_API_KEY`, `CONTACT_FROM`.
2. Resend: verificar el dominio (agrega registros DKIM/SPF, compatibles con el mail actual).
3. Panel → Ajustes → formulario → `cloudflare`.
4. Custom domain → `grupotecnico.com.uy` y `www`.
5. Search Console: verificar dominio, enviar `sitemap-index.xml`, revisar cobertura las 2 semanas siguientes.
6. Desactivar GitHub Pages (o dejarlo como staging).
