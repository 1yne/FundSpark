<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { userStore } from '$lib/stores/UserStore';
	import type { User } from '$lib/types';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
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

	export let data: LayoutData;
</script>

<div class="font-cabin w-full h-full wrapper bg-blackBackground">
	<SvelteUIProvider override={{ width: '100%', height: '100%' }}>
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
	</SvelteUIProvider>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap');
</style>
