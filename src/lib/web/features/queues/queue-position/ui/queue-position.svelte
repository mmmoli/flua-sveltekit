<script lang="ts">
	import { getQueuePosition } from '~entities/queue';
	import { Badge } from '~ui/badge';
	const position = getQueuePosition();
</script>

{#if $position > 0}
	<slot position={$position}>
		<Badge variant="secondary">
			<slot>Position: {$position}</slot>
		</Badge>
	</slot>
{:else}
	<slot name="not-queued" />
{/if}
