import type { FluaRealtimeUser } from '~shared/services/realtime';

export type User = Readonly<FluaRealtimeUser>;
export type UserId = User['id'];

export type Queue = User[];

export type Controls = {
	join: () => void;
	leave: () => void;
};
