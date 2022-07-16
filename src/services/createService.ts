import api from './api';
import { genreObj } from 'types/api/Genres';
import { gameDescObj } from 'types/api/Game';
import { profileObj } from 'types/api/Profile';

const createService = {
	createGenre: (values: genreObj) =>
		api
			.post('/genre', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	createGame: (values: gameDescObj) =>
		api
			.post('/game', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	createProfile: (values: profileObj) =>
		api
			.post('/profile', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { createService };
