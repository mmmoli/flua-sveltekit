import {
	RenameRoomUseCase,
	type RenameRoomUseCaseDTO
} from '../core/application/use-cases/rooms/rename-room.use-case';
import { roomRepo } from '../core/infra/db';

export const renameRoomCommand = async (dto: RenameRoomUseCaseDTO) => {
	console.log('renameRoomCommand');
	const useCase = new RenameRoomUseCase({
		roomRepo
	});

	return useCase.execute(dto);
};
