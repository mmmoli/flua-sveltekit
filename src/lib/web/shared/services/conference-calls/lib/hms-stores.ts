import type { HMSStore } from '@100mslive/hms-video-store';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import { hmsStore } from './hms-client';
import {
	selectIsConnectedToRoom,
	selectIsLocalAudioEnabled,
	selectIsLocalVideoEnabled,
	selectPeers
} from '@100mslive/hms-video-store';

function hmsToSvelteStore<T>(selector: (store: HMSStore) => T): Readable<T> {
	return readable(hmsStore.getState(selector), (set) => {
		return hmsStore.subscribe(set, selector);
	});
}

export const userIsConnected = hmsToSvelteStore(selectIsConnectedToRoom);
export const videoPeers = hmsToSvelteStore(selectPeers);
export const audioIsEnabled = hmsToSvelteStore(selectIsLocalAudioEnabled);
export const videoIsEnabled = hmsToSvelteStore(selectIsLocalVideoEnabled);
