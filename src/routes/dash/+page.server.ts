import type { PageServerLoad } from '../dash/$types';
import { actions, load as loadImpl } from '~pages/dash-page/api';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const userId = await userIdOrRedirect(event.locals);

	return loadImpl({
		userId,
		pathname: event.url.pathname
	});
};

export { actions };
