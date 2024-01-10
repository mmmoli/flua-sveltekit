import { RoomRequestPolicy } from '../core/application/policies/room-request-policy';
import { RoomReadyPolicy } from '../core/application/policies/room-ready-policy';
import {
	RequestRoomUseCase,
	type RequestRoomUseCaseDTO
} from '../core/application/use-cases/request-room';
import { RoomToInfraAdapter } from '../core/infra/adapters/room-adapters';
import { roomRepo } from '../core/infra/db';
import { roomService } from '../core/infra/services';

export const requestRoomCommand = async (dto: RequestRoomUseCaseDTO) => {
	const roomReadyPolicy = new RoomReadyPolicy();
	const presenter = new RoomToInfraAdapter();

	const roomRequestPolicy = new RoomRequestPolicy({
		roomService,
		roomRepo,
		roomReadyPolicy
	});

	const useCase = new RequestRoomUseCase({
		roomRepo,
		roomRequestPolicy,
		presenter
	});

	return useCase.execute(dto);
};
