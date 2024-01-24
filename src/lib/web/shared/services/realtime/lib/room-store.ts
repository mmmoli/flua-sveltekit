import { writable } from 'svelte/store';
import type { RealtimeRoom } from './types';

export const roomStore = writable<RealtimeRoom>();
