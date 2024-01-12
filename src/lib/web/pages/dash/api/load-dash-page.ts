import { fetchRoomListForOwnerQuery } from '~queries/list-rooms-for-owner-id';

export interface LoadDashPageProps {
	userId: string;
}

export const loadDashPage = ({ userId }: LoadDashPageProps) => {
	const roomList = fetchRoomListForOwnerQuery({
		ownerId: userId
	}).then((result) => {
		if (result.isFail()) return [];
		return result.value();
	});

	return {
		roomList
	};
};
