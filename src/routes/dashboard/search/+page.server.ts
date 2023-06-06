import { supabase } from '$lib/supabase.ts';

export const load = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');

	const { data: matches, error } = await supabase
		.from('FundWaves')
		.select()
		.like('name', `%${searchQuery}%`);
	if (error) {
		console.log('error: ', error);
	}

	return {
		searchQuery,
		matches
	};
};
