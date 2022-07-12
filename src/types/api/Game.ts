export interface gameObj{
  title:	string,
  coverImageUrl:	string,
  imdbScore:	number,
}

export interface gameDescObj{
  title:	string,
  coverImageUrl:	string,
  imdbScore:	number,
  description:	string,
  year:	number,
  trailerYouTubeUrl:	string,
  gameplayYouTubeUrl:	string,
  genres: string[],
}