<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { RoomManagePage } from '$lib/web/pages/room-manage';
	import type { PageData } from './$types';
	export let data: PageData;
	const room: RoomModel = data?.room;
</script>

<svelte:head>
	<title>{room?.name}</title>
</svelte:head>

{#if room}
	<RoomManagePage {room} />
{/if}

<pre>
	{JSON.stringify(room, null, 2)}
</pre>
