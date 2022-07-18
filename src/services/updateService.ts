import { profileObj } from 'types/api/Profile';
import api from './api';

const updateService = {
	updateProfile: (profile: profileObj, id: string) =>
		api
			.patch(`/profile/${id}`, profile)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { updateService };
