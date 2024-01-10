import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { requestRoomAction as requestRoom } from '~features/rooms/request-room-button/api/action';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/');
	return {};
};

export const actions = {
	requestRoom
} satisfies Actions;
