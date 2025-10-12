import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    topic: z.string(),
    title: z.string(),
    company: z.string(),
    company_logo: z.string(),
    date: z.string(),
    summary: z.object({
      impact: z.string(),
      myRole: z.string(),
      challenge: z.string(),
      solution: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  "case-studies": caseStudies,
};
