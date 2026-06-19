import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        problemNumber: z.number().int().positive().optional(),
        difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
        topics: z.array(z.string()).optional(),
        leetcodeUrl: z.string().url().optional(),
        order: z.number().int().optional(),
      }),
    }),
  }),
};
