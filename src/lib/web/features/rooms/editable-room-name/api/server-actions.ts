import { fail, type RequestEvent } from '@sveltejs/kit';
import { renameRoomCommand } from '~commands/rename-room';

export const renameRoomAction = async (event: RequestEvent) => {
	const session = await event.locals.getSession();
	const userId = session?.user?.id;
	if (!userId)
		return fail(401, {
			message: 'Unauthorized'
		});
	const result = await renameRoomCommand({ userId, roomId: 'aaa', name: 'bbb' });
	if (result.isFail())
		return fail(500, {
			message: result.error()
		});
};
