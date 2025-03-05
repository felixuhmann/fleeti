<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
	let { children } = $props();

	let user = {
		isValid: true,
		username: "Felix",
	};
</script>

<Header {user}></Header>
{@render children()}
