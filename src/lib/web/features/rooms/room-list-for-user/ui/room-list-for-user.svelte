<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '../api/query';
	const rooms = createQuery($page);
</script>

{#if $rooms.data}
	<pre>{JSON.stringify($rooms.data, null, 2)}</pre>
{/if}
