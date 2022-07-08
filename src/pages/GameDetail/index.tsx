import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';

const GameDetail = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	return (
		<S.GameDetail>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => navigate(RoutePath.LOGIN)}
			/>
			<S.GameDetailContent>
				<Link to={'/managegame'}>
					<button>Editar Game</button>
				</Link>
			</S.GameDetailContent>
		</S.GameDetail>
	);
};

export default GameDetail;
