import { error } from '@sveltejs/kit';
import { fetchRoomForSlugQuery } from '~queries/fetch-room-for-slug';

export interface LoadRoomSSRProps {
	roomSlug: string;
	userId: string;
}

export const loadRoomSSR = async ({ roomSlug, userId }: LoadRoomSSRProps) => {
	return fetchRoomForSlugQuery({
		slug: roomSlug,
		userId
	})
		.then((result) => result.toObject())
		.then((result) => {
			if (!result.data) throw error(500, result.error?.toString());
			return result.data;
		});
};
