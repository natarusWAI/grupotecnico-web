import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Todo lo editable desde /admin vive en src/content y se valida acá.
// Si cambiás un campo, actualizá también public/admin/config.yml.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Lavarropas', 'Heladeras', 'Consejos', 'Novedades']),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(70),
    seoDescription: z.string().max(160),
    shortName: z.string(),
    intro: z.string(),
    order: z.number().default(10),
    image: z.string().optional(),
    problems: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    businessName: z.string(),
    legalName: z.string().optional(),
    tagline: z.string(),
    foundingYear: z.number().int(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      department: z.string(),
      postalCode: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
    }),
    phones: z.array(z.object({ label: z.string(), number: z.string() })),
    email: z.email(),
    hours: z.object({
      text: z.string(),
      schedule: z.array(z.object({ days: z.array(z.string()), opens: z.string(), closes: z.string() })),
    }),
    whatsapp: z.object({
      enabled: z.boolean(),
      number: z.string().regex(/^598\d{8}$/, 'Formato 598 + 8 dígitos, sin 0 inicial ni espacios'),
      message: z.string(),
      label: z.string(),
    }),
    contactForm: z.object({
      provider: z.enum(['web3forms', 'cloudflare']),
      web3formsKey: z.string(),
      recipient: z.email(),
      subject: z.string(),
      successMessage: z.string(),
    }),
    coverage: z.string(),
    zones: z.array(z.object({ name: z.string(), areas: z.array(z.string()) })),
    brands: z.array(z.string()),
    warranty: z.object({ text: z.string() }),
    analytics: z.object({ ga4Id: z.string().optional(), googleAdsId: z.string().optional(), metaPixelId: z.string().optional() }),
    social: z.object({ facebook: z.string().optional(), instagram: z.string().optional(), googleBusiness: z.string().optional() }),
  }),
});

export const collections = { blog, servicios, settings };
