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
	import IsSpeaker from './is-speaker.svelte';
	import SpeakerPosition from './speaker-position.svelte';
	import { T } from '~ui/typography';
	import Queue from './queue.svelte';

	const room = get(roomStore);
	const me = useSelf();
	const others = useOthers();
	const { queue, userIdIsSpeaker } = useQueue(others, me);

	$: userId = $page.data.session?.user?.id;

	$: isSpeaker = userIdIsSpeaker(userId);

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

	$: {
		isSpeaker ? send({ type: 'SPEAK' }) : send({ type: 'FINISH' });
	}
</script>

<div class="m-2 border p-2">
	<T.H2>Queue</T.H2>
	<Queue queue={$queue} />
	<div class="flex space-x-2">
		<Button
			variant="secondary"
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
			variant="destructive"
			disabled={!queued}
		>
			{$isSpeaker ? 'End' : 'Leave'}
		</Button>
	</div>
</div>

<div class="flex space-x-2">
	<IsSpeaker isSpeaker={$isSpeaker} />
	<SpeakerPosition position={$queue.findIndex((person) => person.id === userId)} />
</div>

<slot />
