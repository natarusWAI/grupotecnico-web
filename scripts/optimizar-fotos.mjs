// Convierte los originales de fotos/ (no se suben al repo) a .webp livianos en public/uploads,
// y genera logo, favicons y la imagen para redes. Uso: npm run fotos
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';

const IN = 'fotos';
const OUT = 'public/uploads';
const MAX_KB = 200;

const fotos = [
  { src: '1 Portada home.jpg', name: 'hero', widths: [1920, 960] },
  { src: '2 Lavarropas.jpg', name: 'lavarropas', widths: [1200, 600] },
  { src: '3 Heladera.png', name: 'heladeras', widths: [1200, 600] },
  { src: '4 Secarropas.jpg', name: 'secarropas', widths: [1200, 600] },
];

await mkdir(OUT, { recursive: true });

// Baja la calidad hasta que el archivo quede por debajo de MAX_KB.
async function webp(input, out, width) {
  for (let quality = 80; quality >= 40; quality -= 5) {
    const info = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(out);
    if (info.size / 1024 < MAX_KB) return { ...info, quality };
  }
  throw new Error(`${out} no baja de ${MAX_KB} KB`);
}

for (const f of fotos) {
  for (const w of f.widths) {
    const out = `${OUT}/${f.name}-${w}.webp`;
    const info = await webp(`${IN}/${f.src}`, out, w);
    console.log(`${out}  ${info.width}×${info.height}  ${Math.round(info.size / 1024)} KB  (q${info.quality})`);
  }
}

// Logo para el header: se recorta el margen blanco y queda a 2x de 40 px de alto.
const logo = await sharp(`${IN}/Logo completo.png`).trim({ threshold: 20 }).toBuffer();
const logoInfo = await sharp(logo).resize({ height: 80 }).webp({ quality: 90 }).toFile(`${OUT}/logo.webp`);
console.log(`${OUT}/logo.webp  ${logoInfo.width}×${logoInfo.height}`);

// Favicons desde el isotipo.
const iso = await sharp(`${IN}/Isotipo sin fondo.png`).trim().toBuffer();
await sharp(iso).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/favicon.png');
await sharp(`${IN}/isotipo fondo blanco.png`).resize(180, 180).png().toFile('public/apple-touch-icon.png');

// Imagen para compartir en redes (1200×630): logo centrado sobre blanco.
const ogLogo = await sharp(logo).resize({ width: 1000 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([{ input: ogLogo, gravity: 'center' }])
  .png()
  .toFile('public/og-default.png');

for (const f of ['public/favicon.png', 'public/apple-touch-icon.png', 'public/og-default.png']) {
  console.log(`${f}  ${Math.round((await stat(f)).size / 1024)} KB`);
}
