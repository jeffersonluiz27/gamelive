import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonLogin from 'components/ButtonPurple';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from 'services/authService';
import { RoutePath } from 'types/routes';
import { userLoginObj } from 'types/api/User';
import { alertaErro } from 'utils/alertas';
import { findAllService } from 'services/findServices';
import { createService } from 'services/createService';

const BoxLogin = () => {
	let navigate = useNavigate();

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues((values: userLoginObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const loginUser = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		try {
			const response = await loginService.login(values);
			const jwt = response.data.token;
			const user = response.data.user.id;
			const admin = response.data.user.isAdmin;
			const name = response.data.user.name;

			if (jwt) {
				localStorage.setItem('jwtLocalStorage', jwt);
				localStorage.setItem('userIdStorage', user);
				localStorage.setItem('userAdminStorage', admin);

				const profile = await findAllService.allProfiles();

				const existe = profile.data.filter((e: any) => e.userId === user);
				if (existe.length === 0) {
					const perfil = {
						title: name,
						imageUrl:
							'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
						userId: user,
					};
					const response2 = await createService.createProfile(perfil);
				}
				navigate(RoutePath.PROFILE);
			}
			console.log(`Login`, response.data);
		} catch (err) {
			alertaErro.alerta(`Usuario ou Senha Invalidos`);
		}
	};

	return (
		<S.BoxLogin>
			<S.BoxLoginLogo>
				<S.BoxLoginLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxLoginLogo>
			<S.BoxLoginForm onSubmit={loginUser} className="form-login">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Coloque seu email..."
					onChange={handleSubmit}
					required
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Coloque sua senha..."
					onChange={handleSubmit}
					required
				/>
				<p>
					Não tem uma conta? <Link to={RoutePath.SINGUP}>Crie uma!</Link>
				</p>
				<ButtonLogin value="Entrar" type="submit" />
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
