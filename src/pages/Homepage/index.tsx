import Menu from 'components/Menu';
import { navigationItems } from 'data/navigation';
import { RoutePath } from 'types/routes';
import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import GameList from 'components/GameList';
import { useEffect, useState } from 'react';
import { profileObj } from 'types/api/Profile';
import { findAllService } from 'services/findServices';

const Homepage = () => {
	const navigate = useNavigate();
	const handleNavigation = (path: RoutePath) => navigate(path);

	const [profiles, setProfiles] = useState<profileObj[]>([]);
	const { id } = useParams();

	useEffect(() => {
		getAllProfiles();
	}, []);

	const getAllProfiles = async () => {
		const response = await findAllService.allProfiles();
		setProfiles(response.data);
	};

	let prof = profiles.filter((e) => e.id == id);

	prof.map((p) => {
		localStorage.setItem('profileImage', p.imageUrl);
		localStorage.setItem('profileTitle', p.title);
		localStorage.setItem('profileId', `${p.id}`);
	});

	return (
		<S.Home>
			<Menu
				navItems={navigationItems}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.setItem('jwtLocalStorage', '');
					navigate(RoutePath.LOGIN);
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
