import * as S from './style';
import MiniLogo from 'assets/img/logo2.png';
import { IoIosArrowDropleft as Back } from 'react-icons/io';
import { HiOutlineLogout as Logout } from 'react-icons/hi';
import { RoutePath } from 'types/routes';
import { NavItem } from './types';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import swall from 'sweetalert';

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
	const jwt = localStorage.getItem('jwtLocalStorage');
	const imgP = `${localStorage.getItem('profileImage')}`;
	const titleP = localStorage.getItem('profileTitle');

	useEffect(() => {
		UserAuth();
	}, []);

	const UserAuth = async () => {
		if (!jwt) {
			swall({
				title: 'ERRO!',
				text: 'Faça o login antes de entrar nesta pagina',
				icon: 'error',
				timer: 7000,
			});
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
				<S.MenuItemButton onClick={() => navigate(-1)}>
					<Back />
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
