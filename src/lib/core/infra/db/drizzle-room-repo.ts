import { Fail, Ok, type IResult, type IAdapter, Combine } from 'rich-domain';
import { rooms, type DbRoom } from '$lib/server/services/drizzle/schemas';
import { type Room, type RoomRepoTrait } from '$lib/core/domain/rooms';
import type { Db } from '$lib/server/services/drizzle';

export interface DrizzleRoomRepoDeps {
	db: Db;
	toDomain: IAdapter<DbRoom, Room>;
	toInfra: IAdapter<Room, DbRoom>;
}

export class DrizzleRoomRepo implements RoomRepoTrait {
	constructor(protected readonly deps: DrizzleRoomRepoDeps) {}

	async fetchListForOwnerId(ownerId: string): Promise<IResult<Room[]>> {
		try {
			const queryResult = await this.deps.db.query.rooms.findMany({
				where: (room, { eq }) => eq(room.ownerId, ownerId)
			});
			if (queryResult.length === 0) return Ok([]);
			const roomResults = queryResult.map((room) => this.deps.toDomain.build(room));
			if (Combine(roomResults).isFail()) return Fail('Failed to fetch a room');
			const rooms = roomResults.map((result) => result.value());
			return Ok(rooms);
		} catch (error) {
			console.error(JSON.stringify(error, null, 2));
			return Fail('Failed to fetch rooms');
		}
	}

	async save(room: Room): Promise<IResult<void>> {
		const modelResult = this.deps.toInfra.build(room);
		if (modelResult.isFail()) return Fail(modelResult.error());
		const model = modelResult.value();
		try {
			await this.deps.db
				.insert(rooms)
				.values(model)
				.onConflictDoUpdate({
					target: rooms.id,
					set: {
						name: model.name,
						ownerId: model.ownerId,
						status: model.status,
						metadata: model.metadata
					}
				});
			return Ok();
		} catch (error) {
			console.error(JSON.stringify((error as Error).message, null, 2));
			return Fail('Failed to save Room');
		}
	}

	async fetchById(id: string): Promise<IResult<Room>> {
		try {
			const fetchResult = await this.deps.db.query.rooms.findFirst({
				where: (room, { eq }) => eq(room.id, id)
			});
			if (!fetchResult) return Fail(`Room not found with id ${id}`);
			const roomResult = this.deps.toDomain.build(fetchResult);
			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();
			return Ok(room);
		} catch (error) {
			console.error(JSON.stringify(error, null, 2));
			return Fail('Failed to fetch room');
		}
	}
}
