import { Fail, Ok, type IResult, type IUseCase } from 'rich-domain';
import type { RequestRoomUseCaseDTO } from './request-room-use-case-dto';
import { RoomBuilder } from '$lib/core/domain/rooms';

export class RequestRoomUseCase implements IUseCase<RequestRoomUseCaseDTO, IResult<void>> {
    async execute(dto: RequestRoomUseCaseDTO): Promise<IResult<void>> {
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
