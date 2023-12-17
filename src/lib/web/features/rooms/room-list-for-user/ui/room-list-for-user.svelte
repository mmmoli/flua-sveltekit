<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '../api/query';
	const query = createQuery($page);
</script>

{#if $query.data}
	<pre>{JSON.stringify($query.data, null, 2)}</pre>
{/if}
