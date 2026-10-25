# SEO local para Uruguay

Para un servicio a domicilio, lo que más clientes trae es aparecer en el **mapa de Google** (Local Pack) y en las búsquedas "reparación de X en Montevideo". La web ayuda, pero la ficha de Google pesa igual o más.

## 1. Google Business Profile (lo primero, gratis)
- Crear o reclamar la ficha "Grupo Técnico". Categoría principal: **Servicio de reparación de electrodomésticos**. Secundarias: reparación de lavarropas, reparación de refrigeradores.
- Como van a domicilio: configurarla como **negocio de área de servicio**. Si no atienden público en Eduardo Pondal 704, ocultar la dirección. Agregar áreas (máx. 20) según `coverage` de `sitio.json`: Montevideo, Ciudad de la Costa, Paso Carrasco, Las Piedras, La Paz, Barros Blancos. Pando ciudad no.
- Nombre, dirección y teléfono (NAP) **idénticos** a la web (`sitio.json`).
- Horario, atributos de pago (no hay atributo de factura ni de Mercado Pago: van en la descripción y en los servicios), servicios con descripción, fotos reales (técnicos, camioneta, reparaciones) cada mes.
- **Reseñas:** es el factor que más pesa. Mandar el link de reseña por WhatsApp después de cada trabajo. Responder todas.
- Publicaciones semanales (pueden ser el mismo post del blog resumido).

## 2. La web (ya implementado)
- Títulos y descripciones con servicio + "Montevideo" + diferencial.
- Schema `LocalBusiness` con `areaServed`, horario y teléfonos; `Service` y `FAQPage` por servicio; `BlogPosting`.
- Una página por servicio (mismas URLs que ya rankean). Una página de zonas con los barrios.
- Sitemap, robots, canonical, `lang="es-UY"`, Open Graph para que se vea bien al compartir por WhatsApp.
- Velocidad: sitio estático, sin WordPress ni plugins.

**No** hacer 30 páginas "reparación de lavarropas en Malvín / Pocitos / …" con el mismo texto: Google las penaliza. Si más adelante se hace alguna, que tenga contenido propio real (trabajos hechos en esa zona, fotos, reseñas de vecinos).

## 3. Citaciones y enlaces locales
Misma NAP en: Páginas Amarillas Uruguay, Facebook, Instagram, Bing Places, Apple Business Connect, Mercado Libre Servicios (si aplica), directorios de Ciudad de la Costa. Pedir enlace a proveedores o marcas con las que trabajan.

## 4. Calendario de blog (1 post cada 2 semanas)
Buscar con intención real. Primeros 12:
1. Mi lavarropas no centrifuga: causas y qué podés revisar
2. La heladera no enfría pero el freezer sí: por qué pasa
3. Códigos de error de lavarropas Samsung (y cuáles necesitan técnico)
4. ¿Conviene reparar o cambiar el lavarropas? Cuentas con precios de Uruguay
5. Heladera no frost hace hielo atrás: la resistencia de descongelamiento
6. Cómo limpiar el filtro del lavarropas paso a paso
7. Cuánto gasta una heladera vieja: consumo y tarifa de UTE
8. Lavarropas que pierde agua: 5 causas comunes
9. Ruido en la heladera: cuáles son normales y cuáles no
10. Cómo cuidar el lavarropas con el agua de Montevideo (sarro)
11. Códigos de error de lavarropas LG
12. Garantía de una reparación: qué cubre y por qué importa el repuesto original

## 5. Medición
Search Console (consultas, clics, páginas), GA4 (eventos `whatsapp_click`, `phone_click`, `generate_lead`) y las estadísticas de la ficha de Google (llamadas, cómo llegar, clics al sitio). Revisar una vez por mes.
