import { type RequestEvent, fail, redirect } from '@sveltejs/kit';
import { requestRoomCommand } from '~commands/rooms/request-room';
import { routes } from '~shared/config/routes';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';

export const actions = {
	requestRoomAction: async (event: RequestEvent) => {
		const userId = await userIdOrRedirect(event.locals);
		const result = await requestRoomCommand({ ownerId: userId });
		if (result.isFail())
			return fail(400, {
				message: result.error()
			});
		const roomSlug = result.value();
		redirect(303, routes.manageRoomPage({ roomSlug }));
	}
};
