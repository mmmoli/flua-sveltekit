<script lang="ts">
	import { DashPage } from '$lib/web/pages/dash';
	import type { PageData } from './$types';
	export let data: PageData;
	const foo = data.foo();
</script>

{#if $foo.isLoading}
	Loading...
{:else if $foo.isError}
	{$foo.error}
{:else if $foo.data}
	{JSON.stringify($foo.data, undefined, 2)}
{/if}
<br />

<DashPage />
