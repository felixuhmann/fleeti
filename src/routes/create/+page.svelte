<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import type { PageData } from "./$types";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { formSchema } from "./schema";
    import * as Form from "$lib/components/ui/form/index.js";

    let { data }: { data: PageData } = $props();

    const form = superForm(data.form, {
        validators: zodClient(formSchema),
    });

    const { form: formData, enhance } = form;
</script>

<div class="max-w-screen-2xl mx-auto p-4">
    <h1>{data.mode}</h1>
</div>

<form method="POST" use:enhance>
    <Form.Field {form} name="title">
        <Form.Control>
            {#snippet children({ props })}
                <Form.Label>Username</Form.Label>
                <Input {...props} bind:value={$formData.username} />
            {/snippet}
        </Form.Control>
        <Form.Description>This is your public display name.</Form.Description>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Submit</Form.Button>
</form>
