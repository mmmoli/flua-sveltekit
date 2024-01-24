import { loadRoomSSR } from '~entities/room/api/load-room';
import { loadRoomFormSSR } from '~widgets/rooms/room-form/api';
import type { PageServerLoad } from './$types';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';
import { type Actions } from '@sveltejs/kit';
import { actions as roomFormActions } from '~widgets/rooms/room-form/api';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	const room = await loadRoomSSR({
		roomSlug: event.params.room_slug,
		userId
	});

	const roomForm = await loadRoomFormSSR({ room });

	return {
		room,
		pathname: event.url.pathname,
		...roomForm
	};
};

export const actions: Actions = {
	...roomFormActions
};
