<script lang="ts">
	import Empty from './empty.svelte';
	import QueueItem from './queue-item.svelte';
	import { getQueue } from '~entities/queue';
	const queue = getQueue();
</script>

{#if $queue.length === 0}
	<Empty />
{:else}
	<div>
		<ol class="queue flex list-none ps-0">
			{#each $queue as person}
				<li class="queued-person on">
					<QueueItem {person} />
				</li>
			{/each}
		</ol>
	</div>
{/if}

<style>
	.queued-person.on ~ .queued-person.on::before {
		content: ', ';
	}
</style>
