import { db } from '$lib/server/services/drizzle';
import { dbToRoomAdapter, roomToDbAdapter } from '../adapters';
import { DrizzleRoomRepo } from './drizzle-room-repo';

export const roomRepo = new DrizzleRoomRepo({
	db,
	toDomain: dbToRoomAdapter,
	toInfra: roomToDbAdapter
});
