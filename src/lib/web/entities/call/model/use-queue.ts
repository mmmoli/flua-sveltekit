import type { FluaRealtimeUser } from '~shared/services/realtime/lib/types';

import { derived, type Readable } from 'svelte/store';

export type User = Readonly<FluaRealtimeUser>;
export type UserId = User['id'];

interface UseQueue {
	queue: Readable<User[]>;
	speaker: Readable<User | undefined>;
	userIdIsSpeaker: (id: UserId) => Readable<boolean>;
}

export function useQueue($others: Readable<User[]>, $me: Readable<User | null>): UseQueue {
	const queue = derived(
		[$others, $me],
		([$others, $me]) =>
			[...$others, ...($me ? [$me] : [])]
				.filter((person) => person.presence.queueStatus?.hasJoined ?? false)
				.sort(
					(a, b) =>
						(a.presence.queueStatus?.timestamp || 0) - (b.presence.queueStatus?.timestamp || 0)
				),
		[]
	);

	const speaker = derived(queue, ($queue) => [...$queue].shift(), undefined);

	const userIdIsSpeaker = (id: UserId) =>
		derived(speaker, ($speaker) => $speaker?.id === id, false);

	return { queue, speaker, userIdIsSpeaker };
}
