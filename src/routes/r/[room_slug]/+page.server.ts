import { fail, redirect } from '@sveltejs/kit';
import { loadManagePage } from '~pages/room-manage/api/load-manage-page';
import type { PageServerLoad } from '../../r/[room_slug]/$types';

export const load: PageServerLoad = async (event) => {
	const redirectAuthUrl = '/';
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, redirectAuthUrl);

	const userId = session?.user?.id;
	if (!userId) return fail(401, { message: 'Unauthorized' });

	const { roomPromise } = loadManagePage({ roomSlug: event.params.room_slug, userId });

	return {
		room: await roomPromise
	};
};
