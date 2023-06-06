import { supabase } from '$lib/supabase.ts';
import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	if (browser) {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (!user) {
			throw redirect(303, '/login');
		}
	}

	return {
		url: url.pathname
	};
};
