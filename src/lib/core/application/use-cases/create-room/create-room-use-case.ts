import { Fail, Ok, type IResult, type IUseCase } from 'rich-domain';
import type { CreateRoomUseCaseDTO } from './create-room-use-case-dto';
import { RoomBuilder } from '$lib/core/domain/rooms';

export interface CreateRoomUseCaseDeps { }

export class CreateRoomUseCase implements IUseCase<CreateRoomUseCaseDTO, IResult<void>> {

    constructor(protected readonly deps?: CreateRoomUseCaseDeps) { }

    async execute(dto: CreateRoomUseCaseDTO): Promise<IResult<void>> {
        try {
            const roomResult = new RoomBuilder().withName(dto.name.value).build()
            if (roomResult.isFail()) return Fail(roomResult.error())
            const room = roomResult.value()

            return Ok()
        } catch (error) {
            console.log(error)
            return Fail('Something went wrong')
        }
    }
}
