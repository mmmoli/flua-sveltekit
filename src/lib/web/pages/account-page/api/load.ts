import { fetchRoomListForOwnerQuery } from '~queries/list-rooms-for-owner-id';

export interface LoadDashPageProps {
	userId: string;
}

export const load = async ({ userId }: LoadDashPageProps) => {
	// const roomsForUser = fetchRoomListForOwnerQuery({
	// 	ownerId: userId
	// }).then((result) => result.toObject());

	return {
		// roomsForUser
	};
};
