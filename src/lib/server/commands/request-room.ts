import { RoomRequestPolicy } from '$lib/server/core/application/policies';
import { RoomReadyPolicy } from '$lib/server/core/application/policies/room-ready-policy';
import { RequestRoomUseCase } from '$lib/server/core/application/use-cases';
import { roomRepo } from '../core/infra/db';
import { roomService } from '../core/infra/services';

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
