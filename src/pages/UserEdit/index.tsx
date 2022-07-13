import BoxEditUser from 'components/BoxEditUser';
import HeaderLogo from 'components/HeaderLogo';
import * as S from './style';

const UserEdit = () => {
	return (
		<S.UserEdit>
			<HeaderLogo />
			<S.UserEditContent>
				<h2>Gerenciamento de Usuários</h2>
				<BoxEditUser />
			</S.UserEditContent>
		</S.UserEdit>
	);
};

export default UserEdit;
