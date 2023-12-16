import type { Room, RoomDetails, RoomServiceTrait } from "$lib/core/domain/rooms";
import { Ok, type IResult } from "rich-domain";

export class RoomService implements RoomServiceTrait {
    async create(room: Room): Promise<IResult<RoomDetails>> {
        console.info('RoomService.create', room)
        return Ok({
            id: 'fake-external-id',
            namespace: 'fake-namespace',
        })
    }
}