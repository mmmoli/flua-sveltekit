import { loadRoom } from '$lib/web/entities/room/api/load-room';
import { fail } from '@sveltejs/kit';

export interface LoadManagePage {
	roomSlug: string;
	userId: string;
}

export const loadDetailPage = ({ roomSlug, userId }: LoadManagePage) => {
	const roomPromise = loadRoom({
		roomSlug,
		userId
	}).then((result) => {
		if (result.isFail()) return fail(404, { message: 'Not found' });
		return result.value();
	});

	return {
		roomPromise
	};
};
