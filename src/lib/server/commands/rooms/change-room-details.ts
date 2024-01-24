import {
	ChangeRoomDetailsUseCase,
	type ChangeRoomDetailsUseCaseDTO
} from '../../core/application/use-cases/rooms/change-room-details.use-case';
import { roomRepo } from '../../core/infra/db';

export const changeRoomDetailsCommand = async (dto: ChangeRoomDetailsUseCaseDTO) => {
	const useCase = new ChangeRoomDetailsUseCase({
		roomRepo
	});

	return useCase.execute(dto);
};
