import { RoomBuilder, type Room, type RoomRepoTrait } from "$lib/core/domain/rooms";
import { Fail, Ok, type IResult } from "rich-domain";

export class RoomRepo implements RoomRepoTrait {

    async fetchById(id: string): Promise<IResult<Room>> {

        const builder = new RoomBuilder({
            ownerId: 'fake-owner-id'
        })

        const roomResult = builder
            .withId(id)
            .withName('fake-room-name')
            .build()

        if (roomResult.isFail()) return Fail(roomResult.error())
        const room = roomResult.value()
        return Ok(room)
    }
}