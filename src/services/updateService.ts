import { profilefavoriteObj, profileObj } from 'types/api/Profile';
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
};

export { updateService };