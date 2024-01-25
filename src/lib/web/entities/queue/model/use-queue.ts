import { derived, type Readable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import type { QueueStore, SpeakerStore, User } from '../lib/types';

interface UseQueue {
	queue: QueueStore;
	queuePosition: Readable<number>;
	speaker: SpeakerStore;
	currentUserIsSpeaker: Readable<boolean>;
	currentUserIsQueued: Readable<boolean>;
}

export function useQueue(others: Readable<User[]>, me: Readable<User | null>): UseQueue {
	const queue: QueueStore = derived(
		[others, me],
		([$others, $me]) =>
			[...$others, ...($me ? [$me] : [])]
				.filter((person) => person.presence.queueStatus?.hasJoined ?? false)
				.sort(
					(a, b) =>
						(a.presence.queueStatus?.timestamp || 0) - (b.presence.queueStatus?.timestamp || 0)
				),
		[]
	);
	setContext('queue', queue);

	const speaker: SpeakerStore = derived(queue, ($queue) => [...$queue].shift(), undefined);
	setContext('speaker', speaker);

	const currentUserIsSpeaker = derived(
		[speaker, me],
		([$speaker, $me]) => ($speaker?.id && $me?.id ? $speaker?.id === $me?.id : false),
		false
	);
	setContext('currentUserIsSpeaker', currentUserIsSpeaker);

	const queuePosition = derived(
		[queue, me],
		([$queue, $me]) => $queue.findIndex((person) => person.id === $me?.id) + 1,
		0
	);
	setContext('queuePosition', queuePosition);

	const currentUserIsQueued = derived(queuePosition, ($position) => $position > 0, false);
	setContext('currentUserIsQueued', currentUserIsQueued);

	return {
		queue,
		speaker,
		currentUserIsSpeaker,
		currentUserIsQueued,
		queuePosition
	};
}

export function getQueue(): QueueStore {
	return getContext('queue');
}

export function getSpeaker(): SpeakerStore {
	return getContext('speaker');
}

export function getCurrentUserIsQueued(): Readable<boolean> {
	return getContext('currentUserIsQueued');
}

export function getCurrentUserIsSpeaker(): Readable<boolean> {
	return getContext('currentUserIsSpeaker');
}

export function getQueuePosition(): Readable<number> {
	return getContext('queuePosition');
}
