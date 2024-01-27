import type { PageServerLoad } from './$types';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

export const load: PageServerLoad = async (event) => {
	await userIdOrRedirect(event.locals);

	return {
		pathname: event.url.pathname
	};
};
