<script lang="ts">
	import Text from './text.svelte';
</script>

<Text {...$$restProps} tag="h2">
	<slot />
</Text>
