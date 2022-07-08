import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-game-live.herokuapp.com',
});

api.interceptors.request.use((config: any) => {
	try {
		const token = localStorage.getItem('jwtLocalStorage');
		if (token) {
			config.headers.Authorization = `Bearrer ${token}`;
		}
		return config;
	} catch (error: any) {
		console.log(error);
	}
});

export default api;
