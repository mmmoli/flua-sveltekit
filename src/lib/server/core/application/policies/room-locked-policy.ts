import type { Room, RoomServiceTrait } from '$lib/server/core/domain/rooms';
import { type EventHandler, type HandlerPayload } from 'rich-domain';

export interface RoomLockedPolicyDeps {
	roomService: RoomServiceTrait;
}
export class RoomLockedPolicy implements EventHandler<Room, void> {
	constructor(protected readonly deps: RoomLockedPolicyDeps) {}

	async execute(data: HandlerPayload<Room>): Promise<void> {
		console.log('RoomRequestPolicy');
	}
}
