export interface profileObj {
	id?: string;
	title: string;
	imageUrl: string;
	userId: string;
	games?: string;
	favoriteGameId?: string;
}

export interface profilefavoriteObj {
	favoriteGameId: string;
}