import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { requestRoomAction as requestRoom } from '~features/rooms/request-room-button/api/request-room-action';
import { load as loadDashPage } from '~pages/dash-page/api/load';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId) throw redirect(303, '/');

	const { roomsForUser } = await loadDashPage({
		userId
	});

	return {
		rooms: roomsForUser
	};
};

export const actions = {
	requestRoom
} satisfies Actions;
