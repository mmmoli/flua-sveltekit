import type { PageServerLoad } from '../../join/[room_slug]/$types';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';
import { actions, load as loadImpl } from '~pages/call-page/api';

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
