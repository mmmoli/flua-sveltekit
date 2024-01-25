import type { Readable } from 'svelte/store';
import type { FluaRealtimeUser } from '~shared/services/realtime';

export type User = Readonly<FluaRealtimeUser>;
export type UserId = NonNullable<Required<User['id']>>;

export type Queue = User[];
export type QueueStore = Readable<Queue>;

export type Speaker = User | undefined;
export type SpeakerStore = Readable<Speaker>;

export interface Controls {
	join: () => void;
	leave: () => void;
}
