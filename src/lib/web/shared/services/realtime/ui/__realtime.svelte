<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { FluaRealtimeUser, RealtimeRoom } from '../lib/types';
	import { client } from '../lib/client';
	import { queue, everyone, updatedUser } from '../../../../entities/call/model/queue-store';
	import { getInitialPresence } from '../utils/get-initial-presence';
	import { getServerTime } from '../api/get-server-time';
	import { page } from '$app/stores';
	import { othersToQueue } from '../utils/others-to-queue';

	export const controls = {
		joinQueue: async () => {
			if (!room) return;
			const timestamp = await getServerTime();
			room?.updatePresence({
				queueStatus: {
					hasJoined: true,
					timestamp
				}
			});
		},
		leaveQueue: async () => {
			if (!room) return;
			const timestamp = await getServerTime();
			room?.updatePresence({
				queueStatus: {
					hasJoined: false,
					timestamp
				}
			});
		}
	};

	let room: RealtimeRoom;
	export let roomId: string;
	let leave: () => void;
	let unsubscribeMyPresence = () => {};
	let unsubscribeOthers = () => {};

	// export let speak: () => void;

	const user = $page.data.session?.user;

	onMount(() => {
		getInitialPresence().then((initialPresence) => {
			const info = client.enterRoom(roomId, {
				initialPresence
			});
			room = info.room;

			unsubscribeMyPresence = room.subscribe('my-presence', (presence) => {
				updatedUser({
					id: String(user?.id),
					avatar: String(user?.image),
					name: String(user?.name),
					isQueued: Boolean(presence?.queueStatus?.hasJoined),
					timestamp: presence?.queueStatus?.timestamp ?? 0
				});
			});

			unsubscribeOthers = room.subscribe('others', (others) => {
				const newEveryone = othersToQueue(others as FluaRealtimeUser[]);
				console.log('newEveryone', newEveryone);
				everyone.set(newEveryone);
			});

			leave = info.leave;
		});
	});

	onDestroy(() => {
		unsubscribeMyPresence();
		unsubscribeOthers();
		leave?.();
	});
</script>

{#if room}
	<pre>
		{JSON.stringify($queue, null, 2)}
	</pre>
{/if}
