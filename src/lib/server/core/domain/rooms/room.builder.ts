import { type IResult, Combine, Fail, ID, type UID, Ok } from 'rich-domain';
import { Room } from './room.aggregate-root';
import { RoomName } from './room-name.value-object';
import { RoomStatus, type RoomStatusProps } from './room-status.value-object';
import { RoomDescription } from './room-description.value-object';
import { RoomSlug } from './room-slug.value-object';

export interface RoomBuilderProps {
	ownerId: string;
}

export class RoomBuilder {
	protected slugResult: IResult<RoomSlug>;
	protected nameResult: IResult<RoomName>;
	protected descriptionResult: IResult<RoomName> = RoomDescription.createWithDefaults();
	protected statusResult: IResult<RoomStatus> = RoomStatus.createWithDefaults();
	protected id: UID = ID.create();
	protected ownerId: UID;
	protected createdAt: Date | undefined;
	protected updatedAt: Date | undefined;

	constructor(props: RoomBuilderProps) {
		this.ownerId = ID.create(props.ownerId);
		this.nameResult = RoomName.createWithDefaults();
		this.slugResult = RoomSlug.createFromName(this.nameResult.value());
	}

	fromRoom(room: Room): RoomBuilder {
		const id = room.get('id')?.value()!;
		const builder = new RoomBuilder({
			ownerId: room.get('ownerId').value()
		})
			.withId(id)
			.withName(room.get('name').get('value'))
			.withStatus(room.get('status').toObject())
			.withCreatedAt(room.get('createdAt'))
			.withUpdatedAt(room.get('updatedAt'))
			.withSlug(room.get('slug').get('value'));

		const description = room.get('description');
		if (description) builder.withDescription(description.get('value'));

		return builder;
	}

	withName(name: string): RoomBuilder {
		this.nameResult = RoomName.create({ value: name });
		return this;
	}

	withId(id: string): RoomBuilder {
		this.id = ID.create(id);
		return this;
	}

	withStatus(props: RoomStatusProps): RoomBuilder {
		this.statusResult = RoomStatus.create(props);
		return this;
	}

	withDescription(content: string): RoomBuilder {
		this.descriptionResult = RoomDescription.create({
			value: content
		});
		return this;
	}

	withCreatedAt(date: Date): RoomBuilder {
		this.createdAt = date;
		return this;
	}

	withUpdatedAt(date: Date): RoomBuilder {
		this.updatedAt = date;
		return this;
	}

	withSlug(slug: string): RoomBuilder {
		this.slugResult = RoomSlug.create({
			value: slug
		});
		return this;
	}

	public build(): IResult<Room> {
		const result = Combine([this.nameResult, this.descriptionResult, this.slugResult]);
		if (result.isFail()) return Fail(result.error());
		const now = new Date();

		return Room.create({
			id: this.id,
			description: this.descriptionResult.value(),
			name: this.nameResult.value(),
			ownerId: this.ownerId,
			slug: this.slugResult.value(),
			status: this.statusResult.value(),
			createdAt: this.createdAt ?? now,
			updatedAt: this.updatedAt ?? now
		});
	}
}
