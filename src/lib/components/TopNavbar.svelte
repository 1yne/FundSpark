<script>
	import { userStore } from '$lib/stores/UserStore';
	import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
</script>

<div class="flex topNavbar mb-6 justify-end">
	<div class="flex gap-4 items-center">
		<button class="w-full h-full bg-mint/80 p-2 rounded-lg px-4 text-sm hover:bg-mint transition-all">Start a campaign</button>
		<a href="/dashboard/profile">
			{#if $userStore?.profile_picture}
				<img
					src={$userStore.profile_picture}
					alt="profile"
					class="rounded-full flex w-[52px] h-[52px]"
				/>
			{:else}
				<div class="">
					<UserAvatarFilledAlt size={46} />
				</div>
			{/if}
		</a>
	</div>
</div>
