import * as S from './style';
import BoxSingup from 'components/BoxSingup';
import HeaderLogo from 'components/HeaderLogo';
import { useNavigate } from 'react-router-dom';

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
