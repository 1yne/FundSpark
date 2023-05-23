<script lang="ts">
	import { userStore } from '$lib/stores/UserStore';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Search from 'carbon-icons-svelte/lib/Search.svelte';
	import { Paper } from '@svelteuidev/core';

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

<div class="flex topNavbar mb-6 justify-between">
	<div class="flex items-center">
		<Paper override={{ backgroundColor: '#1c1c25', padding: '12px' }}>
			<div class="flex gap-4 items-center">
				<Search size={24} fill="white" />
				<input class="bg-input outline-none text-white min-w-[16rem]" />
			</div>
		</Paper>
	</div>
	<div class="flex gap-4 items-center">
		<a
			href="/create"
			class="w-full h-full bg-mint p-2 rounded-lg px-4 text-sm hover:bg-mint/80 transition-all flex justify-center items-center"
			>Start a campaign</a
		>
		<a href="/dashboard/profile">
			{#if $userStore?.profile_picture}
				<img
					src={$userStore.profile_picture}
					alt="profile"
					class="rounded-full flex w-[52px] h-[52px]"
				/>
			{:else}
				<div class="">
					<UserAvatarFilledAlt size={46} fill="white" />
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
</style>
