<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { Banner } from '~entities/banner';
	import { Box } from '~ui/box';
	import { RequestRoomButton } from '~features/rooms/request-room';
	import { RoomListForUser } from '~features/rooms/room-list-for-user';

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
	<Banner heading="Rooms">
		<slot slot="actions">
			<RequestRoomButton action={actions.requestRoom} />
		</slot>
	</Banner>

	<Box thickness="none">
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
	</Box>
</NavLayout>
