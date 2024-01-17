import { actions, load as loadImpl } from '~pages/manage-room-page/api';
import type { PageServerLoad } from './$types';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	return loadImpl({
		userId,
		roomSlug: event.params.room_slug,
		pathname: event.url.pathname
	});
};

export { actions };
