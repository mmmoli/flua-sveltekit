import {
	ListRoomsForOwnerIdUseCase,
	type ListRoomsForOwnerIdUseCaseDTO
} from '$lib/server/core/application/use-cases';
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
