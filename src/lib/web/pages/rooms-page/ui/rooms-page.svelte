<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { RequestRoomButton } from '~features/rooms/request-room';
	import { RoomListForUser } from '~features/rooms/room-list-for-user';
	import { T } from '~ui/typography';
	import type { PageData } from '../../../../../routes/rooms/$types';

	export let data: PageData;
	const currentUrl = data?.pathname;

	interface ServerActions {
		requestRoom: string;
	}
	export let actions: ServerActions;
</script>

<svelte:head>
	<title>Rooms</title>
</svelte:head>

<NavLayout {currentUrl}>
	<div class="flex flex-col space-y-8">
		<T.H1>Rooms</T.H1>
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
</NavLayout>
