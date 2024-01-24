<script lang="ts">
	import type { FluaRealtimeUser } from '~shared/services/realtime';
	import QueueItem from './queue-item.svelte';

	export let queue: Readonly<FluaRealtimeUser>[];
</script>

<!-- If empty, display message. Else display this list -->

{#if queue.length === 0}
	<p>No one here. Join to become speaker. Snooze-ya-loose</p>
{:else}
	<div>
		<ol class="queue flex list-none ps-0">
			{#each queue as person}
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
