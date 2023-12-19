import { RoomBuilder, type Room } from '$lib/core/domain/rooms';
import {
	isReadyRoomStatus,
	RoomStatusSchema,
	type RoomStatusProps
} from '$lib/core/domain/rooms/room-status.value-object';
import type { DbRoom, RoomMetadata } from '$lib/server/services/drizzle/schemas';
import { Fail, type IAdapter, type IResult, Ok } from 'rich-domain';

export class RoomToDbAdapter implements IAdapter<Room, DbRoom> {
	toInfra: IAdapter<Room, RoomModel> = new RoomToInfraAdapter();
	build(input: Room): IResult<DbRoom> {
		const infraResult = this.toInfra.build(input);
		if (infraResult.isFail()) return Fail(infraResult.error());
		const model = infraResult.value();
		return Ok(model);
	}
}

export type RoomModel = Readonly<DbRoom>;
export class RoomToInfraAdapter implements IAdapter<Room, RoomModel> {
	build(input: Room): IResult<DbRoom> {
		let metadata: RoomMetadata = {};
		const statusProps = input.status.toObject() as RoomStatusProps;
		if (isReadyRoomStatus(statusProps)) {
			metadata = {
				...metadata,
				externalData: {
					externalId: statusProps.externalId,
					namespace: statusProps.namespace
				}
			};
		}

		const createdAt = input.get('createdAt');
		const updatedAt = input.get('updatedAt');
		if (!createdAt || !updatedAt) {
			return Fail('Missing createdAt or updatedAt');
		}

		const model: RoomModel = {
			id: input.id.value(),
			description: input.get('description')?.get('value') ?? null,
			name: input.get('name').get('value'),
			ownerId: input.get('ownerId').value(),
			slug: input.slug,
			status: input.get('status').get('label'),
			metadata,
			createdAt,
			updatedAt
		};

		return Ok(model);
	}
}

export class DbToRoomAdapter implements IAdapter<DbRoom, Room> {
	build(input: DbRoom): IResult<Room> {
		const builder = new RoomBuilder({ ownerId: input.ownerId });
		const parseStatus = RoomStatusSchema.safeParse({
			label: input.status,
			namespace: input.metadata?.externalData?.namespace,
			externalId: input.metadata?.externalData?.externalId
		});
		if (parseStatus.success === false) return Fail('Validation failed');
		const statusProps = parseStatus.data;
		builder
			.withCreatedAt(input.createdAt)
			.withId(input.id)
			.withName(input.name)
			.withSlug(input.slug)
			.withStatus(statusProps)
			.withUpdatedAt(input.updatedAt);

		if (input.description) {
			builder.withDescription(input.description);
		}

		const result = builder.build();
		if (result.isFail()) return Fail(result.error());
		const room = result.value();
		return Ok(room);
	}
}
