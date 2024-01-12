<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { DashPage } from '$lib/web/pages/dash';
	import type { PageData } from './$types';
	export let data: PageData;
	const roomListPromise: Promise<RoomModel[]> = data?.roomsListPromise;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<DashPage
	{roomListPromise}
	actions={{
		requestRoom: '?/requestRoom'
	}}
/>
