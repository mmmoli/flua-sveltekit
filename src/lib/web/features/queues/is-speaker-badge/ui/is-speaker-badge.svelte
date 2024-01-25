<script lang="ts">
	import { getCurrentUserIsSpeaker } from '~entities/queue';
	import { Badge } from '~ui/badge';
	const isSpeaker = getCurrentUserIsSpeaker();
</script>

{#if $isSpeaker}
	<Badge>
		<slot>LIVE</slot>
	</Badge>
{/if}
