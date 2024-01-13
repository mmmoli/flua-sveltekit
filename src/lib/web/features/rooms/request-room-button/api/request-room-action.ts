import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { requestRoomCommand } from '~commands/request-room';
import { routes } from '~shared/config/routes';

export const requestRoomAction = async (event: RequestEvent) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId)
		return fail(401, {
			message: 'Unauthorized'
		});
	const result = await requestRoomCommand({ ownerId: userId });
	if (result.isFail())
		return fail(500, {
			message: result.error()
		});
	const room = result.value();

	redirect(303, routes.roomManagePage({ roomSlug: room.slug }));

	return {
		room
	};
};
