import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonLogin from 'components/ButtonLogin';
import { Link } from 'react-router-dom';

const BoxLogin = () => {
	return (
		<S.BoxLogin>
			<S.BoxLoginLogo>
				<S.BoxLoginLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxLoginLogo>
			<S.BoxLoginForm>
				<input type="email" placeholder="Coloque seu email..." />
				<input type="password" placeholder="Coloque sua senha..." />
				<p>
					Não tem uma conta? <Link to="/registar">Crie uma!</Link>
				</p>
				<ButtonLogin />
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
