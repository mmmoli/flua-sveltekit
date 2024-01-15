import { AfterRoomReadyPolicy } from '../core/application/policies/after-room-ready-policy';
import { AfterRoomRequestedPolicy } from '../core/application/policies/after-room-requested-policy';
import {
	RequestRoomUseCase,
	type RequestRoomUseCaseDTO
} from '../core/application/use-cases/rooms/request-room.use-case';
import { roomRepo } from '../core/infra/db';
import { roomService } from '../core/infra/services/room-service';

export const requestRoomCommand = async (dto: RequestRoomUseCaseDTO) => {
	const afterRoomReadyPolicy = new AfterRoomReadyPolicy({
		roomRepo
	});

	const afterRoomRequestedPolicy = new AfterRoomRequestedPolicy({
		roomService,
		roomRepo,
		afterRoomReadyPolicy
	});

	const useCase = new RequestRoomUseCase({
		afterRoomRequestedPolicy
	});

	return useCase.execute(dto);
};
