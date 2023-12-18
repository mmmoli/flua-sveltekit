import type { Room, RoomRepoTrait, RoomServiceTrait } from '$lib/core/domain/rooms';
import { RoomReadyEvent } from '$lib/core/domain/rooms/room-ready.domain-event';
import { Ok, type EventHandler, type HandlerPayload, type IResult, Fail } from 'rich-domain';

export interface RoomRequestPolicyDeps {
    roomService: RoomServiceTrait;
    roomRepo: RoomRepoTrait;
    roomReadyPolicy?: EventHandler<Room, void>
}
export class RoomRequestPolicy implements EventHandler<Room, void> {
    constructor(protected readonly deps: RoomRequestPolicyDeps) { }

    async execute(data: HandlerPayload<Room>): Promise<void> {
        try {
            const { aggregate: room } = data;
            const result = await this.deps.roomService.create(room);
            if (result.isFail()) {
                console.error(JSON.stringify(result.error(), null, 2));
                return;
            }

            const { id: externalId, ...details } = result.value();
            room.ready({
                ...details,
                externalId
            });

            const saveResult = await this.deps.roomRepo.save(room);
            if (saveResult.isFail()) {
                console.error(JSON.stringify(saveResult.error(), null, 2));
                return;
            }
            room.dispatchEvent(RoomReadyEvent.name, this.deps.roomReadyPolicy);
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
        }
    }
}
