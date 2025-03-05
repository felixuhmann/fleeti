<script lang="ts">
    import {
        Clipboard,
        Avatar,
        Gear,
        QuestionMarkCircled,
        Rocket,
        Exit,
        DotFilled,
    } from "svelte-radix";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    let { user } = $props();
</script>

<header class=" h-16 flex justify-between items-center p-4 shadow-sm">
    <div>
        <a href="/" class="flex items-center">
            <Clipboard class="mr-2 h-8 w-8" />
            <p class="font-semibold text-xl">Fleeti</p>
        </a>
    </div>
    <div>
        {#if user.isValid}
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                    <Button builders={[builder]} variant="outline">
                        <Avatar />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content class="w-96">
                    <DropdownMenu.Group>
                        <DropdownMenu.Label class="text-center text-lg">
                            Hi, {user.username}!
                        </DropdownMenu.Label>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item href="/settings"
                            ><Gear class="mr-2 h-4 w-4" /> Settings</DropdownMenu.Item
                        >
                        <DropdownMenu.Item href="/help"
                            ><QuestionMarkCircled class="mr-2 h-4 w-4" /> Help &
                            Feedback</DropdownMenu.Item
                        >
                        <DropdownMenu.Item href="/plan"
                            ><Rocket class="mr-2 h-4 w-4" /> Upgrade Plan</DropdownMenu.Item
                        >
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item
                            ><Exit class="mr-2 h-4 w-4" /> Log out</DropdownMenu.Item
                        >
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <div class="flex justify-center items-center">
                        <Button
                            href="/terms-of-service"
                            variant="link"
                            class="italic text-xs text-gray-500">Terms</Button
                        >
                        <DotFilled class="w-2 h-2 text-gray-500" />
                        <Button
                            href="/privacy-policy"
                            variant="link"
                            class="italic text-xs text-gray-500"
                            >Privacy Policy</Button
                        >
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        {:else}
            <div>
                <Button href="/sign-up" variant="outline" class="mr-2"
                    >Start free trial</Button
                >
                <Button href="/sign-in">Sign in</Button>
            </div>
        {/if}
    </div>
</header>
