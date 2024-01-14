import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { requestRoomAction as requestRoom } from '~features/rooms/request-room/api/request-room-action';
import { load as loadRoomsPage } from '~pages/rooms-page/api/load';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId) throw redirect(303, '/');

	const { roomsForUser } = await loadRoomsPage({
		userId
	});

	return {
		rooms: roomsForUser,
		pathname: event.url.pathname
	};
};

export const actions = {
	requestRoom
} satisfies Actions;
