import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonLogin from 'components/ButtonPurple';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from 'services/authService';
import { RoutePath } from 'types/routes';
import swal from 'sweetalert';
import { userLoginObj } from 'types/api/User';


const BoxLogin = (props: any) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	let navigate = useNavigate();

	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues((values: userLoginObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const loginUser = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		try{
			const response = await loginService.login(values);
			const jwt = response.data.token;

			if (jwt) {
				localStorage.setItem('jwtLocalStorage', jwt);
				navigate(RoutePath.HOME);
			}
			console.log(response.data);
		}catch(err){
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
					/* value={} */
					onChange={handleSubmit}
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Coloque sua senha..."
					/* value={} */
					onChange={handleSubmit}
				/>
				<p>
					Não tem uma conta? <Link to="/singup">Crie uma!</Link>
				</p>
				<ButtonLogin value="Entrar" type="submit" />
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
