import { useUpdateMyPresence } from '~shared/services/realtime/utils/use-update-my-presence';

export const unmute = async () => {
	const updateMyPresence = useUpdateMyPresence();
	updateMyPresence({
		isMuted: false
	});
};
