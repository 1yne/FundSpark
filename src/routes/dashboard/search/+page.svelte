<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Search Results: {data.searchQuery}</title>
</svelte:head>

<h1>Search Results:</h1>
