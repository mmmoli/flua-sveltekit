import type { PageServerLoad } from '../../join/[room_slug]/$types';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';
import { loadRoomSSR } from '~entities/room/api/load-room';

export const ssr = false;

export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	const room = await loadRoomSSR({
		roomSlug: event.params.room_slug,
		userId
	});

	return {
		room,
		pathname: event.url.pathname
	};
};
