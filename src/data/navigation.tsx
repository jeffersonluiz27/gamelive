import { NavItem } from '../components/Menu/types';
import { ReactComponent as UserEdit } from '../assets/icons/userEdit.svg';
import { ReactComponent as NewGame } from '../assets/icons/newGame.svg';
import { RoutePath } from '../types/routes';

export const navigationItems: NavItem[] = [
	{
		icon: <UserEdit />,
		path: RoutePath.USEREDIT,
	},
	{
		icon: <NewGame />,
		path: RoutePath.NEWGAME,
	},
];
