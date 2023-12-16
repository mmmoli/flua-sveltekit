import { RoomRequestPolicy } from '$lib/core/application/policies';
import { RequestRoomUseCase } from '$lib/core/application/use-cases';
import { roomService } from '../services';

const roomRequestPolicy = new RoomRequestPolicy({
    roomService
});

export const requestRoomUseCase = new RequestRoomUseCase({
    roomRequestPolicy
});

