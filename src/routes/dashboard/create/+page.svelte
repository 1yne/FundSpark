<script lang="ts">
	import { userStore } from '$lib/stores/UserStore';
	import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import { fly } from 'svelte/transition';
	import { Loader } from '@svelteuidev/core';

	let title = '',
		description = '',
		target: string = '0',
		stepOneToggle = false,
		loading = false;

	$: valid = {
		titleValid: true,
		descriptionValid: true,
		targetValid: true
	};

	async function createFundWave() {
		loading = true;
		const response = await fetch('/api/createFundWave', {
			method: 'POST',
			body: JSON.stringify({
				title,
				description,
				target,
				userId: $userStore?.user_num
			})
		});
		const data = await response.json();
		loading = false;
	}
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
			<button
				class="bg-mint px-4 rounded-lg hover:bg-mintHover transition-all text-black"
				on:click={createFundWave}
				>{#if loading}
					<Loader variant='bars' size={50} color="dark" />
				{:else}
					Create
				{/if}</button
			>
		</div>
		<div class="flex gap-8 mt-14">
			<div class="flex flex-col gap-4 w-3/4">
				<div>
					<h1 class="text-xl">Title:</h1>
					<input
						type="text"
						bind:value={title}
						class:invalid={!valid.titleValid}
						on:input={() => (valid.titleValid = true)}
						class="bg-input rounded-lg max-w-[32rem] border border-solid border-input w-full py-2 px-4 outline-none hover:bg-inputHover transition-all mt-2 focus:border focus:border-solid focus:border-accent"
					/>
				</div>
				<div>
					<h1 class="text-xl">Description:</h1>
					<textarea
						rows={10}
						class:invalid={!valid.descriptionValid}
						on:input={() => (valid.descriptionValid = true)}
						bind:value={description}
						class="w-full rounded-lg bg-input border border-solid border-input hover:bg-inputHover transition-all mt-2 outline-none px-4 py-2 focus:border focus:border-solid focus:border-accent"
					/>
				</div>
			</div>
			<div class="flex-col gap-4 flex">
				<div>
					<input
						bind:value={target}
						type="number"
						placeholder="Target"
						class:invalid={!valid.targetValid}
						on:input={() => (valid.targetValid = true)}
						class="bg-input rounded-lg max-w-[32rem] text-right border border-solid border-input w-full py-4 text-5xl px-4 outline-none hover:bg-inputHover transition-all mt-2 focus:border focus:border-solid focus:border-accent"
					/>
				</div>
				<div class="bg-search p-4 rounded-lg flex-grow min-w-[25rem]">
					<div
						class="flex flex-col justify-between items-center w-full bg-input rounded-lg p-4 transition-all"
					>
						<div class="w-full flex justify-between items-center">
							<h1 class="text-xl mb-2">Step 1:</h1>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class={`cursor-pointer ${stepOneToggle ? 'rotate-180' : 'rotate-0'} transition-all`}
								on:click={() => (stepOneToggle = !stepOneToggle)}
							>
								<ChevronDown />
							</div>
						</div>
						{#if stepOneToggle}
							<div
								class="flex flex-col ml-2 gap-3"
								in:fly={{ y: -20, duration: 100 }}
								out:fly={{ y: -20, duration: 100 }}
							>
								{#if title.length > 8 && description.length > 32}
									<li class="flex items-center gap-4">
										<Checkmark fill="#577EF2" size={24} />Give a good title and an expressive
										description
									</li>
								{:else}
									<li>Give a good title and an expressive description</li>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.invalid {
		border-color: red;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
	}
</style>
