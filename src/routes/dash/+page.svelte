<script lang="ts">
	import { DashPage } from '$lib/web/pages/dash';
	import type { PageData } from './$types';
	export let data: PageData;
	const rooms = data.roomsForUser();
</script>

{#if $rooms.data}
	<DashPage rooms={$rooms.data} />
{/if}
