import { RoomRequestPolicy } from '$lib/core/application/policies';
import { RoomReadyPolicy } from '$lib/core/application/policies/room-ready-policy';
import { RequestRoomUseCase } from '$lib/core/application/use-cases';
import { roomRepo } from '../db';
import { roomService } from '../services';

const roomReadyPolicy = new RoomReadyPolicy();

const roomRequestPolicy = new RoomRequestPolicy({
	roomService,
	roomRepo,
	roomReadyPolicy
});

export const requestRoomUseCase = new RequestRoomUseCase({
	roomRepo,
	roomRequestPolicy
});
