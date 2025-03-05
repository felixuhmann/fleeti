import { z } from "zod";

export const formSchema = z.object({
    title: z.string(),
    textContent: z.string(),
    files: z.array(z.any())
});

export type FormSchema = typeof formSchema;