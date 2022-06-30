import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Wellcome = () => {
	const navigate = useNavigate();

	function goToLogin() {
		navigate('/login');
	}

	return (
		<S.Wellcome>
			<h1>Pagina Publica de boas vindas e link para login</h1>
			<button onClick={goToLogin}>Login</button>
		</S.Wellcome>
	);
};

export default Wellcome;
