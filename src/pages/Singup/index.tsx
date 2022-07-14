import BoxSingup from 'components/BoxSingup';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';

const Singup = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	return (
		<S.Singup>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.SingupContent>
				<h2>Registro de Usuários</h2>
				<BoxSingup />
			</S.SingupContent>
		</S.Singup>
	);
};

export default Singup;
