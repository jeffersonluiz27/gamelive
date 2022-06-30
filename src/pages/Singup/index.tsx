import BoxSingup from 'components/BoxSingup';
import Logo from 'components/Logo';
import Back from 'assets/icons/returnArrow.svg';
import * as S from './style';
import { Link } from 'react-router-dom';

const Singup = () => {
	return (
		<S.Singup>
			<div>
				<Link to="/login">
					<img src={Back} alt="" id="backImg" />
				</Link>
				<div id="divLogo">
					<Logo />
				</div>
			</div>

			<S.SingupContent>
				<h2>Registro de Usuários</h2>
				<BoxSingup />
			</S.SingupContent>
		</S.Singup>
	);
};

export default Singup;
