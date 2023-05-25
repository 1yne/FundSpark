<script>
	import { Divider } from '@svelteuidev/core';
	import { userStore } from '$lib/stores/UserStore';
	import Checkmark from "carbon-icons-svelte/lib/Checkmark.svelte";

	let title = "",
		description = ""
</script>

<svelte:head>
	<title>New FundWave</title>
</svelte:head>

<div class="wrapper flex justify-center">
	<div class="createFundWaveContent max-w-[80rem] w-full">
		<div class="flex justify-between">
			<h1 class="text-3xl text-white">
				Create your {$userStore?.created_projects.length === 0 ? 'first' : ''} FundWave
			</h1>
			<button class="bg-mint px-4 rounded-lg hover:bg-mintHover transition-all text-black"
				>Create</button
			>
		</div>
		<Divider />
		<div class="flex gap-8">
			<div class="mt-6 flex flex-col gap-4 w-3/4">
				<div>
					<h1 class="text-xl">Title:</h1>
					<input
						type="text"
						bind:value={title}
						class="bg-input rounded-lg max-w-[32rem] border border-solid border-input w-full py-2 px-4 outline-none hover:bg-inputHover transition-all mt-2 focus:border focus:border-solid focus:border-accent"
					/>
				</div>
				<div>
					<h1 class="text-xl">Description:</h1>
					<textarea
						rows={10}
						bind:value={description}
						class="w-full rounded-lg bg-input border border-solid border-input hover:bg-inputHover transition-all mt-2 outline-none px-4 py-2 focus:border focus:border-solid focus:border-accent"
					/>
				</div>
				<div>
					<h1 class="text-xl">Images: </h1>
				</div>
			</div>
			<div class="mt-6">
				<h1 class="text-xl mb-2">Step 1:</h1>
				<div class="flex flex-col ml-2 gap-3">
					{#if title.length > 8}
						<h1 class="flex items-center gap-2"><Checkmark fill="#577EF2" size={24} />Give a good title</h1>
					{:else}
						<li>Give a good title</li>
					{/if}

					{#if description.length > 32}
						<h1 class="flex items-center gap-2"><Checkmark fill="#577EF2" size={24} />Give a expressive description</h1>
					{:else}
						<li>Give a expressive description</li>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>