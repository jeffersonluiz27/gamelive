import * as S from './style';
import Logo from 'components/Logo';
import BoxLogin from 'components/BoxLogin';



const Login = () => {

	return (
		<S.Login>
			<Logo />
			<S.LoginContent>
				<BoxLogin  />
			</S.LoginContent>
		</S.Login>
	);
};

export default Login;
