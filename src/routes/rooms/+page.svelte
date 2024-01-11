<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { RoomListPage } from '$lib/web/pages/room-list';
	import type { PageData } from './$types';
	export let data: PageData;
	const rooms: RoomModel[] = data?.rooms ?? [];
</script>

<svelte:head>
	<title>Room List</title>
</svelte:head>

<RoomListPage {rooms} />
