import { fetchRoomListForOwnerQuery } from '~queries/list-rooms-for-owner-id';

export interface LoadDashPageProps {
	userId: string;
	pathname: string;
}

export const load = async ({ userId, pathname }: LoadDashPageProps) => {
	const roomsForUser = fetchRoomListForOwnerQuery({
		ownerId: userId
	}).then((result) => result.toObject());

	return {
		roomsForUser,
		pathname
	};
};
