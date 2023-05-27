<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import SideNavbar from '$lib/components/SideNavbar.svelte';
	import TopNavbar from '$lib/components/TopNavbar.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	export let data: import('./$types').LayoutData;
</script>

<div class="flex h-full w-full bg-[#13121a] flex-col">
	<div class="flex h-full w-full">
		{#if $page.route.id === '/dashboard'}
			<div in:fly={{ x: -20, duration: 250, delay: 300 }} out:fly={{ x: -20, duration: 250 }} class="h-full">
				<SideNavbar />
			</div>
			<div class="flex flex-col w-full h-full">
				<div in:fly={{ y: -20, duration: 250, delay: 300 }} out:fly={{ y: -20, duration: 250 }} class="w-full">
					<TopNavbar  />
				</div>
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
		{:else}
			<div class="flex flex-col w-full h-full">
				<div in:fly={{ y: -20, duration: 250, delay: 300 }} out:fly={{ y: -20, duration: 250 }}>
					<Navbar />
				</div>
				<div class="content text-white p-6 mt-16">
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
		{/if}
	</div>
</div>
