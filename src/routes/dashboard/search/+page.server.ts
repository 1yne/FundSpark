import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const searchQuery = url.searchParams.get("q")
};