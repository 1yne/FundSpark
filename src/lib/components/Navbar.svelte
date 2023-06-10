<script lang="ts">
	import { userStore } from '$lib/stores/UserStore';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { Paper, Tooltip } from '@svelteuidev/core';
	import Logo from '$lib/Logo.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import WalletIcon from '$lib/WalletIcon.svelte';
	import { goto } from '$app/navigation';

	let searchInputFocused = false,
		searchQuery = '';

	export let wallet = 100;

	async function onKeyDown(e: KeyboardEvent) {
		if (searchInputFocused && e.keyCode === 13) {
			goto(`/dashboard/search?q=${searchQuery}`);
		}
	}
</script>

<div class="topNavbar justify-between bg-navbarBG px-4 py-2 fixed w-full">
	<div class="flex">
		<a href="/dashboard" class="flex justify-between items-center">
			<Logo size={32} />
		</a>
	</div>
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
				/>
			</div>
		</Paper>
	</div>
	<div class="flex gap-4 items-center justify-end">
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
			>
				<a
					href="/dashboard/create"
					class="h-full text-mint hover:text-mint/80 transition-all flex justify-center items-center"
					><Add size={36} /></a
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

<style>
	.topNavbar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
</style>
