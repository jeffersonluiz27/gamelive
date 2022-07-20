import { gameDescObj } from 'types/api/Game';
import { profilefavoriteObj, profileObj } from 'types/api/Profile';
import { userObj } from 'types/api/User';
import api from './api';

const updateService = {
	updateProfile: (id: string, values: profileObj) =>
		api
			.patch(`/profile/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	updateFavorito: (id: string, values: profilefavoriteObj) =>
		api
			.patch(`/profile/favoriteGame/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	updateGame: (id: string, values: gameDescObj) =>
		api
			.patch(`/game/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	updateUser: (id: string, values: userObj) =>
		api
			.patch(`/user/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { updateService };
