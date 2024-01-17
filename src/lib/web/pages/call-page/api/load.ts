import { error } from '@sveltejs/kit';
import { load as loadRoom } from '~entities/room/api/load';

export interface LoadDashPageProps {
	userId: string;
	roomSlug: string;
	pathname: string;
}

export const load = async ({ userId, roomSlug, pathname }: LoadDashPageProps) => {
	const room = await loadRoom({
		roomSlug,
		userId
	}).then((result) => {
		if (!result.data) throw error(500, result.error?.toString());
		return result.data;
	});

	return {
		room,
		pathname
	};
};
