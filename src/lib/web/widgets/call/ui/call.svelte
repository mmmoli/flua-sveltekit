<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import { toggleMachine } from '../lib/call-state-machine';
	const { state, send } = useMachine(toggleMachine);
</script>

<button on:click={() => send('TOGGLE')}>
	{$state.value === 'inactive' ? 'Click to activate' : 'Active! Click to deactivate'}
</button>
