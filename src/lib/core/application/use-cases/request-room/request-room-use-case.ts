import { Fail, Ok, type IResult, type IUseCase, type EventHandler } from 'rich-domain';
import type { RequestRoomUseCaseDTO } from './request-room-use-case-dto';
import { type Room, RoomBuilder, RoomRequestedEvent, type RoomRepoTrait } from '$lib/core/domain/rooms';

export interface RequestRoomUseCaseDeps {
    roomRepo: RoomRepoTrait;
    roomRequestPolicy?: EventHandler<Room, void>
}
export class RequestRoomUseCase implements IUseCase<RequestRoomUseCaseDTO, IResult<void>> {
    constructor(protected readonly deps: RequestRoomUseCaseDeps) { }
    async execute(dto: RequestRoomUseCaseDTO): Promise<IResult<void>> {
        try {
            const roomResult = new RoomBuilder({
                ownerId: dto.ownerId
            }).withName(dto.name.value).build()
            if (roomResult.isFail()) return Fail(roomResult.error())
            const room = roomResult.value()

            const saveResult = await this.deps.roomRepo.save(room)
            if (saveResult.isFail()) return Fail(saveResult.error())

            room.dispatchEvent(RoomRequestedEvent.name, this.deps?.roomRequestPolicy)
            return Ok()
        } catch (error) {
            console.log(error)
            return Fail('Failed to create Room')
        }
    }
}
