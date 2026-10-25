import { getEntry } from 'astro:content';

export async function getSettings() {
  const entry = await getEntry('settings', 'sitio');
  if (!entry) throw new Error('Falta src/content/settings/sitio.json');
  return entry.data;
}

/** Años desde la fundación, calculados al publicar la web. */
export function yearsExperience(foundingYear: number) {
  return new Date().getFullYear() - foundingYear;
}

/** Ruta interna respetando BASE (necesario en GitHub Pages). */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string) {
  const digits = number.replace(/\D/g, '').replace(/^0/, '');
  return `tel:+598${digits}`;
}
