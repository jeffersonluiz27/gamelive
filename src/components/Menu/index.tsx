import * as S from './style';
import Elipse from 'assets/img/hankElipse.png';
import MiniLogo from 'assets/img/logo2.png';
import { ReactComponent as Back } from 'assets/icons/returnArrow.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';

import { RoutePath } from 'types/routes';
import { NavItem } from './types';
import { DateTime } from 'luxon';

interface MenuProps {
	active: RoutePath;
	navItems: NavItem[];
	onNavigate: (data: RoutePath) => void;
	onLogout: () => void;
}

const Menu = ({ active, navItems, onNavigate, onLogout }: MenuProps) => {
	const dateDescription = DateTime.now().toLocaleString({
		...DateTime.TIME_24_SIMPLE,
	});

	return (
		<S.Menu>
			<S.MenuLeft>
				<img src={Elipse} alt="" width="55" />
				<div>
					<span>HANK</span>
					<br />
					<span>20562</span>
				</div>
				<Back />
			</S.MenuLeft>
			<S.MenuRight>
				<nav>
					{navItems.map((item, index) => (
						<S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
							<S.MenuItemButton
								active={item.path === active}
								onClick={() => onNavigate(item.path)}
							>
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
