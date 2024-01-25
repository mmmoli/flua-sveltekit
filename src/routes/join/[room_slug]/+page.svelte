<script lang="ts">
	import type { PageData } from '../../join/[room_slug]/$types';
	import { I } from '~ui/icons';
	import { T } from '~ui/typography';
	import { Call } from '~entities/call';
	import { routes } from '~shared/config/routes';
	import { Button } from '~ui/button';
	import { QueueWidget } from '~widgets/calls/queue-widget';
	export let data: PageData;
	const room = data?.room;
	const roomId = room?.id;

	const roomsPageUrl = routes.roomsPage();
</script>

<svelte:head>
	<title>{room?.name} / Uninterrupted / Flua</title>
</svelte:head>

<Call {roomId}>
	<header slot="call-titles">
		<Button href={roomsPageUrl} class="px-0" variant="link">
			<I.ArrowLeft class="mr-1" />My Rooms
		</Button>

		<T.H1>{room?.name}</T.H1>
		<T.Lead>{room?.description}</T.Lead>
	</header>

	<svelte:fragment slot="call-queue"><QueueWidget /></svelte:fragment>
</Call>
