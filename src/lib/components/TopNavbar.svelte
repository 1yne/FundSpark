<script>
	import { userStore } from '$lib/stores/UserStore';
</script>

<div class="flex topNavbar mb-6 justify-end">
	<a href="/dashboard/profile">
		<img
			src={$userStore?.profile_picture || '/defaultProfilePic.jpeg'}
			alt="profile"
			class="rounded-full flex w-[52px] h-[52px]"
		/>
	</a>
</div>
