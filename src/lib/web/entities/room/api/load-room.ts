import { fetchRoomForSlugQuery } from '~queries/fetch-room-for-slug';

export interface LoadManagePage {
	roomSlug: string;
	userId: string;
}

export const loadRoom = ({ roomSlug, userId }: LoadManagePage) => {
	return fetchRoomForSlugQuery({
		slug: {
			value: roomSlug
		},
		userId
	});
};
