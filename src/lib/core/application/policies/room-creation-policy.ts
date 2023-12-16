import type { RoomCreatedEvent, RoomServiceTrait } from "$lib/core/domain/rooms";
import { type EventHandler, type IDomainEvent, type IHandle } from "rich-domain";

export interface RoomCreationPolicyDeps {
    roomService: RoomServiceTrait
}

export class RoomCreationPolicy implements IHandle<RoomCreatedEvent>{
    constructor(protected readonly deps: RoomCreationPolicyDeps) {
        this.setupSubscriptions();
    }

    setupSubscriptions(): void { }

    dispatch(event: IDomainEvent<RoomCreatedEvent>, handler: EventHandler<RoomCreatedEvent, void>): void | Promise<void> {

    }
}

