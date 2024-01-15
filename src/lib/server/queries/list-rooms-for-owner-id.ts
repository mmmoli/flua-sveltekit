import {
	ListRoomsForOwnerIdUseCase,
	type ListRoomsForOwnerIdUseCaseDTO
} from '../core/application/use-cases/rooms/list-rooms-for-owner-id.use-case';
import { RoomToInfraAdapter } from '../core/infra/adapters/room-adapters';
import { roomRepo } from '../core/infra/db';

export const fetchRoomListForOwnerQuery = async (dto: ListRoomsForOwnerIdUseCaseDTO) => {
	const presenter = new RoomToInfraAdapter();

	const useCase = new ListRoomsForOwnerIdUseCase({
		roomRepo,
		presenter
	});

	return useCase.execute(dto);
};
