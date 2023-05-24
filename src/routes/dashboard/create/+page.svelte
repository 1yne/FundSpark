<script>
	import { Divider } from "@svelteuidev/core";
	import { userStore } from "$lib/stores/UserStore";
</script>

<svelte:head>
	<title>New FundWave</title>
</svelte:head>

<div class="flex justify-between">
	<h1 class="text-3xl text-white">Create your {$userStore?.created_projects.length === 0 ? "first" : ""} FundWave</h1>
	<button class="bg-mint px-4 rounded-lg hover:bg-mintHover transition-all text-black">Publish</button>
</div>
<Divider />
