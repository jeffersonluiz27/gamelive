import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonLogin from 'components/ButtonLogin';
import { HTMLAttributes, useState } from 'react';
import { Link } from 'react-router-dom';

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
	onSubmitData: (data: { nickname: string; password: string }) => void;
	errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (): void => {
		const data = { nickname, password };
		onSubmitData(data);
	};

	return (
		<S.BoxLogin>
			<S.BoxLoginLogo>
				<S.BoxLoginLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxLoginLogo>
			<S.BoxLoginForm>
				<input
					type="email"
					placeholder="Coloque seu email..."
					value={nickname}
					onChange={({ target }) => setNickname(target.value)}
				/>
				<input
					type="password"
					placeholder="Coloque sua senha..."
					value={password}
					onChange={({ target }) => setPassword(target.value)}
				/>
				<p>
					Não tem uma conta? <Link to="/singup">Crie uma!</Link>
				</p>
				<ButtonLogin value="Entrar" type="button" onClick={handleSubmit} />
			</S.BoxLoginForm>
			{Boolean(errorMessage.length) && (
				<S.BoxLoginError>{errorMessage}</S.BoxLoginError>
			)}
		</S.BoxLogin>
	);
};

export default BoxLogin;
