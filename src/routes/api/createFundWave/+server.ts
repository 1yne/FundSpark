import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.ts';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { title, description, userId, target } = await request.json();

	const newFundWaveData = {
		name: title,
		description,
		author: parseInt(userId),
		target: parseInt(target),
		likedUsers: [],
		comments: [],
		images: []
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
