import * as S from './style';
import logo from 'assets/img/logo.png';
import ButtonCriar from 'components/ButtonPurple';

const BoxSingup = () => {
	return (
		<S.BoxSingup>
			<S.BoxSingupLogo>
				<S.BoxSingupLogoImage
					src={logo}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxSingupLogo>
			<S.BoxSingupForm>
				<input type="text" placeholder="Coloque seu nome..." />
				<input type="email" placeholder="Coloque seu email..." />
				<input type="password" placeholder="Coloque sua senha..." />
				<input type="text" placeholder="Coloque seu CPF..." />
				<ButtonCriar value="Criar" type="button" />
			</S.BoxSingupForm>
		</S.BoxSingup>
	);
};

export default BoxSingup;
