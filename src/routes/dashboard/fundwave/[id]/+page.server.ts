import { supabase } from '$lib/supabase.ts';
import type { FundWave } from "$lib/types.ts"

export const load = async ({ params }) => {
	const { data: fundwave, error }: { data: FundWave } = await supabase.from('FundWaves').select().eq('id', params.id);
	if (error) console.log(error);

  return {
    fundwave
  }
};
