import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);
	return (
		<S.Home>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => navigate(RoutePath.LOGIN)}
			/>
			<S.HomeContent></S.HomeContent>
		</S.Home>
	);
};

export default Homepage;
