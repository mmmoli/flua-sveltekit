import { Fail, Ok, type IResult, type IUseCase } from 'rich-domain';
import type { CreateRoomUseCaseDTO } from './create-room-use-case-dto';
import { RoomBuilder } from '$lib/core/domain/rooms';

export class CreateRoomUseCase implements IUseCase<CreateRoomUseCaseDTO, IResult<void>> {
    async execute(dto: CreateRoomUseCaseDTO): Promise<IResult<void>> {
        try {
            const roomResult = new RoomBuilder({
                ownerId: dto.ownerId
            }).withName(dto.name.value).build()
            if (roomResult.isFail()) return Fail(roomResult.error())
            const room = roomResult.value()
            room.dispatchAll()
            return Ok()
        } catch (error) {
            console.log(error)
            return Fail('Failed to create Room')
        }
    }
}
