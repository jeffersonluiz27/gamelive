import api from './api';

const userService = {
	findUser: () =>
		api
			.get('/user')
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
};

export { userService };
