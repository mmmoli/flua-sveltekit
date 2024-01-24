import { get } from 'svelte/store';
import { roomStore } from '../lib/room-store';
import type { RealtimeRoom } from '../lib/types';

/**
 * Works similarly to `liveblocks-react` useRoom
 * https://liveblocks.io/docs/api-reference/liveblocks-react#useRoom
 *
 * This does NOT return a Svelte store, just the plain room object
 * const room = useRoom()
 * room.history.undo()
 */
export function useRoom(): RealtimeRoom {
	const room = get(roomStore);

	if (!room) {
		throw new Error('Use RoomProvider as parent with id prop');
	}

	return room;
}
