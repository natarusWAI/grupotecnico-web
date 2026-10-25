// Fase 2 (hosting definitivo en Cloudflare Pages): recibe el formulario y lo envía por mail con Resend.
// El mail de destino se lee de src/content/settings/sitio.json (contactForm.recipient), editable desde /admin.
// Variables en Cloudflare: RESEND_API_KEY, CONTACT_FROM y (opcional) TURNSTILE_SECRET_KEY.
import settings from '../../src/content/settings/sitio.json';

interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM: string;
  TURNSTILE_SECRET_KEY?: string;
}

const esc = (v: FormDataEntryValue | null) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const form = await request.formData();
  if (form.get('botcheck')) return Response.json({ ok: true }); // honeypot: bot, se ignora en silencio

  if (env.TURNSTILE_SECRET_KEY) {
    const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: String(form.get('cf-turnstile-response') ?? '') }),
    }).then((r) => r.json() as Promise<{ success: boolean }>);
    if (!check.success) return Response.json({ ok: false, error: 'captcha' }, { status: 400 });
  }

  const required = ['nombre', 'telefono', 'mensaje'];
  if (required.some((k) => !String(form.get(k) ?? '').trim())) {
    return Response.json({ ok: false, error: 'faltan datos' }, { status: 400 });
  }

  const html = `
    <h2>${esc(settings.contactForm.subject)}</h2>
    <p><b>Nombre:</b> ${esc(form.get('nombre'))}</p>
    <p><b>Teléfono:</b> ${esc(form.get('telefono'))}</p>
    <p><b>Zona:</b> ${esc(form.get('zona'))}</p>
    <p><b>Equipo:</b> ${esc(form.get('equipo'))}</p>
    <p><b>Mensaje:</b><br>${esc(form.get('mensaje')).replace(/\n/g, '<br>')}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [settings.contactForm.recipient],
      subject: `${settings.contactForm.subject} · ${String(form.get('equipo') ?? '')} · ${String(form.get('zona') ?? '')}`,
      html,
    }),
  });
  if (!res.ok) return Response.json({ ok: false, error: 'envio' }, { status: 502 });
  return Response.json({ ok: true });
};
