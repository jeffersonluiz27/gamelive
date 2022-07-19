import api from './api';

const deleteService = {
	deleteProfile: (id: string) =>
		api
			.delete(`/profile/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	deleteGenre: (id: string) =>
		api
			.delete(`/Genre/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { deleteService };
