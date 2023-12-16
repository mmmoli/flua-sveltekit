import { Aggregate, type UID, type IResult, Ok } from "rich-domain";
import type { RoomName } from "./room-name.value-object";
import { RoomCreatedEvent } from ".";

export interface RoomProps {
    id?: UID;
    name: RoomName;
    ownerId: UID;
}

export class Room extends Aggregate<RoomProps>{
    private constructor(props: RoomProps) {
        super(props);
        if (props.id?.isNew()) {
            this.addEvent(new RoomCreatedEvent())
        }
    }

    public static create(props: RoomProps): IResult<Room> {
        const room = new Room(props);
        return Ok(room);
    }
}

