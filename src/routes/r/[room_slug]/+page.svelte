<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { RoomDetailPage } from '~pages/room-detail';
	import type { PageData } from './$types';
	export let data: PageData;
	const room: RoomModel = data?.room;
</script>

<svelte:head>
	<title>{room?.name}</title>
</svelte:head>

{#if room}
	<RoomDetailPage {room} />
{/if}
