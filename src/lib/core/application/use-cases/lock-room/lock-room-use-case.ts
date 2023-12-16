import { Fail, Ok, type IResult, type IUseCase } from 'rich-domain';
import type { LockRoomUseCaseDTO } from './lock-room-use-case-dto';
import { type RoomRepoTrait } from '$lib/core/domain/rooms';

export interface LockRoomUseCaseDeps {
    roomRepo: RoomRepoTrait;
}

export class LockRoomUseCase implements IUseCase<LockRoomUseCaseDTO, IResult<void>> {

    constructor(protected readonly deps: LockRoomUseCaseDeps) { }

    async execute(dto: LockRoomUseCaseDTO): Promise<IResult<void>> {
        try {
            const roomResult = await this.deps.roomRepo.fetchById(dto.roomId)
            if (roomResult.isFail()) return Fail(roomResult.error())
            const room = roomResult.value()
            room.lock()
            room.dispatchAll()
            return Ok()
        } catch (error) {
            console.log(error)
            return Fail('Failed to close room')
        }
    }
}
