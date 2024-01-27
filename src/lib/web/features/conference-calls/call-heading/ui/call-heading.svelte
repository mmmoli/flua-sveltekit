<script lang="ts">
	import { Box } from '~ui/box';
	import Title from './title.svelte';
	import Description from './description.svelte';
	const C = { Title, Description };
</script>

<Box class="m-3 mt-0">
	<slot name="navigation" />
	<slot {C} />
</Box>
