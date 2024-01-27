<script lang="ts">
	import { getContext } from 'svelte';
	import { type Controls, getCurrentUserIsQueued } from '~entities/queue';
	import { Button } from '~ui/button';
	const { join, leave } = getContext<Controls>('controls');
	const isQueued = getCurrentUserIsQueued();
</script>

{#if $isQueued}
	<Button class="block" variant="destructive" size="lg" on:click={leave}>Leave</Button>
{:else}
	<Button class="block" variant="secondary" size="lg" on:click={join}>Join</Button>
{/if}
