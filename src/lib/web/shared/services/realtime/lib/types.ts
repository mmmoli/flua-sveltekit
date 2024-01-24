import type { User, Room, BaseUserMeta } from '@liveblocks/client';

export type ServerTime = number;

export type Presence = {
	queueStatus: {
		hasJoined: boolean;
		timestamp: ServerTime;
	} | null;
	isMuted: boolean;
};

export type Storage = {};

export type HtchRealtimeUserMeta = BaseUserMeta;

// Optionally, UserMeta represents static/readonly metadata on each User, as
// provided by your own custom auth backend (if used). Useful for data that
// will not change during a session, like a User's name or avatar.
// type UserMeta = {
// 	id?: string; // Accessible through `user.id`
// 	info: Json; // Accessible through `user.info`
// };

export type RoomEvent = never;

export type RealtimeRoom = Room<Presence, Storage, HtchRealtimeUserMeta, RoomEvent>;

export type FluaRealtimeUser = User<Presence, HtchRealtimeUserMeta>;
