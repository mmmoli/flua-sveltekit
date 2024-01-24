<script lang="ts">
	import { Badge } from '~ui/badge';

	export let isSpeaker = false;
</script>

{#if isSpeaker}
	<Badge>
		<slot>LIVE</slot>
	</Badge>
{/if}
