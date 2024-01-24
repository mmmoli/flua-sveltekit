import { onDestroy } from 'svelte';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { useRoom } from './use-room';
import type { FluaRealtimeUser } from '../lib/types';

type Self = FluaRealtimeUser | null;

export function useSelf(): Writable<Self> {
	const room = useRoom();
	const self = writable<Self>();

	const unsubscribe = room.subscribe('my-presence', () => {
		const data: Self = room.getSelf();
		self.set(data);
	});

	onDestroy(unsubscribe);

	return self;
}
