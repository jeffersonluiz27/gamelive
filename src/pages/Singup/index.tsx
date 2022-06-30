import BoxSingup from 'components/BoxSingup';
import * as S from './style';
import HeaderLogo from 'components/HeaderLogo';

const Singup = () => {
	return (
		<S.Singup>
			<HeaderLogo />
			<S.SingupContent>
				<h2>Registro de Usuários</h2>
				<BoxSingup />
			</S.SingupContent>
		</S.Singup>
	);
};

export default Singup;
