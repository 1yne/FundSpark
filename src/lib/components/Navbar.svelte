<script lang="ts">
	import { userStore } from '$lib/stores/UserStore';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { Paper } from '@svelteuidev/core';
	import Logo from '$lib/Logo.svelte';
	import Add from "carbon-icons-svelte/lib/Add.svelte";

	function openModal() {
		(document.querySelector('.modal') as HTMLDialogElement).showModal();
	}
	function closeModal(event: any) {
		console.log(event.target.classList);
		const modal = document.querySelector('.modal') as HTMLDialogElement;
		if (
			event.target.classList.contains('closeButton') ||
			event.target.classList.contains('modal')
		) {
			modal.classList.add('closingAnimation');
			modal.addEventListener(
				'animationend',
				() => {
					modal.classList.remove('closingAnimation');
					modal.close();
				},
				{ once: true }
			);
		}
	}
</script>

<div class="topNavbar justify-between bg-navbarBG px-4 py-2">
	<a href="/dashboard" class="flex justify-between items-center">
		<Logo size={32} />
	</a>
	<div class="flex items-center py-1">
		<Paper
			override={{ backgroundColor: '#111117', py: '8px', px: '12px', borderRadius: '8px' }}
			class="hover:bg-searchHover transition-all"
		>
			<div class="flex gap-4 items-center">
				<Search size={20} fill="white" />
				<input class="outline-none text-white min-w-[20rem] bg-transparent" />
			</div>
		</Paper>
	</div>
	<div class="flex gap-4 items-center justify-end">
		<div class="py-1 h-full">
			<a
				href="/dashboard/create"
				class="h-full text-mint hover:text-mint/80 transition-all flex justify-center items-center"
				><Add size={36} /></a
			>
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog class="modal p-0 bg-blackBackground text-white" id="modal" on:click={closeModal}>
	<div class="modal-wrapper p-4 w-full h-full">
		<h1 class="text-4xl font-bold">Create your campaign</h1>
		<button on:click={closeModal} class="closeButton">Close</button>
	</div>
</dialog>

<style>
	.modal::backdrop {
		background-color: rgb(2 195 154 / 0.1);
		opacity: 0;
	}

	.modal[open]::backdrop {
		animation: fade-in 500ms forwards;
	}

	.modal[open] {
		animation: slide-in 500ms forwards;
		width: calc(100% - 6rem);
		height: calc(100vh - 6rem);
		border-radius: 8px;
	}

	@keyframes slide-in {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0%);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.topNavbar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
</style>
