import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { requestRoomAction as requestRoom } from '~features/rooms/request-room-button/api/request-room-action';
import { loadDashPage } from '~pages/dash/api/load-dash-page';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId) throw redirect(303, '/');

	const { roomList } = loadDashPage({
		userId
	});

	return {
		roomsListPromise: roomList
	};
};

export const actions = {
	requestRoom
} satisfies Actions;
