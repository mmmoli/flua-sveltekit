import type { EventHandler, IDomainEvent, IHandle as DomainEvent } from "rich-domain";
import type { Room } from "./room.aggregate-root";

export class RoomRequestedEvent implements DomainEvent<Room>{
    dispatch(event: IDomainEvent<Room>, handler: EventHandler<Room, void>): void {
        const { aggregate } = event
        console.log(`EVENT DISPATCH: RoomRequested. ${aggregate.hashCode().value()}`);
        handler.execute({
            aggregate,
            eventName: this.eventName,
        });
    }
}


