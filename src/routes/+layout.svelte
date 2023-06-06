<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { userStore } from '$lib/stores/UserStore';
	import type { User } from '$lib/types';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (session?.user) {
			const { data, error } = await supabase.from('User').select().eq('user_id', session?.user.id);
			if (error) {
				console.log(error);
			}

			if (data) {
				$userStore = data[0] as User;
			}
		}
	});

	export let data;
</script>

<SvelteUIProvider override={{ height: '100%', backgroundColor: '#13121a' }}>
	<div class="font-cabin w-full h-full">
		{#if !$page.route.id?.includes('dashboard')}
			{#key data.url}
				<div
					in:fly={{ x: -5, duration: 300, delay: 300 }}
					out:fly={{ x: -5, duration: 300 }}
					class="w-full h-full"
				>
					<slot />
				</div>
			{/key}
		{:else}
			<slot />
		{/if}
	</div>
</SvelteUIProvider>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap');
</style>
