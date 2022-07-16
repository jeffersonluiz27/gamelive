import BoxSingup from 'components/BoxSingup';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from 'components/HeaderLogo';

const Singup = () => {
	const navigate = useNavigate();

	return (
		<S.Singup>
			<HeaderLogo onLogout={() => navigate(-1)} local={'singup'} />
			<S.SingupContent>
				<h2>Registro de Usuários</h2>
				<BoxSingup />
			</S.SingupContent>
		</S.Singup>
	);
};

export default Singup;
