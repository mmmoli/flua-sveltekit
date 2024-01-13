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
	<title>{room?.name}</title>
</svelte:head>

<a href={routes.dashPage()} class="flex items-center">
	<I.ArrowLeft class="inline" />Rooms
</a>

<T.H1>{room?.name}</T.H1>
<T.Lead>{room?.description}</T.Lead>

<Call />
