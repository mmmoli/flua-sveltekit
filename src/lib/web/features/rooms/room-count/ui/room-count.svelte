<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '../api/query';
	const rooms = createQuery($page);
</script>

{#if $rooms.data}
	<p>{$rooms.data.length}</p>
{/if}
