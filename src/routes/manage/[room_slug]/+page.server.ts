import { error, fail, redirect } from '@sveltejs/kit';
import { load as loadRoom } from '~pages/manage-room-page/api/load';
import type { PageServerLoad } from '../../manage/[room_slug]/$types';

export const config = {
	runtime: 'edge'
};

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/');

	const userId = session?.user?.id;
	if (!userId)
		return fail(401, {
			message: 'Unauthorized'
		});

	const { room } = loadRoom({ roomSlug: event.params.room_slug, userId });

	return {
		pathname: event.url.pathname,
		room: await room.then((result) => {
			if (!result.data)
				error(500, {
					message: String(result.error)
				});
			return result.data;
		})
	};
};
