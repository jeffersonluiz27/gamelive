import api from './api';


const jwt = localStorage.getItem('jwtLocalStorage')

const findAllService = {
	allGames: () =>
		api.get('/game', {headers: {
      Authorization: "Bearer " + jwt
   }} 
		)
			.then((response: any) => {
				console.log(response)
				return response;
			})
			.catch((error: any) => console.log(error)),
};

export { findAllService };
