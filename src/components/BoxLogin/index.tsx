import * as S from './style';
import logo from 'assets/img/logo.png';
import swal from 'sweetalert';
import ButtonLogin from 'components/ButtonPurple';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from 'services/authService';
import { RoutePath } from 'types/routes';
import { userLoginObj } from 'types/api/User';

const BoxLogin = (props: any) => {
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

			if (jwt) {
				localStorage.setItem('jwtLocalStorage', jwt);
				localStorage.setItem('userIdStorage', user);
				localStorage.setItem('userAdminStorage', admin);
				navigate(RoutePath.PROFILE);
			}
			console.log(`Login`, response.data);
		} catch (err) {
			swal({
				title: 'Erro!',
				text: `Usuario ou Senha Invalidos`,
				icon: 'error',
				timer: 7000,
			});
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
