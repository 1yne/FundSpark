export type User = {
	user_num: number;
	created_at: string;
	username: string;
	profile_picture: string | null;
	created_projects: number[];
	liked_projects: number[];
	favourite_projects: number[];
	wallet: number;
	user_id: string;
};

export type SearchResultFW = {
	name: string;
	description: string;
	target: number;
	amount: number;
	likes: number;
	images: string;
};
