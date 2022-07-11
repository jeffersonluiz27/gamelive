import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import GameList from 'components/GameList';
import swall from 'sweetalert';

const Homepage = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	const jwt = localStorage.getItem('jwtLocalStorage')

	return (
		<S.Home>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => navigate(RoutePath.LOGIN)}
			/>
			<S.HomeContent>
				<S.HomeGameList>
					<GameList />
				</S.HomeGameList>
			</S.HomeContent>
		</S.Home>
	);
};

export default Homepage;
