<script lang="ts">
	import SideNavbar from '$lib/components/SideNavbar.svelte';
	import TopNavbar from '$lib/components/TopNavbar.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	export let data: import('./$types').LayoutData;
</script>

<div class="flex h-full w-full p-6 bg-[#13121a]">
	<SideNavbar />
	<div class="flex-grow">
		<TopNavbar />
		<div class="content text-white">
			{#if !$page.route.id?.includes('dashboard')}
				{#key data.url}
					<div
						in:fly={{ x: -5, duration: 300, delay: 300 }}
						out:fly={{ x: -5, duration: 300 }}
						class="w-full h-full"
					>
						<slot />
					</div>
				{/key}
			{:else}
				<slot />
			{/if}
		</div>
	</div>
</div>
