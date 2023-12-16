import type { RoomClosedEvent } from "$lib/core/domain/rooms";
import { type EventHandler, type IDomainEvent, type IHandle } from "rich-domain";


export class RoomClosedPolicy implements IHandle<RoomClosedEvent>{
    constructor() {
        this.setupSubscriptions();
    }

    setupSubscriptions(): void { }

    dispatch(event: IDomainEvent<RoomClosedEvent>, handler: EventHandler<RoomClosedEvent, void>): void | Promise<void> {

    }
}

