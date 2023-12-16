import type { Room } from "$lib/core/domain/rooms";
import { type EventHandler, type HandlerPayload } from "rich-domain";

export class RoomClosedPolicy implements EventHandler<Room, void>{
    async execute(data: HandlerPayload<Room>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

