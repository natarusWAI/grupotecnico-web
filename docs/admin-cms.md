# Panel de administración (/admin)

Usamos **Sveltia CMS**: un editor visual que guarda los cambios como commits en GitHub. No necesita base de datos ni servidor, sirve igual en GitHub Pages y en Cloudflare. Desde el panel se edita:

- **Ajustes de la web:** número y mensaje de WhatsApp, mostrar/ocultar botón, mail y asunto del formulario, teléfonos, horario, zonas, marcas, IDs de Analytics/Ads/Meta.
- **Blog:** crear, editar, programar como borrador, subir imágenes.
- **Servicios:** textos, fallas, preguntas frecuentes.

Cada guardado republica la web sola (1-2 min).

## Quién puede entrar
Cualquier usuario de GitHub con permiso de escritura en el repo. Para sumar a alguien: repo → Settings → Collaborators. No hace falta que sepa Git.

## Login (una sola vez, ~20 min, gratis)
1. Cuenta gratis en Cloudflare. Abrí https://github.com/sveltia/sveltia-cms-auth y usá el botón **Deploy to Cloudflare Workers**. Anotá la URL del worker (ej. `https://sveltia-cms-auth.tucuenta.workers.dev`).
2. GitHub → Settings → Developer settings → **OAuth Apps → New**. Homepage: la URL de la web. Callback: `<URL del worker>/callback`. Guardá Client ID y genera un Client Secret.
3. En el worker (Cloudflare → Settings → Variables): `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (como secreto) y `ALLOWED_DOMAINS` = `nataruswai.github.io, grupotecnico.com.uy, *.grupotecnico.com.uy`.
4. En `public/admin/config.yml` descomentá `base_url:` con la URL del worker. Commit.
5. Entrá a `/admin` → **Sign in with GitHub**.

Para probar sin login mientras tanto: en la pantalla de Sveltia, "Work with local repository" (Chrome/Edge) editando la carpeta del proyecto en tu compu.

## Formulario: cómo cambiar el mail que recibe
- **Fase 1 (Web3Forms):** el destino es el mail con el que creaste la access key. Para cambiarlo, creá una key nueva en web3forms.com con el otro mail y pegala en el panel.
- **Fase 2 (Cloudflare):** elegí `cloudflare` en el panel y escribí el mail en "Mail que recibe las consultas". Es instantáneo.
