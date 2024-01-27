import { actions as requestRoomActions } from '~features/rooms/request-room/api/actions';
import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../rooms/$types';
import { fetchRoomListForOwnerQuery } from '~queries/list-rooms-for-owner-id';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

// Rule: get props here, but do no logic
// Return ASAP
export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	const rooms = fetchRoomListForOwnerQuery({
		ownerId: userId
	}).then((result) => result.toObject());

	return {
		rooms,
		pathname: event.url.pathname
	};
};

export const actions: Actions = {
	...requestRoomActions
};
