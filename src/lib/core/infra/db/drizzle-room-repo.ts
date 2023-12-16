import { Fail, Ok, type IResult, type IAdapter } from 'rich-domain';
import { rooms, type DbRoom } from '$lib/server/services/drizzle/schemas';
import { type Room, type RoomRepoTrait } from '$lib/core/domain/rooms';
import type { Db } from '$lib/server/services/drizzle';

export interface DrizzleRoomRepoDeps {
    db: Db;
    toDomain: IAdapter<DbRoom, Room>;
    toInfra: IAdapter<Room, DbRoom>;
}

export class DrizzleRoomRepo implements RoomRepoTrait {
    constructor(protected readonly deps: DrizzleRoomRepoDeps) { }

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
                        ...model
                    }
                });
            return Ok();
        } catch (error) {
            console.error(JSON.stringify(error, null, 2));
            return Fail('Failed to save Room.');
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
