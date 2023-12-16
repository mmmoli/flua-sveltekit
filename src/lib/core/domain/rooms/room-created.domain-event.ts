import type { IDomainEvent, IHandle } from "rich-domain";
import type { Room } from "./room.aggregate-root";

export class RoomCreatedEvent implements IHandle<Room>{
    public eventName: string;

    constructor() {
        this.eventName = 'RoomCreated';
    }

    dispatch(event: IDomainEvent<Room>): void {
        // your action here
        const { aggregate } = event;
        console.log(`EVENT DISPATCH: ${aggregate.hashCode().value()}`);
    }
}


