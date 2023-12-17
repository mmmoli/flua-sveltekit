<script lang="ts">
	import type { RouterOutputs } from '$lib/services/trpc/router';
	import { RequestRoomButton } from '$lib/web/features/rooms/request-room-button';

	import { RoomListForUser } from '$lib/web/features/rooms/room-list-for-user';
	export let rooms: RouterOutputs['rooms']['listForOwnerId'];
</script>

<h1>Dash</h1>

<RequestRoomButton />
<RoomListForUser {rooms} />
