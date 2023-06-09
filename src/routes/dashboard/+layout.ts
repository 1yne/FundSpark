import { supabase } from '$lib/supabase.ts';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	let userWallet = 100;

	if (browser) {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		
		const { data, error } = await supabase.from('User').select().eq('user_id', user.id);
		
		if (error) console.log(error)

		userWallet = data[0].wallet;
		if (!user) {
			throw redirect(303, '/login');
		}
	}

	return {
		url: url.pathname,
		userWallet
	};
};
