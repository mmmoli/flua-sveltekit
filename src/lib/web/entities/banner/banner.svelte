<script lang="ts">
	import { Box } from '~ui/box';
	import { T } from '~ui/typography';
	export let heading: string;
	export let lead: string | null = null;
</script>

<Box pattern="b" padding="lg" class="flex-row justify-between">
	<div>
		<T.H1>{heading}</T.H1>
		{#if lead}
			<T.Lead>{lead}</T.Lead>
		{/if}
	</div>

	<div class="flex space-x-2">
		<slot name="actions" />
	</div>
</Box>
