<script>
	export let data;
</script>

<svelte:head>
	<title>{data.fundwave.name} | FundSpark</title>
</svelte:head>

<div class="w-full flex justify-center">
	<div class="max-w-[64rem] w-full">
		<h1 class="text-5xl font-bold mb-1">{data.fundwave.name}</h1>
	</div>
</div>
