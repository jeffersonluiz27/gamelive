import { Link, useNavigate } from 'react-router-dom';
import ButtonEnter from 'components/ButtonPurple';
import * as S from './style';

const Wellcome = () => {
	return (
		<S.Wellcome>
			<h1>Pagina Publica de boas vindas e link para login</h1>
			<Link to={'/login'}>
				<ButtonEnter value="Sing In" type="button" />
			</Link>
		</S.Wellcome>
	);
};

export default Wellcome;
