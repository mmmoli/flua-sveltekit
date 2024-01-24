<!--
  Works similarly to `liveblocks-react` RoomProvider
  https://liveblocks.io/docs/api-reference/liveblocks-react#RoomProvider
-->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import type { Presence, HtchRealtimeUserMeta, RoomEvent } from '../lib/types';
	import { client } from '../lib/client';
	import { roomStore } from '../lib/room-store';

	export let id: string;
	let leave = () => {};

	if (!id) {
		throw new Error('RoomProvider requires an id');
	}

	if (client) {
		const info = client.enterRoom<Presence, Storage, HtchRealtimeUserMeta, RoomEvent>(id, {
			initialPresence: {
				queueStatus: {
					hasJoined: false,
					timestamp: 0
				},
				isMuted: false
			}
		});

		roomStore.set(info.room);
		leave = info.leave;

		onDestroy(() => {
			leave();
		});
	}
</script>

<slot />
