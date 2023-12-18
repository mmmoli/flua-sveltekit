import type { EventHandler, IDomainEvent, IHandle as DomainEvent } from "rich-domain";
import type { Room } from "./room.aggregate-root";

export class RoomReadyEvent implements DomainEvent<Room> {
    dispatch(event: IDomainEvent<Room>, handler: EventHandler<Room, void>): void {
        const { aggregate } = event
        console.log(`EVENT DISPATCH: RoomReadyEvent. ${aggregate.hashCode().value()}`);
        handler.execute({
            aggregate,
            eventName: RoomReadyEvent.name
        });
    }
}


