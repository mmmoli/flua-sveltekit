import { getServerTime } from '~shared/services/realtime/api/get-server-time';
import type { RealtimeRoom } from '~shared/services/realtime';

export const joinQueue = async (room: RealtimeRoom) => {
	const timestamp = await getServerTime();
	room.updatePresence({
		isMuted: false,
		queueStatus: {
			hasJoined: true,
			timestamp
		}
	});
};
