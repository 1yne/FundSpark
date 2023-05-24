<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	export let data: import('./$types').LayoutData;
</script>

<div class="flex h-full w-full bg-[#13121a] flex-col">
	<Navbar />
	<div class="content text-white p-6">
		{#key data.url}
			<div
				in:fly={{ x: -5, duration: 300, delay: 300 }}
				out:fly={{ x: -5, duration: 300 }}
				class="w-full h-full"
			>
				<slot />
			</div>
		{/key}
	</div>
</div>
