<script lang="ts">
	import Text from './text.svelte';
</script>

<Text {...$$restProps} tag="p"><slot /></Text>
