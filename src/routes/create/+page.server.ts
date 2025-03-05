import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load = (async ({ url }) => {
    return {
        mode: url.searchParams.get("mode"),
        form: await superValidate(zod(formSchema)),
    };
}) satisfies PageServerLoad;