<script lang="ts">
	import type { PageData } from '../../join/[room_slug]/$types';
	import { I } from '~ui/icons';
	import { T } from '~ui/typography';
	import { Call } from '~entities/call';
	import { routes } from '~shared/config/routes';
	export let data: PageData;
	const room = data?.room;
	const roomId = room?.id;

	const roomsPageUrl = routes.roomsPage();
</script>

<svelte:head>
	<title>{room?.name} / Uninterrupted / Flua</title>
</svelte:head>

<Call {roomId}>
	<header>
		<a href={roomsPageUrl} class="flex items-center">
			<I.ArrowLeft class="inline" />Rooms
		</a>

		<T.H1>{room?.name}</T.H1>
		<T.Lead>{room?.description}</T.Lead>
	</header>
</Call>
