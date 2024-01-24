import { useUpdateMyPresence } from '~shared/services/realtime/utils/use-update-my-presence';

export const mute = async () => {
	const updateMyPresence = useUpdateMyPresence();
	updateMyPresence({
		isMuted: true
	});
};
