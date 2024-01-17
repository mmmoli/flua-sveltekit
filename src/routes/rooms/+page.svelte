<script lang="ts">
	import { Page } from '~pages/rooms-page';
	import type { PageData } from '../rooms/$types';
	export let data: PageData;
	let key = 0;
	$: if (data) key++;
</script>

{#key key}
	<Page {data} />
{/key}
