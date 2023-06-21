<script lang="ts">
	import { userStore } from '$lib/stores/UserStore';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { Paper, Tooltip } from '@svelteuidev/core';
	import WalletIcon from '$lib/WalletIcon.svelte';
	import { goto } from '$app/navigation';

	let searchInputFocused = false,
		searchQuery = '',
		searchInput: HTMLInputElement;

	export let wallet = 100;

	async function onKeyDown(e: KeyboardEvent) {
		if (searchInputFocused && e.keyCode === 13) {
			goto(`/dashboard/search?q=${searchQuery}`);
		}
	}

	function monitorForSearch(e: KeyboardEvent) {
		if (e.keyCode === 191) {
			searchInput.focus()
			searchInputFocused = true
		}
	}
</script>

<svelte:window on:keydown|preventDefault={monitorForSearch} />

<div class="flex topNavbar justify-between bg-[#2d3134] px-4 py-2">
	<div class="flex items-center py-1">
		<Paper
			override={{ backgroundColor: '#111117', py: '8px', px: '12px', borderRadius: '8px' }}
			class={`hover:bg-searchHover transition-all border border-solid border-search outline-none ${
				searchInputFocused ? '!border !border-solid !border-accent' : ''
			}`}
		>
			<div class="flex gap-4 items-center">
				<Search size={20} fill="white" />
				<input
					class="outline-none text-white min-w-[20rem] bg-transparent"
					placeholder="Search..."
					on:focus={() => (searchInputFocused = true)}
					on:focusout={() => (searchInputFocused = false)}
					bind:value={searchQuery}
					on:keydown={onKeyDown}
					bind:this={searchInput}
				/>
			</div>
		</Paper>
	</div>
	<div class="flex gap-4 items-center">
		<div
			class="bg-search px-4 py-2 hover:bg-searchHover transition-all rounded-lg flex justify-between items-center gap-2 text-white"
		>
			<WalletIcon size={26} />
			<h1>{wallet}</h1>
		</div>
		<div class="py-1 h-full flex justify-center items-center">
			<Tooltip
				label={`${
					$userStore?.created_projects.length === 0 ? 'Create your first FundWave' : 'New FundWave'
				}`}
				override={{ height: '100%' }}
			>
				<a
					href="/dashboard/create"
					class="w-full h-full bg-mint rounded-lg px-4 text-sm hover:bg-mint/80 transition-all flex justify-center items-center"
					>Start a campaign</a
				>
			</Tooltip>
		</div>
		<a href="/dashboard/profile">
			{#if $userStore?.profile_picture}
				<img
					src={$userStore.profile_picture}
					alt="profile"
					class="rounded-full flex w-[52px] h-[52px]"
				/>
			{:else}
				<div class="">
					<UserAvatarFilledAlt size={36} fill="white" />
				</div>
			{/if}
		</a>
	</div>
</div>
