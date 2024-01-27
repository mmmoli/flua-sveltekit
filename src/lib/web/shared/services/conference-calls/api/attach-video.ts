import { selectCameraStreamByPeerID } from '@100mslive/hms-video-store';
import type { PeerId, Track } from '../lib/types';
import { hmsActions, hmsStore } from '../lib/hms-client';

export interface AttachOrDetachVideoParams {
	videoElement: HTMLVideoElement;
	peerId: PeerId;
}

export const attachOrDetachVideo = ({ peerId, videoElement }: AttachOrDetachVideoParams) =>
	hmsStore.subscribe((track: Track | undefined) => {
		if (!track || !videoElement) return;
		if (track?.enabled) {
			hmsActions.attachVideo(track.id, videoElement);
		} else {
			hmsActions.detachVideo(track.id, videoElement);
		}
	}, selectCameraStreamByPeerID(peerId));
