import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './view/$types';
import { loadManagePage } from '$lib/web/pages/room-manage/api/load-manage-page';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/');

	const userId = session?.user?.id;
	if (!userId)
		return fail(401, {
			message: 'Unauthorized'
		});

	const { roomPromise } = loadManagePage({ roomSlug: event.params.room_slug, userId });

	return {
		room: await roomPromise
	};
};
