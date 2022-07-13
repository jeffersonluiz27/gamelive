import api from './api';

const findAllService = {
	allGames: () =>
		api.get('/game').then((response: any) => {
				return response;
			}).catch((error: any) => console.log(error)),
	allProfiles: () => 
		api.get('/profile').then((response: any) => {
			return response;
		}).catch((error: any ) => console.log(error)),
};

export { findAllService };
