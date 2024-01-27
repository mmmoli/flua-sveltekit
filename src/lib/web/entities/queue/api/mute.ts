import { useUpdateMyPresence } from '~shared/services/realtime/utils/use-update-my-presence';
import { mute as muteCall } from '~shared/services/conference-calls';

export const mute = async () => {
	const updateMyPresence = useUpdateMyPresence();
	updateMyPresence({
		isMuted: true
	});
	muteCall();
};
