import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonCriar from 'components/ButtonPurple';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerService } from 'services/authService';
import swal from 'sweetalert';
import { RoutePath } from 'types/routes';

interface userObj {
	name: string;
	cpf: string;
	email: string;
	password: string;
	confirmPassword: string;
	isAdmin: boolean;
}

const BoxSingup = () => {
	const [values, setValues] = useState({
		name: '',
		cpf: '',
		email: '',
		password: '',
		confirmPassword: '',
		isAdmin: true,
	});

	let navigate = useNavigate();

	const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues((values: userObj) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const registerUser = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		const response = await registerService.registerValues(values);
		const jwt = response.data.id;

		if (jwt) {
			localStorage.setItem('jwt', jwt);
			swal({
				title: 'Usuário cadastrado com sucesso !',
				icon: 'success',
				timer: 7000,
			});
			navigate(RoutePath.LOGIN);
		} else {
			swal({
				title: 'Erro!',
				text: `${response.data.message}`,
				icon: 'error',
				timer: 7000,
			});
		}
		console.log(response.data);
	};

	return (
		<S.BoxSingup>
			<S.BoxSingupLogo>
				<S.BoxSingupLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxSingupLogo>
			<S.BoxSingupForm onSubmit={registerUser}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Coloque seu nome..."
					onChange={handleChangeValues}
				/>
				<input
					type="number"
					name="cpf"
					id="cpf"
					placeholder="Coloque seu CPF (Somente numeros)..."
					onChange={handleChangeValues}
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Coloque seu email..."
					onChange={handleChangeValues}
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Coloque sua senha..."
					onChange={handleChangeValues}
				/>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					placeholder="Confirme sua senha..."
					onChange={handleChangeValues}
				/>
				<ButtonCriar value="Criar" type="submit" />
			</S.BoxSingupForm>
		</S.BoxSingup>
	);
};

export default BoxSingup;
