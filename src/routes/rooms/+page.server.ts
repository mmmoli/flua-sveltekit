import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/');

	const userId = session?.user?.id;
	if (!userId)
		return fail(401, {
			message: 'Unauthorized'
		});

	return {
		rooms: []
	};
};
