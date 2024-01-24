import { getServerTime } from '~shared/services/realtime/api/get-server-time';
import type { RealtimeRoom } from '~shared/services/realtime/lib/types';

export const leaveQueue = async (room: RealtimeRoom) => {
	const timestamp = await getServerTime();
	room.updatePresence({
		isMuted: true,
		queueStatus: {
			hasJoined: false,
			timestamp
		}
	});
};
