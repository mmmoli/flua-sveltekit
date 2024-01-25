<script lang="ts">
	import { getQueuePosition } from '~entities/call';
	import { Badge } from '~ui/badge';
	const position = getQueuePosition();
</script>

{#if $position > 0}
	<Badge variant="secondary">
		<slot>Position: {$position}</slot>
	</Badge>
{/if}
