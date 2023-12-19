import { Aggregate, type UID, type IResult, Ok } from 'rich-domain';
import { RoomLockedEvent } from './room-locked.domain-event';
import { RoomRequestedEvent } from './room-requested.domain-event';
import { RoomStatus, type RoomReadyStatus } from './room-status.value-object';
import type { RoomName } from './room-name.value-object';
import { RoomReadyEvent } from './room-ready.domain-event';
import type { RoomDescription } from './room-description.value-object';
import type { RoomSlug } from './room-slug.value-object';

export interface RoomProps {
	id?: UID;
	name: RoomName;
	ownerId: UID;
	slug: RoomSlug;
	status: RoomStatus;
	description?: RoomDescription;
	createdAt?: Date;
	updatedAt?: Date;
}

export class Room extends Aggregate<RoomProps> {
	private constructor(props: RoomProps) {
		super(props);
		if (props.id?.isNew()) {
			this.addEvent(new RoomRequestedEvent());
		}
	}

	public static create(props: RoomProps): IResult<Room> {
		const now = new Date();
		const propsWithDefaults: RoomProps = {
			...props,
			createdAt: props.createdAt || now,
			updatedAt: props.updatedAt || now
		};
		const room = new Room(propsWithDefaults);
		return Ok(room);
	}

	public get status(): RoomStatus {
		return this.props.status;
	}

	public get slug(): string {
		return this.props.slug.get('value');
	}

	public ready(opts: Omit<RoomReadyStatus, 'label'>) {
		const lockedStatus = RoomStatus.create({
			label: 'ready',
			...opts
		}).value();

		this.change('status', lockedStatus);
		this.addEvent(new RoomReadyEvent());
	}

	public lock() {
		const lockedStatus = RoomStatus.create({
			label: 'locked'
		}).value();

		this.change('status', lockedStatus);
		this.addEvent(new RoomLockedEvent());
	}
}
