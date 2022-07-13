import HeaderLogo from 'components/HeaderLogo';
import ProfileCards from 'components/ProfileCards';
import * as S from './style';

const Profile = () => {
	return (
		<S.Profile>
			<HeaderLogo />
			<S.ProfileContent>
				<ProfileCards />
			</S.ProfileContent>
		</S.Profile>
	);
};

export default Profile;
