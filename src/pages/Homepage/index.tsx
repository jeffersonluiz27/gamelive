import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import GameList from 'components/GameList';


const Homepage = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	

	return (
		<S.Home>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => { 
					localStorage.setItem('jwtLocalStorage', '')
					navigate(RoutePath.LOGIN)
				}}
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
