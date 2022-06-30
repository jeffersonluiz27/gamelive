import * as S from './style';
import Back from 'assets/icons/returnArrow.svg';
import Elipse from 'assets/img/hankElipse.png';
import NewGame from 'assets/icons/newGame.svg';
import UserEdit from 'assets/icons/userEdit.svg';
import MiniLogo from 'assets/img/logo2.png';
import { RoutePath } from 'types/routes';
import { NavItem } from './types';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

interface MenuProps {
	active: RoutePath;
	navItems: NavItem[];
}

const Menu = ({ active, navItems }: MenuProps) => {
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
				<img src={Back} alt="" width="50" />
			</S.MenuLeft>
			<S.MenuRight>
				<img src={UserEdit} alt="" width="42" />
				<Link to="/newgame">
					<img src={NewGame} alt="" width="55" />
				</Link>
				<img src={MiniLogo} alt="" width="80" />
				{dateDescription}
			</S.MenuRight>
		</S.Menu>
	);
};

export default Menu;
