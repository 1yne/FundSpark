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

export type FundWave = {
	id: number;
	created_at: string;
	author: number;
	name: string;
	description: string;
	target: number;
	amount_raised: number;
	images: Blob[] | null;
	likes: number;
	liked_users: number[] | null;
	comments: [] | null;
};
