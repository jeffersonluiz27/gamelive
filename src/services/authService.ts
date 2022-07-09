import api from './api';

interface userLoginObj {
	email: string;
	password: string;
}

interface userObj {
	name: string;
	cpf: string;
	email: string;
	password: string;
	confirmPassword: string;
	isAdmin: boolean;
}

const loginService = {
	login: (values: userLoginObj) =>
		api
			.post('/auth', values)
			.then((response: any) => response)
			.catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};

const registerService = {
	registerValues: (values: userObj) =>
		api
			.post('/user', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { loginService, registerService };
