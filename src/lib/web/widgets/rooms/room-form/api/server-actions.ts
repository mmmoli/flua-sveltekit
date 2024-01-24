import { fail, type Actions, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';
import { roomFormSchema } from '../model/form-schema';
import { changeRoomDetailsCommand } from '~commands/rooms/change-room-details';
import { userIdOrRedirect } from '~shared/utils/auth/user-id-or-redirect';
import { actionKey } from '../lib/action-key';

export const actions: Actions = {
	[actionKey]: async ({ request, locals }: RequestEvent) => {
		const userId = await userIdOrRedirect(locals);
		const roomForm = await superValidate(request, roomFormSchema);
		if (!roomForm.valid) return fail(400, { roomForm });
		const result = await changeRoomDetailsCommand({
			name: roomForm.data.name,
			roomId: roomForm.data.id,
			description: roomForm.data.description ?? undefined,
			userId
		});
		if (result.isFail()) return fail(400, { roomForm });
		return { roomForm };
	}
};
