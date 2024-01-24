<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '~ui/button';
	import { joinQueue } from '../api/join-queue';
	import { leaveQueue } from '../api/leave-queue';
	import { mute } from '../api/mute';
	import { unmute } from '../api/unmute';
	import { callMachine } from '../model/call-machine';
	import { useMachine } from '@xstate/svelte';
	import { roomStore } from '~shared/services/realtime/lib/room-store';
	import { get } from 'svelte/store';
	import { useQueue } from '../model/use-queue';
	import { useOthers, useSelf } from '~shared/services/realtime';

	const room = get(roomStore);
	const me = useSelf();
	const others = useOthers();
	const { queue, userIdIsLive } = useQueue(others, me);

	$: userId = $page.data.session?.user?.id;

	$: isLive = userIdIsLive(userId);

	const connectedMachine = callMachine.provide({
		actions: {
			join: () => joinQueue(room),
			leave: () => leaveQueue(room),
			mute,
			unmute
		}
	});
	const { send, snapshot } = useMachine(connectedMachine);

	$: queued = $snapshot.tags.has('queued');
	$: speaking = $snapshot.tags.has('speaking');

	$: {
		if (isLive) {
			console.log('is live');
			send({ type: 'SPEAK' });
		} else {
			console.log('is not');
			send({ type: 'FINISH' });
		}
	}
</script>

<div class="flex space-x-2">
	<Button
		on:click={() => {
			send({ type: 'JOIN' });
		}}
		disabled={queued}
	>
		Join
	</Button>
	<Button
		on:click={() => {
			send({ type: 'LEAVE' });
		}}
		disabled={!queued}
	>
		Leave
	</Button>
	<Button
		on:click={() => {
			send({ type: 'FINISH' });
		}}
		disabled={!speaking}
	>
		Finish
	</Button>
	{#if queued}
		<Button on:click={() => {}} disabled={speaking} size="sm" variant="ghost">Speak</Button>
	{/if}
</div>

<pre>
	{userId}
</pre>

<pre>
	{JSON.stringify($isLive, null, 2)}
</pre>

<slot />
