<script>
    import Header from "$lib/components/Header.svelte";
    import { Button } from "$lib/components/ui/button";
    import { File, Pencil1, Pencil2, TriangleDown } from "svelte-radix";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<div class="max-w-screen-2xl mx-auto p-4">
    <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
            <Button builders={[builder]} variant="outline"
                ><TriangleDown class="mr-2 h-4 w-4" />Create</Button
            ></DropdownMenu.Trigger
        >
        <DropdownMenu.Content>
            <DropdownMenu.Group>
                <DropdownMenu.Item href="/create?mode=text"
                    ><Pencil2 class="mr-2 h-4 w-4" />Text</DropdownMenu.Item
                >
                <DropdownMenu.Item href="/create?mode=file"
                    ><File class="mr-2 h-4 w-4" />File</DropdownMenu.Item
                >
            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
