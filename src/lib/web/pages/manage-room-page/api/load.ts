import { error } from '@sveltejs/kit';
import { load as loadRoom } from '~entities/room/api/load';
import { load as loadForm } from '~widgets/rooms/room-form/api';

export interface Params {
	roomSlug: string;
	userId: string;
	pathname: string;
}

export const load = async ({ roomSlug, userId, pathname }: Params) => {
	const room = await loadRoom({
		roomSlug,
		userId
	}).then((result) => {
		if (!result.data) throw error(500, result.error?.toString());
		return result.data;
	});

	const roomForm = await loadForm({ room });

	return {
		room,
		pathname,
		...roomForm
	};
};
