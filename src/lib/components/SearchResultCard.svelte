<script lang="ts">
	import { Paper } from '@svelteuidev/core';
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
		<img src={image ? URL.createObjectURL(image) : '/NoImage.jpeg'} alt="" class="w-full h-48" />
		<div class="content p-4">
			<h1 class="text-3xl font-bold mb-2">{title}</h1>
			<p>{description}</p>
		</div>
	</Paper>
</a>
