import * as S from './style';
import Elipse from 'assets/img/hankElipse.png';
import MiniLogo from 'assets/img/logo2.png';
import { ReactComponent as Back } from 'assets/icons/returnArrow.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { RoutePath } from 'types/routes';
import { NavItem } from './types';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router-dom';

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

	return (
		<S.Menu>
			<S.MenuLeft>
				<img src={Elipse} alt="" width="55" />
				<div>
					<span>HANK</span>
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
				{dateDescription}
			</S.MenuRight>
		</S.Menu>
	);
};

export default Menu;
