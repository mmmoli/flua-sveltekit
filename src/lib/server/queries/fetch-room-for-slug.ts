import {
	FetchRoomForSlugUseCase,
	type FetchRoomForSlugUseCaseDTO
} from '$lib/server/core/application/use-cases';
import { RoomToInfraAdapter } from '../core/infra/adapters/room-adapters';
import { roomRepo } from '../core/infra/db';

export const fetchRoomForSlugCommand = async (dto: FetchRoomForSlugUseCaseDTO) => {
	const useCase = new FetchRoomForSlugUseCase({
		roomRepo,
		presenter: new RoomToInfraAdapter()
	});

	return useCase.execute(dto);
};
