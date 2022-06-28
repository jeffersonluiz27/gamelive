import * as S from './style';


const BoxLogin = () => {
	return (
		<S.BoxLogin>
			<S.BoxLoginLogo>
				<S.BoxLoginLogoImage
					src={require('assets/img/logo.png')}
					alt="Image do logo com um desenho de um controle de video game"
				/>
			</S.BoxLoginLogo>
			<S.BoxLoginForm>
				<input type="email" placeholder="Coloque seu email..." />
				<input type="password" placeholder="Coloque sua senha..." />
				<p>
					Não tem uma conta? <a href="#">Crie uma!</a>
				</p>
				<S.BoxLoginButton>Entrar</S.BoxLoginButton>
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
