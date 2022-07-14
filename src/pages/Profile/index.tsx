import HeaderLogo from 'components/HeaderLogo';
import ProfileCards from 'components/ProfileCards';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import * as S from './style';

const Profile = () => {
	const navigate = useNavigate();
	return (
		<S.Profile>
			<HeaderLogo
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.ProfileContent>
				<ProfileCards />
			</S.ProfileContent>
		</S.Profile>
	);
};

export default Profile;
