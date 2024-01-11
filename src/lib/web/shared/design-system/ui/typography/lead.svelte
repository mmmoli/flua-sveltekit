<script lang="ts">
	import Text from './text.svelte';
</script>

<Text {...$$restProps} tag="lead">
	<slot />
</Text>
