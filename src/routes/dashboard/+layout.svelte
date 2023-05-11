<script>
	import SideNavbar from '$lib/components/SideNavbar.svelte';
	import TopNavbar from '$lib/components/TopNavbar.svelte';
</script>

<div class="flex h-full w-full p-6 bg-[#13121a]">
	<SideNavbar />
	<div class="flex-grow content">
		<TopNavbar />
		<slot />
	</div>
</div>
