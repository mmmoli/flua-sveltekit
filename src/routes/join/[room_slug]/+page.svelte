<script lang="ts">
	import { Page } from '~pages/call-page';
	import type { PageData } from '../../join/[room_slug]/$types';
	export let data: PageData;
	let key = 0;
	$: if (data) key++;
</script>

{#key key}
	<Page {data} />
{/key}
