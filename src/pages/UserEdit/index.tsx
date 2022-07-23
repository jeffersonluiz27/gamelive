import * as S from './style';
import Menu from 'components/Menu';
import BoxEditUser from 'components/BoxEditUser';
import { navigationItemsVazio } from 'data/navigation';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';

const UserEdit = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	return (
		<S.UserEdit>
			<Menu
				navItems={navigationItemsVazio}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.removeItem('jwtLocalStorage');
					localStorage.removeItem('userIdStorage');
					localStorage.removeItem('profileId');
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
