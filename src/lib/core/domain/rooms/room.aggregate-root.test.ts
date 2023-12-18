import { describe, beforeEach, test, expect } from 'vitest'
import { RoomName } from './room-name.value-object'
import { Room } from './room.aggregate-root'
import { ID } from 'rich-domain';
import { RoomStatus } from './room-status.value-object';

describe('Room', () => {
    let room: Room;

    beforeEach(() => {
        room = Room.create({
            ownerId: ID.create(),
            name: RoomName.createWithDefaults().value(),
            status: RoomStatus.createWithDefaults().value()
        }).value()
    })

    test('can be marked as ready', () => {
        const details = {
            namespace: 'fake-namespace',
            externalId: 'fake-external-id'
        }
        const readyStatus = RoomStatus.create({
            label: 'ready',
            ...details
        }).value()

        room.ready(details)
        expect(room.status.isEqual(readyStatus)).toBeTruthy()
    })

})
