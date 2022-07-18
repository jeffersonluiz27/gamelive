export interface gameObj {
	id?: string;
	title: string;
	coverImageUrl: string;
	imdbScore: number;
}

export interface gameDescObj {
	id?: string;
	title: string;
	coverImageUrl: string;
	imdbScore: number;
	description: string;
	year: number;
	trailerYouTubeUrl: string;
	gameplayYouTubeUrl: string;
	genres: string;
}
