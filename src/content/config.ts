import { defineCollection, z } from 'astro:content';

const planes = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    precio: z.number(),
    caracteristicas: z.array(z.string()),
    orden: z.number(),
  }),
});

const testimonios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    foto: z.string(),
  }),
});

export const collections = { planes, testimonios };