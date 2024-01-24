<script lang="ts">
	import { callMachine } from '../model/call-machine';
	import { useMachine } from '@xstate/svelte';
	import { I } from '~ui/icons';
	import { T } from '~ui/typography';
	import { Button } from '~ui/button';
	import { Box } from '~ui/box';
	import { page } from '$app/stores';
	import { LiveblocksProvider, RoomProvider } from '~shared/services/realtime';

	export let roomId: string;

	let controls: {
		joinQueue: () => void;
		leaveQueue: () => void;
	};

	const connectedMachine = callMachine.provide({
		actions: {
			join: () => {
				controls.joinQueue();
			},
			leave: () => {
				controls.leaveQueue();
			},
			mute: () => {
				console.log('muting…');
			},
			unmute: () => {
				console.log('unmuting…');
			}
		}
	});

	const { send, snapshot: state } = useMachine(connectedMachine);

	interface Metadata {
		label?: string;
	}

	$: queued = $state.tags.has('queued');
	$: speaking = $state.tags.has('speaking');
	$: changing = $state.tags.has('changing');

	$: metadata = Object.keys($state.getMeta()).reduce((acc, key) => {
		const value = $state.getMeta()[key];
		return Object.assign(acc, value);
	}, {}) as Metadata;

	$: userId = $page.data.session?.user?.id;
</script>

<Box thickness="none" class="flex-row flex-wrap">
	<!-- <div class="aspect-video w-full bg-foreground md:w-2/3" /> -->
	<Box thickness="none" class="w-full md:w-1/3">
		<slot name="titles" />
	</Box>
</Box>

<div class="flex items-center space-x-2">
	<T.Lead>You&apos;re {metadata.label}</T.Lead>
	{#if changing}
		<I.Loader class="mr-2 h-4 w-4 animate-spin" />
	{/if}
</div>

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
	<!-- <Button
		on:click={() => {
			send({ type: 'FINISH' });
		}}
		disabled={!speaking}
	>
		Finish
	</Button>
	{#if queued}
		<Button on:click={() => {}} disabled={speaking} size="sm" variant="ghost">Speak</Button>
	{/if} -->
</div>

<pre>
  {JSON.stringify(userId, null, 2)}
</pre>

<LiveblocksProvider>
	<RoomProvider id={roomId}>live blocks</RoomProvider>
</LiveblocksProvider>
