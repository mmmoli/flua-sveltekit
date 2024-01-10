import { fail } from '@sveltejs/kit';
import { fetchRoomForSlugQuery } from '~queries/fetch-room-for-slug';

export interface LoadManagePage {
	roomSlug: string;
	userId: string;
}

export const loadManagePage = ({ roomSlug, userId }: LoadManagePage) => {
	const roomPromise = fetchRoomForSlugQuery({
		slug: {
			value: roomSlug
		},
		userId
	}).then((result) => {
		if (result.isFail()) return fail(404, { message: 'Not found' });
		return result.value();
	});

	return {
		roomPromise
	};
};
