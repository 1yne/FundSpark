import { supabase } from '$lib/supabase.ts';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const { title, description, userId, target } = await request.json();

	const newFundWaveData = {
		name: title,
		description,
		author: parseInt(userId),
		target: parseInt(target),
		liked_users: [],
		comments: [],
	};

	const { error } = await supabase.from('FundWaves').insert(newFundWaveData);

	if (error) {
		console.log(error);
		return json({
			success: false
		});
	}

	return json({
		success: true
	});
};
