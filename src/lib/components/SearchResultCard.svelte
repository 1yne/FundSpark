<script lang="ts">
	import { Paper } from '@svelteuidev/core';
	import NoImage from 'carbon-icons-svelte/lib/NoImage.svelte';
	export let title: string, description: string, image: Blob | undefined, id: string;
</script>

<a href={`/dashboard/fundwave/${id}`}>
	<Paper
		override={{
			backgroundColor: '#1c1c25',
			color: 'white',
			padding: 0,
			borderRadius: '8px',
			maxWidth: '24rem',
			width: '100%'
		}}
		class="cursor-pointer hover:bg-inputHover transition-all"
	>
		{#if image}
			<img src={URL.createObjectURL(image)} alt="" class="w-full h-48" />
		{:else}
			<div class="bg-gray-600 w-full h-48 flex justify-center items-center">
				<NoImage size={36} />
			</div>
		{/if}
		<div class="content p-4">
			<h1 class="text-3xl font-bold mb-1">{title}</h1>
			<p>{description}</p>
		</div>
	</Paper>
</a>
