<script lang="ts">
	import { callMachine } from '../model/call-machine';
	import { get } from 'svelte/store';
	import { joinQueue } from '../api/join-queue';
	import { leaveQueue } from '../api/leave-queue';
	import { mute } from '../api/mute';
	import { roomStore } from '~shared/services/realtime/lib/room-store';
	import { setContext } from 'svelte';
	import { unmute } from '../api/unmute';
	import { useMachine } from '@xstate/svelte';
	import { useOthers, useSelf } from '~shared/services/realtime';
	import { useQueue } from '../model/use-queue';

	const room = get(roomStore);
	const { currentUserIsSpeaker: isSpeaker } = useQueue(useOthers(), useSelf());

	const connectedMachine = callMachine.provide({
		actions: {
			join: () => joinQueue(room),
			leave: () => leaveQueue(room),
			mute,
			unmute
		}
	});
	const { send } = useMachine(connectedMachine);

	const controls = {
		join: () => send({ type: 'JOIN' }),
		leave: () => send({ type: 'LEAVE' })
	};

	setContext('controls', controls);

	$: {
		if (isSpeaker) {
			send({ type: 'SPEAK' });
		} else {
			send({ type: 'FINISH' });
		}
	}
</script>

<div class="flex">
	<slot name="call-video" />
	<slot name="call-titles" />
</div>

<slot name="call-queue" />
