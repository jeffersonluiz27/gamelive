import BoxSingup from 'components/BoxSingup';
import Logo from 'components/Logo';
import * as S from './style';

const Singup = () => {
	return (
		<S.Singup>
			<Logo />
			<h2>Registro de Usuários</h2>
			<S.SingupContent>
				<BoxSingup />
			</S.SingupContent>
		</S.Singup>
	);
};

export default Singup;
