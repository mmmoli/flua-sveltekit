import type { IResult } from 'rich-domain';
import type { Room } from './room.aggregate-root';

export interface RoomRepoTrait {
	fetchById(id: string): Promise<IResult<Room>>;
	fetchBySlug(slug: string): Promise<IResult<Room>>;
	fetchListForOwnerId(ownerId: string): Promise<IResult<Room[]>>;
	save(room: Room): Promise<IResult<void>>;
}
