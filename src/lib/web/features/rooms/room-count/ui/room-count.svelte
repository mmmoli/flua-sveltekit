<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '../api/query';
	const query = createQuery($page);
</script>

{#if $query.isLoading}<p>…</p>
{:else if $query.data}
	<p>{$query.data?.length}</p>
{/if}
