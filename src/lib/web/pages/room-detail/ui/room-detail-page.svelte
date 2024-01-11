<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { ArrowLeft } from 'lucide-svelte';
	import { Call } from '~entities/call';
	import { routes } from '~shared/config/routes';
	import { T } from '~ui/typography';
	export let room: RoomModel;
</script>

<a href={routes.dashPage()} class="flex items-center">
	<ArrowLeft class="inline" />Rooms
</a>

<T.H1>{room.name}</T.H1>
<T.Lead>{room.description}</T.Lead>

<Call />
