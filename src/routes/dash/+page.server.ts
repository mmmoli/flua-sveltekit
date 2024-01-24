import { actions as requestRoomActions } from '~features/rooms/request-room/api/actions';
import { fetchRoomListForOwnerQuery } from '~queries/list-rooms-for-owner-id';
import { type Actions } from '@sveltejs/kit';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';
import type { PageServerLoad } from '../dash/$types';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	const roomsForUser = fetchRoomListForOwnerQuery({
		ownerId: userId
	}).then((result) => result.toObject());

	return {
		roomsForUser,
		pathname: event.url.pathname
	};
};

export const actions: Actions = {
	...requestRoomActions
};
