import { ListRoomsForOwnerIdUseCase } from '$lib/server/core/application/use-cases';
import { RoomToInfraAdapter } from '../core/infra/adapters/room-adapters';
import { roomRepo } from '../core/infra/db';

export const listRoomsForOwnerIdUseCase = new ListRoomsForOwnerIdUseCase({
	roomRepo,
	presenter: new RoomToInfraAdapter()
});
