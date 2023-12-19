import type { Room } from '$lib/core/domain/rooms';
import { type EventHandler, type HandlerPayload } from 'rich-domain';

export class RoomReadyPolicy implements EventHandler<Room, void> {
	async execute(data: HandlerPayload<Room>): Promise<void> {
		try {
			console.log('RoomReadyPolicy. Send emails?');
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
		}
	}
}
