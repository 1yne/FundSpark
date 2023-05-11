<script lang="ts">
	import '../app.css';
	import { supabase } from '$lib/supabase';
	import { userStore } from '$lib/stores/UserStore';
	import type { User } from '$lib/types';

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (session?.user) {
			console.log('firing');
			const { data, error } = await supabase.from('User').select().eq('user_id', session?.user.id);
			if (data) {
				$userStore = data[0] as User;
			}
		}
	});
</script>

<div class="font-mont w-full h-full wrapper bg-[#13121a]">
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
