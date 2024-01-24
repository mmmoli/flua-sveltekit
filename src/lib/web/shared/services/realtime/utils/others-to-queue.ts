import type { Queue, User } from '../../../../entities/call/model/use-queue';
import type { FluaRealtimeUser } from '../lib/types';

export const othersToQueue = (others: FluaRealtimeUser[]): Queue => {
	return others.map(
		(user) =>
			({
				id: String(user.id),
				avatar: String(user.info?.avatar),
				name: String(user.info?.name),
				isQueued: user.presence.queueStatus?.hasJoined ?? false,
				timestamp: Number(user.presence.queueStatus?.timestamp)
			}) satisfies User
	);
};
