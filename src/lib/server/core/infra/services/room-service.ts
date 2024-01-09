import type { Room, RoomDetails, RoomServiceTrait } from '$lib/server/core/domain/rooms';
import { Ok, type IResult } from 'rich-domain';

export class RoomService implements RoomServiceTrait {
	async create(_room: Room): Promise<IResult<RoomDetails>> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(
					Ok({
						id: 'fake-external-id',
						namespace: 'fake-namespace'
					})
				);
			}, 3000);
		});
	}

	async destroy(room: Room): Promise<IResult<void>> {
		console.info('RoomService.destroy', room);
		return Ok();
	}
}
