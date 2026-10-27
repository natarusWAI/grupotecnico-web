# Campaña de búsqueda en Google Ads

Archivos para cargar con **Google Ads Editor** (programa gratis de Google). Las campañas quedan **en pausa**: se activan recién cuando GA4 registre los eventos clave (ver «Antes de activar»).

| Archivo | Qué crea |
|---|---|
| `1-campanas.csv` | 2 campañas de búsqueda con presupuesto diario, en pausa |
| `2-palabras-clave.csv` | 3 grupos de anuncios (Lavarropas, Secarropas, Heladeras) con sus palabras clave, en concordancia exacta y de frase |
| `3-negativas.csv` | Palabras negativas en las 2 campañas |
| `4-anuncios.csv` | 1 anuncio adaptable por grupo: 15 títulos (≤ 30 caracteres) y 4 descripciones (≤ 90) |

## Presupuesto: US$ 300 por mes

| Campaña | Por día | Por mes (×30,4) |
|---|---|---|
| Lavarropas y secarropas | US$ 5,40 | ~US$ 164 |
| Heladeras | US$ 4,40 | ~US$ 134 |

- Secarropas va como grupo dentro de la campaña de lavarropas, sin presupuesto propio. Se busca poco y solo gasta cuando alguien lo busca, así que no le saca mucho a lavarropas.
- **En verano** (diciembre a marzo) conviene invertir los montos: Heladeras US$ 5,40 y Lavarropas US$ 4,40.
- Google puede gastar hasta el doble del diario en un día puntual, pero en el mes no pasa de diario × 30,4.
- **Si la cuenta está en pesos uruguayos:** convertí los montos al tipo de cambio del día antes de importar (columna `Budget` de `1-campanas.csv`). La moneda se ve en Administrador → Configuración de la cuenta.

## 1. Limpiar la cuenta (en ads.google.com)

1. **Pausar** todas las campañas viejas. Pausar, no eliminar: así queda el historial.
2. **Objetivos → Conversiones → Resumen:** las acciones de conversión viejas (por ejemplo, las del WordPress o de Universal Analytics) pasarlas a **secundarias** o quitarlas. Si quedan como principales, Google las usa para optimizar y cuenta conversiones que ya no existen.
3. **Administrador → Configuración de la cuenta → Etiquetado automático:** activado (lo necesita GA4 para saber qué visita vino de un anuncio).
4. **Recomendaciones → Aplicar automáticamente:** desactivar todo. Si no, Google cambia palabras clave y presupuestos por su cuenta.

## 2. Importar con Google Ads Editor

1. Descargá Google Ads Editor (ads.google.com/intl/es/home/tools/ads-editor), entrá con la cuenta que administra Google Ads y descargá la cuenta 546-504-1046.
2. **Cuenta → Importar → Desde archivo**, de a uno y **en orden**: `1-campanas.csv`, `2-palabras-clave.csv`, `3-negativas.csv`, `4-anuncios.csv`.
3. En cada importación Editor muestra qué columna corresponde a qué campo. Si alguna figura sin asignar, elegila a mano (`Criterion Type` = tipo de concordancia; `Headline 1 position` = fijar el título en una posición).
4. Revisá los cambios (aparecen en la columna «Cambios pendientes») y tocá **Publicar**.

## 3. Ajustes que se hacen en la web de Google Ads

En cada campaña → Configuración:

- **Redes:** solo Red de Búsqueda de Google. Destildar «socios de búsqueda» y «Red de Display».
- **Ubicaciones:**
  - Incluir **Montevideo** (departamento) y, de Canelones: **Ciudad de la Costa, Paso Carrasco, La Paz, Las Piedras y Barros Blancos**.
  - Si alguna localidad no aparece en el buscador, usá «Radio» con un pin sobre ella (3 a 5 km).
  - Excluir **Pando**.
  - Opciones de ubicación: **«Presencia: personas que están o suelen estar en las ubicaciones incluidas»** (no «interés»).
- **Idioma:** español.
- **Horario de los anuncios:** lunes a viernes de 8:00 a 17:00 y sábados de 8:00 a 13:00, el mismo horario de atención. Más adelante se puede probar a la noche solo con WhatsApp.
- **Estrategia de oferta:** «Maximizar clics» con **límite de CPC máximo**. Para fijar el límite, mirá en Herramientas → Planificador de palabras clave el valor «Oferta para la parte superior de la página (rango alto)» de `service lavarropas` y `service heladeras` en Uruguay, y usá ese número.
- **Recursos creados automáticamente:** desactivados al principio, para que Google no invente textos (por ejemplo «service oficial», que no se puede decir).

Recursos (extensiones), a nivel de cuenta o de cada campaña:

| Recurso | Contenido |
|---|---|
| Enlaces a sitios | «Lavarropas» → `/reparacion-lavarropas/` · «Heladeras» → `/reparacion-heladeras/` · «Secarropas» → `/reparacion-secarropas/` · «Zonas que cubrimos» → `/zonas/` |
| Textos destacados | Visita en el día · Presupuesto sin costo · Garantía por escrito · Repuestos originales · Factura electrónica · Pagás con Mercado Pago |
| Fragmentos estructurados | Marcas: Samsung, LG, Whirlpool, Electrolux, Bosch, Ariston, Midea, James, Panavox, Enxuta · Servicios: Lavarropas, Heladeras, Secarropas |
| Llamada | 097 125 160, solo en el horario de los anuncios |
| Nombre y logotipo de la empresa | Grupo Técnico + `public/logo.png` |

Los enlaces a sitios llevan el dominio completo (`https://grupotecnico.com.uy/...`).

## 4. Antes de activar

- [ ] En GA4, `whatsapp_click`, `phone_click` y `generate_lead` marcados como eventos clave.
- [ ] En Google Ads, los 3 importados desde GA4 (Objetivos → Conversiones → Nueva → Importar → GA4 → Web): `generate_lead` y `whatsapp_click` como **principales**, `phone_click` como **secundaria**, recuento «Una».
- [ ] Las conversiones viejas pasadas a secundarias o quitadas.
- [ ] Campañas viejas en pausa.
- [ ] Con eso, activar las 2 campañas nuevas.

## 5. Después de lanzar

- **Primera semana:** cada 2 o 3 días, Palabras clave → **Términos de búsqueda**. Lo que no sirva (gente que busca comprar, otra ciudad, otro electrodoméstico) agregarlo como negativa.
- **Semanal (15 min):** términos de búsqueda, costo por conversión de cada grupo, anuncios con calificación «Deficiente».
- **Con 15 a 30 conversiones al mes:** pasar la estrategia a «Maximizar conversiones». Más adelante, a «CPA objetivo».
- **Mensual:** comparar los contactos que llegaron por Ads con los trabajos que realmente se hicieron. Conviene anotar en una planilla de qué canal vino cada cliente.

## Decisiones

- **Sin Drean, Patrick ni Philco** en palabras clave ni textos: se sacaron de las marcas de la web. Si se reparan igual, agregarlas.
- **«Repuestos», «venta», «comprar»** van como negativas: el negocio no vende repuestos.
- **Nunca decir «service oficial»** de una marca: no lo son, y Google puede rechazar el anuncio.
- Los 3 títulos que nombran el servicio van **fijados en la posición 1**, para que el anuncio siempre diga qué se repara. Los demás rotan.
- La página de destino es la del servicio, no la home: tiene WhatsApp, llamada y formulario arriba.
