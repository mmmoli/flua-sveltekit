import type { Room, RoomServiceTrait } from "$lib/core/domain/rooms";
import { type EventHandler, type HandlerPayload, } from "rich-domain";

export interface RoomRequestPolicyDeps {
    roomService: RoomServiceTrait
}
export class RoomRequestPolicy implements EventHandler<Room, void>{
    constructor(protected readonly deps: RoomRequestPolicyDeps) { }

    async execute(data: HandlerPayload<Room>): Promise<void> {
        console.log('RoomRequestPolicy')
    }
}

