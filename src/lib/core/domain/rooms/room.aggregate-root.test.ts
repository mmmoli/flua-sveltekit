import { describe, beforeEach } from 'vitest'
import { RoomName } from './room-name.value-object'
import { Room } from './room.aggregate-root'
import { ID } from 'rich-domain';

describe.skip('Room', () => {
    let room: Room;

    beforeEach(() => {
        room = Room.create({
            ownerId: ID.create(),
            name: RoomName.createWithDefaults().value()
        }).value()
    })


})
