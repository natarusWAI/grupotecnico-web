# Publicidad en Uruguay (fase 7)

Requisito previo: la Fase 6 tiene que medir bien los clics a WhatsApp, llamadas y formularios. Sin eso no se puede saber qué anuncio trae clientes.

## Qué canales y en qué orden

| Prioridad | Canal | Por qué | Presupuesto inicial sugerido* |
|---|---|---|---|
| 1 | **Google Business Profile** | Gratis, aparece en el mapa. Es la base de todo lo demás. | US$ 0 |
| 2 | **Google Ads, red de búsqueda** | Captura a quien ya tiene el lavarropas roto y busca hoy. La intención más alta. | US$ 10-15/día |
| 3 | **Meta (Facebook/Instagram), "clic a WhatsApp"** | En Uruguay WhatsApp es el canal natural. Sirve para recordación en las zonas y para ofertas de temporada. | US$ 5/día |
| 4 | Google Ads **Performance Max** con objetivo local | Solo cuando la búsqueda ya tenga +30 conversiones/mes medidas. | luego |

\* Son estimaciones para arrancar y aprender en 4-6 semanas, no datos medidos. Confirmar costos por clic reales con el **Planificador de palabras clave** de Google Ads antes de fijar el presupuesto.

**No disponible en Uruguay:** los anuncios de Servicios Locales de Google (Local Services Ads, "Google Garantizado") solo funcionan en EE. UU., Canadá y algunos países de Europa.

## Google Ads: campaña de búsqueda

**Estructura:** 1 campaña por servicio (Lavarropas, Heladeras) para controlar el presupuesto de cada uno. Grupos de anuncios por intención:
- *Servicio:* service lavarropas, reparación de lavarropas, arreglo de lavarropas, técnico de lavarropas, service de heladeras, técnico de heladeras, reparación de heladeras, carga de gas heladera.
- *Con zona:* … Montevideo, … a domicilio, … Ciudad de la Costa, … Solymar.
- *Falla:* lavarropas no centrifuga, lavarropas no desagota, heladera no enfría, heladera no frost no enfría.
- *Marca:* service lavarropas Samsung / LG / Drean / Whirlpool. Atención: el texto del anuncio **no** puede decir "service oficial" de una marca si no lo son.

Concordancia: frase y exacta al inicio; amplia solo con conversiones medidas y Smart Bidding.

**Palabras negativas (desde el día 1):** repuestos, repuesto, venta, vendo, comprar, nuevo, usado, segunda mano, mercadolibre, precio lavarropas, ofertas, cuotas, manual, pdf, curso, aprender, trabajo, empleo, sueldo, alquiler, Buenos Aires, Argentina, Maldonado, Punta del Este, Salto, Paysandú, Rivera.

**Ubicación:** Montevideo (departamento) + localidades de Canelones: Ciudad de la Costa, Paso Carrasco, Colonia Nicolich, La Paz. Opción "**Presencia**: personas que están o suelen estar en la zona" (no "interés"). Excluir el resto de Canelones.

**Horario:** lunes a sábado 8:30-18:30 (que las llamadas lleguen cuando atienden). Aumento de puja +20% de 9 a 12 h.

**Anuncios (RSA):** usar los diferenciales en los títulos (≤ 30 caracteres):
- Visita en el Día Sin Costo
- Presupuesto Gratis a Domicilio
- Repuestos 100% Originales
- Hasta 2 Años de Garantía
- Pagá con Mercado Pago
- Factura Electrónica
- Más de 35 Años de Experiencia
- Service de Lavarropas Montevideo

**Recursos (extensiones):** llamada (con el celular, solo en horario), ubicación (vinculada a la ficha), enlaces a lavarropas/heladeras/zonas/contacto, textos destacados ("Sin costo de visita", "Garantía por escrito"), fragmentos estructurados (Marcas: …).

**Página de destino:** la página del servicio (no la home): tiene formulario y WhatsApp arriba.

**Conversiones:** importar de GA4 `generate_lead`, `whatsapp_click` y `phone_click`, más "llamadas desde anuncios" (> 60 s). Puja: empezar con *Maximizar clics* con CPC máximo la primera semana; pasar a *Maximizar conversiones* con 15-30 conversiones; después *CPA objetivo*.

**Rutina semanal (15 min):** revisar términos de búsqueda y agregar negativas, pausar anuncios con CTR bajo, mirar costo por contacto. Mensual: comparar contactos de Ads vs. trabajos realmente hechos (anotar en una planilla de qué canal vino cada cliente).

## Meta Ads: clic a WhatsApp
- Objetivo **Interacción → Mensajes (WhatsApp)**. Ubicación: radio de ~10 km sobre Montevideo y Ciudad de la Costa, 28-65 años.
- Creatividades: video vertical de 15 s de un técnico real reparando + "Visita en el día, presupuesto sin costo". Fotos de antes/después. Reseñas reales.
- Mensaje de bienvenida en WhatsApp Business con respuestas rápidas: barrio, equipo, marca, falla, foto.
- Temporada: en verano empujar heladeras ("¿Tu heladera no enfría con este calor?"); en invierno, lavarropas/secarropas.

## Otras opciones a evaluar
- **Remarketing** (Google y Meta) a quien visitó la web y no escribió: barato y efectivo con presupuesto bajo.
- **YouTube Shorts** con los mismos videos, cuando haya material.
- **Microsoft Ads (Bing)**: importa la campaña de Google en 5 minutos; poco volumen en Uruguay pero CPC más bajo.

## Prompt para Claude Code (fase 7)
```
Leé docs/publicidad-uruguay.md. Generá en docs/ads/ los archivos para cargar la campaña de búsqueda
de Google Ads con Google Ads Editor (CSV): campañas, grupos, palabras clave, negativas, anuncios RSA
(títulos ≤ 30, descripciones ≤ 90, contá los caracteres) y recursos. Usá solo los diferenciales reales
de CLAUDE.md. Después armá 5 textos y guiones de video para Meta clic a WhatsApp.
```
