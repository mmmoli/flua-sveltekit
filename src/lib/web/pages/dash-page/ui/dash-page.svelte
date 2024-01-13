<script lang="ts">
	import { RequestRoomButton } from '~features/rooms/request-room-button';
	import { RoomListForUser } from '~features/rooms/room-list-for-user';
	import { RoomCount } from '~features/rooms/room-count';
	import { T } from '~ui/typography';
	import type { PageData } from '../../../../../routes/dash/$types';

	export let data: PageData;

	interface ServerActions {
		requestRoom: string;
	}
	export let actions: ServerActions;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="flex flex-col space-y-8">
	<T.H1>Dash</T.H1>
	<RoomCount />
	<RequestRoomButton action={actions.requestRoom} />

	{#await data.rooms}
		Loading rooms...
	{:then result}
		{#if result.data}
			<RoomListForUser rooms={result.data} />
		{:else}
			<p>error loading rooms</p>
		{/if}
	{:catch error}
		<p>error loading rooms</p>
	{/await}
</div>
