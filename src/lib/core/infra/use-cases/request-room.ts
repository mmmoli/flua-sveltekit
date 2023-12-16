import { RoomRequestPolicy } from '$lib/core/application/policies';
import { RequestRoomUseCase } from '$lib/core/application/use-cases';
import { roomRepo } from '../db';
import { roomService } from '../services';

const roomRequestPolicy = new RoomRequestPolicy({
    roomService
});

export const requestRoomUseCase = new RequestRoomUseCase({
    roomRepo,
    roomRequestPolicy,
});

