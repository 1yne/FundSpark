<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { userStore } from '$lib/stores/UserStore';
	import type { User } from '$lib/types';
	import { SvelteUIProvider } from '@svelteuidev/core';

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
</script>

<div class="font-mont w-full h-full wrapper bg-[#13121a]">
	<SvelteUIProvider override={{ width: '100%', height: '100%' }}>
		<slot />
	</SvelteUIProvider>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap');
</style>