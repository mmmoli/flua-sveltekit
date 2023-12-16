import { Fail, Ok, type IResult, type IUseCase } from 'rich-domain';
import type { CloseRoomUseCaseDTO } from './close-room-use-case-dto';
import { type RoomRepoTrait } from '$lib/core/domain/rooms';

export interface CloseRoomUseCaseDeps {
    roomRepo: RoomRepoTrait;
}

export class CloseRoomUseCase implements IUseCase<CloseRoomUseCaseDTO, IResult<void>> {

    constructor(protected readonly deps: CloseRoomUseCaseDeps) { }

    async execute(dto: CloseRoomUseCaseDTO): Promise<IResult<void>> {
        try {
            const roomResult = await this.deps.roomRepo.fetchById(dto.roomId)
            if (roomResult.isFail()) return Fail(roomResult.error())
            const room = roomResult.value()
            room.close()
            room.dispatchAll()
            return Ok()
        } catch (error) {
            console.log(error)
            return Fail('Failed to close room')
        }
    }
}
