import { supabase } from '$lib/supabase.ts';

export const load = async ({ params }) => {
	const { data: fundwave, error } = await supabase.from('FundWaves').select().eq('id', params.id);
	if (error) console.log(error);

  return {
    fundwave
  }
};
