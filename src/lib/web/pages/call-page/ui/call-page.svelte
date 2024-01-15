<script lang="ts">
	import type { PageData } from '../../../../../routes/join/[room_slug]/$types';
	import { I } from '~ui/icons';
	import { Call } from '~entities/call';
	import { routes } from '~shared/config/routes';
	import { T } from '~ui/typography';
	export let data: PageData;
	const room = data?.room;
</script>

<svelte:head>
	<title>{room?.name} / Uninterrupted / Flua</title>
</svelte:head>

<Call>
	<header slot="titles">
		<a href={routes.roomsPage()} class="flex items-center">
			<I.ArrowLeft class="inline" />Rooms
		</a>

		<T.H1>{room?.name}</T.H1>
		<T.Lead>{room?.description}</T.Lead>
	</header>
</Call>
