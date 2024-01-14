import { routes } from '~shared/config/routes';
import type { NavItemList } from '../lib/types';

export const navItems: NavItemList = [
	{
		label: 'Dash',
		href: routes.dashPage()
	},
	{
		label: 'Rooms',
		href: routes.roomsPage()
	},
	{
		label: 'Account',
		href: routes.accountPage()
	}
];
