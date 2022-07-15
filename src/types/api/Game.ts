export interface gameObj {
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

export interface gameHomeObj {
	id?: string;
	title: string;
	genre?: string;
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
