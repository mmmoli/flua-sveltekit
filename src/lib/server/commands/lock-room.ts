import { RoomLockedPolicy } from '$lib/server/core/application/policies';
import { LockRoomUseCase } from '$lib/server/core/application/use-cases';
import { roomRepo } from '../core/infra/db';
import { roomService } from '../core/infra/services';

const roomLockedPolicy = new RoomLockedPolicy({
	roomService
});

export const lockRoomUseCase = new LockRoomUseCase({
	roomRepo,
	roomLockedPolicy
});
