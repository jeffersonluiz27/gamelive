import BoxNewGame from 'components/NewGame';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Menu from 'components/Menu';
import { navigationItemsVazio } from 'data/navigation';

const NewGame = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	return (
		<S.NewGame>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.NewGameContent>
				<BoxNewGame />
			</S.NewGameContent>
		</S.NewGame>
	);
};

export default NewGame;
