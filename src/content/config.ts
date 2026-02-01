import { defineCollection, z } from 'astro:content';

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional()
  })
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    status: z.string().optional()
  })
});

export const collections = { updates, projects };
