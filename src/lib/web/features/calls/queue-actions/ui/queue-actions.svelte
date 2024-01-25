<script lang="ts">
	import { getContext } from 'svelte';
	import { type Controls, getCurrentUserIsQueued } from '~entities/call';
	import { Button } from '~ui/button';
	const { join, leave } = getContext<Controls>('controls');
	const isQueued = getCurrentUserIsQueued();
</script>

<div class="flex space-x-2">
	<Button variant="ghost" size="sm" on:click={join} disabled={$isQueued}>Join</Button>
	<Button variant="ghost" size="sm" on:click={leave} disabled={!$isQueued}>Leave</Button>
</div>
