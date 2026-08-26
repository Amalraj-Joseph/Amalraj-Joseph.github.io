import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		highlights: z.array(z.string()).optional(),
		technologies: z.array(z.string()),
		github: z.string().url(),
		demo: z.string().url().optional(),
		docs: z.string().url().optional(),
		image: z.string().optional(),
		featured: z.boolean().default(false),
		year: z.string(),
		visual: z.enum(['cube', 'architecture']).optional(),
		highlight: z.string().optional(),
		order: z.number().default(0),
	}),
});

const publications = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
	schema: z.object({
		title: z.string(),
		year: z.string(),
		description: z.string(),
		note: z.string().optional(),
		url: z.string().url(),
		type: z.enum(['paper', 'article']),
		venue: z.string().optional(),
		order: z.number().default(0),
	}),
});

// Drop certificate metadata files into src/content/certifications/ following
// this shape and they will appear automatically in the Certifications section.
const certifications = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
	schema: z.object({
		name: z.string(),
		issuer: z.string(),
		date: z.string(),
		type: z.enum(['certificate', 'award']).default('certificate'),
		category: z.enum(['general', 'ai']).default('general'),
		credentialUrl: z.string().url().optional(),
		certificateFile: z.string().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { projects, publications, certifications };
