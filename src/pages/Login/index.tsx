import * as S from './style';
import BoxLogin from 'components/BoxLogin';
import Logo from 'components/Logo';

const Login = () => {
	return (
		<S.Login>
			<S.LoginContent>
				<Logo />
				<BoxLogin />
			</S.LoginContent>
		</S.Login>
	);
};

export default Login;
