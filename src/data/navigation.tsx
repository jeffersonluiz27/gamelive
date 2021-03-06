import { NavItem } from '../components/Menu/types';
import { FaUserEdit as UserEdit } from 'react-icons/fa';
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

export const navigationItemsVazio: NavItem[] = [];