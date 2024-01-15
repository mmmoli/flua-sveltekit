import { expect, test, describe, beforeEach } from 'vitest';
import { User } from './user.aggregate-root';
import { ID } from 'rich-domain';

describe('user aggregate', () => {
	let user: User;
	beforeEach(() => {
		user = User.create({
			avatarUrl:
				'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cdesc%3E%22Fun%20Emoji%20Set%22%20by%20%22Davis%20Uche%22%2C%20licensed%20under%20%22CC%20BY%204.0%22.%20%2F%20Remix%20of%20the%20original.%20-%20Created%20with%20dicebear.com%3C%2Fdesc%3E%3Cmetadata%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Atitle%3EFun%20Emoji%20Set%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%20rdf%3Aabout%3D%22https%3A%2F%2Fwww.instagram.com%2Fdavedirect3%2F%22%3E%3Cdc%3Atitle%3EDavis%20Uche%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F968125295144990435%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%2371cf62%22%20width%3D%22200%22%20height%3D%22200%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22matrix(1.5625%200%200%201.5625%2037.5%20110.94)%22%3E%3Cpath%20d%3D%22M40.54%2030h-.75c-9.7-.22-20.8-5.3-23.7-16.15a1.36%201.36%200%200%201%20.44-1.55%201.41%201.41%200%200%201%202.26.86c2.55%209.46%2012.42%2013.89%2021.06%2014.08%208.24.16%2019.04-3.84%2022.46-14.57a1.47%201.47%200%200%201%201.65-.55A1.44%201.44%200%200%201%2065%2013.5C61.85%2023.31%2052.3%2030%2040.54%2030Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.5625%200%200%201.5625%2031.25%2059.38)%22%3E%3Cpath%20d%3D%22M74.46%2030.06a13%2013%200%200%201-13-13v-.66C61.46%205.95%2073.01-.82%2080.39.15c6.54.83%207.07%205.02%207.07%2011.24v5.67a13.01%2013.01%200%200%201-13%2013Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M70.28%209.73a2.29%202.29%200%201%200%200-4.58%202.29%202.29%200%200%200%200%204.58Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M74.52%2018.54a5.32%205.32%200%201%200%200-10.65%205.32%205.32%200%200%200%200%2010.65Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M13.47%2030.06a13.01%2013.01%200%200%200%2012.99-13v-.66C26.46%205.95%2014.92-.82%207.53.15.97.98.46%205.17.46%2011.39v5.67a13%2013%200%200%200%2013%2013Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M9.3%209.73a2.29%202.29%200%201%200%200-4.58%202.29%202.29%200%200%200%200%204.58Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M13.54%2018.54a5.32%205.32%200%201%200%200-10.65%205.32%205.32%200%200%200%200%2010.65Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			email: 'test@email.com',
			id: ID.create('user-id'),
			name: 'Test User'
		}).value();
	});

	test('exists', () => {
		expect(user).toBeTruthy();
	});
});
