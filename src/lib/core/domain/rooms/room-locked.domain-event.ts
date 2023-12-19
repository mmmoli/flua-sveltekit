import type { IDomainEvent, IHandle as DomainEvent } from 'rich-domain';
import type { Room } from './room.aggregate-root';

export class RoomLockedEvent implements DomainEvent<Room> {
	dispatch(event: IDomainEvent<Room>): void {
		const { aggregate } = event;
		console.log(`EVENT DISPATCH: RoomLocked. ${aggregate.hashCode().value()}`);
	}
}
