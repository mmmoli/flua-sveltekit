import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId) throw redirect(303, '/');

	return {
		pathname: event.url.pathname
	};
};
