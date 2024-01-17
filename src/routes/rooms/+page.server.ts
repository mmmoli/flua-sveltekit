import type { PageServerLoad } from '../rooms/$types';
import { actions, load as loadImpl } from '~pages/rooms-page/api';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

export const config = {
	runtime: 'edge'
};

// Rule: get props here, but do no logic
// Return ASAP
export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	return loadImpl({
		userId,
		pathname: event.url.pathname
	});
};

export { actions };
