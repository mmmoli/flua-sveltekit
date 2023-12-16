import { RoomLockedPolicy } from '$lib/core/application/policies';
import { LockRoomUseCase } from '$lib/core/application/use-cases';
import { roomRepo } from '../db';
import { roomService } from '../services';

const roomLockedPolicy = new RoomLockedPolicy({
    roomService
});

export const lockRoomUseCase = new LockRoomUseCase({
    roomRepo,
    roomLockedPolicy
});

