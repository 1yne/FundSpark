import { supabase } from '$lib/supabase.ts';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const { username, id } = await request.json();
	const newUserData = {
		username,
		created_projects: [],
		liked_projects: [],
		favourite_projects: [],
		user_id: id
	};

	const { error } = await supabase.from('User').insert(newUserData);

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
