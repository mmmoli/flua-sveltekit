import type { IDomainEvent, IHandle } from "rich-domain";
import type { Room } from "./room.aggregate-root";

export class RoomClosed implements IHandle<Room>{
    public eventName: string;

    constructor() {
        this.eventName = 'RoomClosed';
    }

    dispatch(event: IDomainEvent<Room>): void {
        const { aggregate } = event;
        console.log(`EVENT DISPATCH: ${aggregate.hashCode().value()}`);
    }
}


