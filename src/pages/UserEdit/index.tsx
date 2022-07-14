import BoxEditUser from 'components/BoxEditUser';
import Menu from 'components/Menu';
import { navigationItemsVazio } from 'data/navigation';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import * as S from './style';

const UserEdit = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	return (
		<S.UserEdit>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.UserEditContent>
				<h2>Gerenciamento de Usuários</h2>
				<BoxEditUser />
			</S.UserEditContent>
		</S.UserEdit>
	);
};

export default UserEdit;
