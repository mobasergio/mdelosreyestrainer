import { defineCollection, z } from 'astro:content';

const testimonios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    foto: z.string(),
    fecha: z.coerce.date(),
  }),
});

const planes = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    precio: z.number(),
    caracteristicas: z.array(z.string()),
    orden: z.number(),
  }),
});

export const collections = { testimonios, planes };