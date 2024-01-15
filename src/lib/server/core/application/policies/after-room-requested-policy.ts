import type { EventHandler, HandlerPayload } from 'rich-domain';
import {
	RoomReadyEvent,
	type Room,
	type RoomRepoTrait,
	type RoomServiceTrait
} from '../../domain/rooms';

export interface AfterRoomRequestedPolicyDeps {
	roomRepo: RoomRepoTrait;
	roomService: RoomServiceTrait;
	afterRoomReadyPolicy: EventHandler<Room, void>;
}

export class AfterRoomRequestedPolicy implements EventHandler<Room, void> {
	constructor(protected readonly deps: AfterRoomRequestedPolicyDeps) {}

	async execute(data: HandlerPayload<Room>): Promise<void> {
		try {
			const { aggregate: room } = data;

			const saveResult = await this.deps.roomRepo.save(room);
			if (saveResult.isFail()) console.error(saveResult.error());

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

			const resaveResult = await this.deps.roomRepo.save(room);
			if (resaveResult.isFail()) {
				console.error(JSON.stringify(resaveResult.error(), null, 2));
				return;
			}
			room.dispatchEvent(RoomReadyEvent.name, this.deps.afterRoomReadyPolicy);
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
		}
	}
}
