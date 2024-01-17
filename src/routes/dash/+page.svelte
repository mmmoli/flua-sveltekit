<script lang="ts">
	import { Page } from '~pages/dash-page';
	import type { PageData } from '../dash/$types';
	export let data: PageData;
	let key = 0;
	$: if (data) key++;
</script>

{#key key}
	<Page {data} />
{/key}
