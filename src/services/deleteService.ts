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
	deleteGame: (id: string) =>
		api
			.delete(`/game/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	deleteUser: (id: string) =>
		api
			.delete(`/user/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { deleteService };
