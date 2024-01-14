<script lang="ts">
	import { Box } from '~ui/box';
	import { T } from '~ui/typography';
	export let heading: string;
	export let lead: string | null = null;
	export let anchor: string;
</script>

<Box pattern="b">
	<div>
		<T.H2 id={anchor}>{heading}</T.H2>
		{#if lead}
			<T.Lead>{lead}</T.Lead>
		{/if}
	</div>

	<slot />
</Box>
