import type { IResult } from "rich-domain";
import type { Room } from "./room.aggregate-root";

export interface RoomDetails {
    readonly id: string;
    readonly namespace: string
}

export interface RoomServiceTrait {
    create(room: Room): Promise<IResult<RoomDetails>>
    destroy(room: Room): Promise<IResult<void>>
}