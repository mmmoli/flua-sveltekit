import type { DbUser } from '$lib/server/services/drizzle/schemas';

export interface UserInfo {
	userId: DbUser['id'];
}
