import * as S from './style';
import Menu from 'components/Menu';
import GameList from 'components/GameList';
import { navigationItems, navigationItemsVazio } from 'data/navigation';
import { RoutePath } from 'types/routes';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { profileObj } from 'types/api/Profile';
import { findAllService } from 'services/findServices';

const Homepage = () => {
	const navigate = useNavigate();
	let navItens = navigationItems;
	const handleNavigation = (path: RoutePath) => navigate(path);
	const { id } = useParams();
	const [profiles, setProfiles] = useState<profileObj[]>([]);
	const admin = localStorage.getItem('userAdminStorage');

	useEffect(() => {
		getAllProfiles();
	}, []);

	const getAllProfiles = async () => {
		const response = await findAllService.allProfiles();
		setProfiles(response.data);
	};

	let prof = profiles.filter((e) => e.id === id);

	prof.map((p) => {
		localStorage.setItem('profileImage', p.imageUrl);
		localStorage.setItem('profileTitle', p.title);
		localStorage.setItem('profileId', `${p.id}`);
		return console.log('profile setado no localStorage');
	});

	if (admin === 'false') {
		navItens = navigationItemsVazio;
	}

	return (
		<S.Home>
			<Menu
				navItems={navItens}
				onNavigate={handleNavigation}
				onLogout={() => {
					localStorage.removeItem('jwtLocalStorage');
					localStorage.removeItem('userIdStorage');
					localStorage.removeItem('profileId');
					navigate(RoutePath.LOGIN);
				}}
			/>
			<S.HomeContent>
				<S.HomeGameList>
					<GameList id={`${id}`} />
				</S.HomeGameList>
			</S.HomeContent>
		</S.Home>
	);
};

export default Homepage;
