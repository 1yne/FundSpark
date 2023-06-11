<script>
	export let data;
</script>

<svelte:head>
	<title>Search Results: {data.searchQuery}</title>
</svelte:head>

<h1>Search results for {data.searchQuery} ({data.matches?.length})</h1>
