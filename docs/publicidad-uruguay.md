# Publicidad en Uruguay (fase 7)

Requisito previo: la Fase 6 tiene que medir bien los clics a WhatsApp, llamadas y formularios. Sin eso no se puede saber qué anuncio trae clientes.

## Qué canales y en qué orden

| Prioridad | Canal | Por qué | Presupuesto |
|---|---|---|---|
| 1 | **Google Business Profile** | Gratis, aparece en el mapa. Es la base de todo lo demás. | US$ 0 |
| 2 | **Google Ads, red de búsqueda** | Captura a quien ya tiene el lavarropas roto y busca hoy. La intención más alta. | US$ 300/mes (decisión del negocio, 2026-10-27) |
| 3 | Remarketing de Google | A quien visitó la web y no escribió. Barato con presupuesto bajo. | cuando la búsqueda funcione |
| 4 | Google Ads **Performance Max** con objetivo local | Solo con +30 conversiones/mes medidas en búsqueda. | luego |

**Meta (Facebook/Instagram): no por ahora.** El negocio no tiene página ni cuenta. Si algún día se abren, la opción es una campaña «clic a WhatsApp» con videos de un técnico real; el código de la web ya manda `Contact` y `Lead` al píxel si se carga `metaPixelId`.

**No disponible en Uruguay:** los anuncios de Servicios Locales de Google (Local Services Ads, «Google Garantizado») solo funcionan en EE. UU., Canadá y algunos países de Europa.

## Google Ads: campaña de búsqueda

Lista para cargar en **`docs/ads/`**: CSV para Google Ads Editor y el paso a paso (`docs/ads/README.md`). Resumen:

- **Estructura:** 2 campañas. «Lavarropas y secarropas» (US$ 5,40/día) con un grupo por servicio, y «Heladeras» (US$ 4,40/día). Secarropas no lleva presupuesto propio porque se busca poco. En verano se invierten los montos.
- **Palabras clave por intención:** servicio («service lavarropas»), zona («… Ciudad de la Costa»), falla («heladera no enfría») y marca («service lavarropas Samsung»). Concordancia exacta y de frase; la amplia solo con conversiones medidas y Smart Bidding.
- **Negativas desde el día 1:** repuestos, venta, comprar, usado, manual, curso, empleo y las ciudades fuera de zona (incluida Pando).
- **Ubicación:** Montevideo + Ciudad de la Costa, Paso Carrasco, La Paz, Las Piedras y Barros Blancos. Opción «Presencia».
- **Horario:** el de atención, lunes a viernes de 8 a 17 y sábados de 8 a 13.
- **Anuncios:** los diferenciales reales (visita en el día, presupuesto sin costo, en el domicilio, repuestos originales, garantía de hasta 2 años, factura electrónica, Mercado Pago, desde 1986). Nunca «service oficial» de una marca.
- **Conversiones:** `generate_lead` y `whatsapp_click` principales, `phone_click` secundaria, importadas de GA4.
- **Puja:** «Maximizar clics» con CPC máximo al principio; «Maximizar conversiones» con 15-30 conversiones al mes; después «CPA objetivo».
- **Página de destino:** la del servicio, no la home.

## Otras opciones a evaluar
- **YouTube Shorts**, cuando haya videos reales de trabajos.
- **Microsoft Ads (Bing)**: importa la campaña de Google en 5 minutos; poco volumen en Uruguay pero CPC más bajo.
