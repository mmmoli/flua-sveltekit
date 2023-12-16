import { RoomBuilder, type Room } from "$lib/core/domain/rooms";
import type { DbRoom } from "$lib/server/services/drizzle/schemas";
import { Fail, type IAdapter, type IResult, Ok } from "rich-domain";

export class RoomToDbAdapter implements IAdapter<Room, DbRoom> {
	build(input: Room): IResult<DbRoom> {
		const data = input.toObject()
		return Ok(data);
	}
}

export class DbToRoomAdapter implements IAdapter<DbRoom, Room> {
	build(input: DbRoom): IResult<Room> {
		const builder = new RoomBuilder({ ownerId: input.ownerId })
		const result = builder
			.withId(input.id)
			.withName(input.name)
			.build();
		if (result.isFail()) return Fail(result.error());
		const room = result.value()
		return Ok(room);
	}
}
