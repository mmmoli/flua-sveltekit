import type { UserList, User } from '../../../../entities/call/model/use-queue';
import type { FluaRealtimeUser } from '../lib/types';

export const othersToUserList = (others: FluaRealtimeUser[]): UserList => {
	return new Map(
		others.map((user) => [
			String(user.id),
			{
				id: String(user.id),
				avatar: String(user.info?.avatar),
				name: String(user.info?.name),
				isQueued: user.presence.queueStatus?.hasJoined ?? false,
				timestamp: Number(user.presence.queueStatus?.timestamp)
			} satisfies User
		])
	);
};
