<script lang="ts">
	import { getContext } from 'svelte';
	import type { Controls } from '~entities/call';
	import { Button } from '~ui/button';
	const { join, leave } = getContext<Controls>('controls');
</script>

<div class="flex space-x-2">
	<Button variant="ghost" size="sm" on:click={join}>Join</Button>
	<Button variant="ghost" size="sm" on:click={leave}>Leave</Button>
</div>
