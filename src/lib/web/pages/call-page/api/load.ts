import { load as loadRoom } from '~entities/room/api/load';

export interface Params {
	roomSlug: string;
	userId: string;
}

export const load = async ({ roomSlug, userId }: Params) => {
	const roomResultPromise = loadRoom({
		roomSlug,
		userId
	});

	return {
		roomResultPromise
	};
};
