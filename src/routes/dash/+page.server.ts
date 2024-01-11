import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { requestRoomAction as requestRoom } from '~features/rooms/request-room-button/api/action';
import { loadDashPage } from '~pages/dash/api/load-dash-page';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId) throw redirect(303, '/');

	const roomListPromise = loadDashPage({
		userId
	});

	return {
		rooms: await roomListPromise
	};
};

export const actions = {
	requestRoom
} satisfies Actions;
