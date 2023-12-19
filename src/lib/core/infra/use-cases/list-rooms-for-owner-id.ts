import { ListRoomsForOwnerIdUseCase } from '$lib/core/application/use-cases';
import { RoomToInfraAdapter } from '../adapters/room-adapters';
import { roomRepo } from '../db';

export const listRoomsForOwnerIdUseCase = new ListRoomsForOwnerIdUseCase({
	roomRepo,
	presenter: new RoomToInfraAdapter()
});
