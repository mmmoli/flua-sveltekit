import { load as loadRoom } from '~entities/room/api/load';
import { error } from '@sveltejs/kit';

export interface Params {
	roomSlug: string;
	userId: string;
}

export const load = ({ roomSlug, userId }: Params) => {
	const room = loadRoom({
		roomSlug,
		userId
	});

	return {
		room
	};
};
