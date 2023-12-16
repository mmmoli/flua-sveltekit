import { Aggregate, type UID, type IResult, Ok } from "rich-domain";
import type { RoomName } from "./room-name.value-object";
import { RoomClosedEvent, RoomCreatedEvent } from ".";
import { RoomStatus } from "./room-status.value-object";

export interface RoomProps {
    id?: UID;
    name: RoomName;
    ownerId: UID;
    status: RoomStatus;
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

    get status(): RoomStatus {
        return this.props.status;
    }

    public lock() {
        const lockedStatus = RoomStatus.create({
            label: 'locked'
        }).value()

        this.change('status', lockedStatus)
        this.addEvent(new RoomClosedEvent())
    }

}

