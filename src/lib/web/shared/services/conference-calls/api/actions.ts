import { hmsActions } from '../lib/hms-client';

export const mute = () => {
	hmsActions.setLocalAudioEnabled(false);
};

export const unmute = () => {
	hmsActions.setLocalAudioEnabled(true);
};

export interface JoinParams {
	displayName: string;
	token: string;
}

export const join = ({ displayName, token }: JoinParams) => {
	hmsActions.join({ userName: displayName, authToken: token, rememberDeviceSelection: true });
};

export const leave = () => {
	hmsActions.leave();
};
