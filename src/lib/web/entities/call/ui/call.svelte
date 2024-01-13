<script lang="ts">
	import { callMachine } from '../model/call-machine';
	import { useMachine } from '@xstate/svelte';
	import { I } from '~ui/icons';
	import { T } from '~ui/typography';
	import { Button } from '~ui/button';

	const { send, snapshot: state } = useMachine(callMachine);

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
</script>

<div class="m-2 border border-black p-2">
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
		<Button
			on:click={() => {
				send({ type: 'FINISH' });
			}}
			disabled={!speaking}
		>
			Finish
		</Button>
		{#if queued}
			<Button
				on:click={() => {
					send({ type: 'SPEAK' });
				}}
				disabled={speaking}
				size="sm"
				variant="ghost"
			>
				Speak
			</Button>
		{/if}
	</div>
</div>
