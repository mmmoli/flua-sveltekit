import { useUpdateMyPresence } from '~shared/services/realtime/utils/use-update-my-presence';
import { unmute as unmuteCall } from '~shared/services/conference-calls';

export const unmute = async () => {
	const updateMyPresence = useUpdateMyPresence();
	updateMyPresence({
		isMuted: false
	});
	unmuteCall();
};
