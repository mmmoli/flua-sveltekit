import type { FluaRealtimeUser } from '~shared/services/realtime/lib/types';

import { derived, type Readable } from 'svelte/store';

export type User = Readonly<FluaRealtimeUser>;
export type UserId = User['id'];

// // export type User = Presence;

// // export type Queue = User[];
// // export type UserList = Map<UserId, User>;

// // export const updatedUser = (me: User) => {
// // 	everyone.update((everyone) => {
// // 		const userIndex = everyone.findIndex((user) => user.id === me.id);
// // 		if (userIndex === -1) return [...everyone, me];
// // 		return [...everyone.slice(0, userIndex), me, ...everyone.slice(userIndex + 1)];
// // 	});
// // };

// export function useQueue({ others, me }: UseQueueParams): UseQueue {
// 	console.log('others', get(others));

// 	const everyone = derived(
// 		[others, me],
// 		([$others, $me]) => [...($others ? [...$others] : []), ...($me ? [$me] : [])] as User[],
// 		[]
// 	);

// 	const queue = derived(
// 		everyone,
// 		($people) =>
// 			$people
// 				.filter((person) => person.presence.queueStatus?.hasJoined ?? false)
// 				.sort(
// 					(a, b) =>
// 						(a.presence.queueStatus?.timestamp || 0) - (b.presence.queueStatus?.timestamp || 0)
// 				),
// 		[]
// 	);

// 	const speaker = derived(queue, ($queue) => $queue.shift(), undefined);

// 	const userIdIsLive = (id: UserId) => derived(speaker, ($speaker) => $speaker?.id === id, false);

// 	return {
// 		queue,
// 		speaker,
// 		userIdIsLive
// 	};
// }

// interface UseQueueParams {
// 	others: Writable<User[]>;
// 	me: Writable<User>;
// }

interface UseQueue {
	queue: Readable<User[]>;
	speaker: Readable<User | undefined>;
	userIdIsLive: (id: UserId) => Readable<boolean>;
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

	const userIdIsLive = (id: UserId) => derived(speaker, ($speaker) => $speaker?.id === id, false);

	return { queue, speaker, userIdIsLive };
}
