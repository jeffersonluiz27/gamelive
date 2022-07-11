import api from './api';
interface userLoginObj {
	email: string;
	senha: string;
}

const loginService = {
	login: (values: userLoginObj) =>
		api
			.post('/auth', values)
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};

export { loginService };
