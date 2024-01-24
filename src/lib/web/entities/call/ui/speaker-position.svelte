<script lang="ts">
	import { Badge } from '~ui/badge';
	export let position: number;
</script>

{#if position > 0}
	<Badge variant="secondary">
		<slot>Position: {position + 1}</slot>
	</Badge>
{/if}
