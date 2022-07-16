import BoxManageGame from 'components/BoxManageGame';
import Menu from 'components/Menu';
import { navigationItemsVazio } from 'data/navigation';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import * as S from './style';

const ManageGame = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	return (
		<S.ManageGame>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.ManageGameContent>
				<BoxManageGame />
			</S.ManageGameContent>
		</S.ManageGame>
	);
};

export default ManageGame;
