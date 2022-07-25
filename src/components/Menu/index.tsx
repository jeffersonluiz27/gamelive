import * as S from './style';
import MiniLogo from 'assets/img/logo2.png';
import { IoIosArrowDropleft as Back } from 'react-icons/io';
import { HiOutlineLogout as Logout } from 'react-icons/hi';
import { RoutePath } from 'types/routes';
import { NavItem } from './types';
import { DateTime } from 'luxon';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { alertaErro } from 'utils/alertas';

interface MenuProps {
	navItems: NavItem[];
	onNavigate: (data: RoutePath) => void;
	onLogout: () => void;
}

const Menu = ({ navItems, onNavigate, onLogout }: MenuProps) => {
	const dateDescription = DateTime.now().toLocaleString({
		...DateTime.TIME_24_SIMPLE,
	});
	const navigate = useNavigate();
	let location = useLocation();
	const { id } = useParams();
	const jwt = localStorage.getItem('jwtLocalStorage');
	const imgP = `${localStorage.getItem('profileImage')}`;
	const titleP = localStorage.getItem('profileTitle');
	const profileId = localStorage.getItem('profileId');

	const redirect = () => {
		if (location.pathname === `/home/${id}`) {
			return navigate(RoutePath.PROFILE);
		} else if (location.pathname === `/useredit`) {
			/* return navigate(`/home/${profileId}`); */
			return navigate(-1);
		} else if (location.pathname === `/newgame`) {
			return navigate(`/home/${profileId}`);
		} else if (location.pathname === `/gamedetail/${id}`) {
			return navigate(`/home/${profileId}`);
		} else {
			return navigate(-1);
		}
	};

	useEffect(() => {
		UserAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const UserAuth = async () => {
		if (!jwt) {
			alertaErro.alerta('Faça o login antes de entrar nesta pagina');
			navigate(RoutePath.LOGIN);
		}
	};

	return (
		<S.Menu>
			<S.MenuLeft>
				<img src={imgP} alt="" width="55" />
				<div>
					<span>{titleP}</span>
					<br />
					<span>20562</span>
				</div>
				<S.MenuItemButton>
					<Back onClick={redirect} />
				</S.MenuItemButton>
			</S.MenuLeft>
			<S.MenuRight>
				<nav>
					{navItems.map((item, index) => (
						<S.MenuItem key={`MenuItem-${index}`}>
							<S.MenuItemButton onClick={() => onNavigate(item.path)}>
								{item.icon}
							</S.MenuItemButton>
						</S.MenuItem>
					))}
				</nav>
				<S.MenuItemLogout onClick={onLogout}>
					<Logout />
				</S.MenuItemLogout>
				<S.MenuLogo>
					<img src={MiniLogo} alt="Logo" />
				</S.MenuLogo>
				<div id="hora">{dateDescription}</div>
			</S.MenuRight>
		</S.Menu>
	);
};

export default Menu;
