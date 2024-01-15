import {
	FetchRoomForSlugUseCase,
	type FetchRoomForSlugUseCaseDTO
} from '../core/application/use-cases/rooms/fetch-room-for-slug.use-case';
import { RoomToInfraAdapter } from '../core/infra/adapters/room-adapters';
import { roomRepo } from '../core/infra/db';

export const fetchRoomForSlugQuery = async (dto: FetchRoomForSlugUseCaseDTO) => {
	const presenter = new RoomToInfraAdapter();

	const useCase = new FetchRoomForSlugUseCase({
		roomRepo,
		presenter
	});

	return useCase.execute(dto);
};
