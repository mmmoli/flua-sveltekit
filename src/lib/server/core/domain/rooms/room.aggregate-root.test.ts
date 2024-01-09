import { describe, beforeEach, test, expect } from 'vitest';
import { RoomName } from './room-name.value-object';
import { Room } from './room.aggregate-root';
import { ID } from 'rich-domain';
import { RoomStatus } from './room-status.value-object';
import { RoomSlug } from './room-slug.value-object';

describe('Room', () => {
	let room: Room;

	beforeEach(() => {
		const name = RoomName.createWithDefaults().value();
		room = Room.create({
			ownerId: ID.create(),
			name,
			status: RoomStatus.createWithDefaults().value(),
			slug: RoomSlug.createFromName(name).value()
		}).value();
	});

	test('can be marked as ready', () => {
		const details = {
			namespace: 'fake-namespace',
			externalId: 'fake-external-id'
		};
		const readyStatus = RoomStatus.create({
			label: 'ready',
			...details
		}).value();

		room.ready(details);
		expect(room.status.isEqual(readyStatus)).toBeTruthy();
	});
});
