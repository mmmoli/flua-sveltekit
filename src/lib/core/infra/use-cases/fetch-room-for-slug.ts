import { FetchRoomForSlugUseCase } from '$lib/core/application/use-cases';
import { RoomToInfraAdapter } from '../adapters/room-adapters';
import { roomRepo } from '../db';

export const fetchRoomForSlugUseCase = new FetchRoomForSlugUseCase({
	roomRepo,
	presenter: new RoomToInfraAdapter()
});
