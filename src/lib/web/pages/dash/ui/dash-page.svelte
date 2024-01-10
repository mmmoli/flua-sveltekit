<script lang="ts">
	import { RequestRoomButton } from '$lib/web/features/rooms/request-room-button';
	import { RoomListForUser } from '$lib/web/widgets/room-list-for-user';
	import { RoomCount } from '$lib/web/features/rooms/room-count';

	interface ServerActions {
		requestRoom: string;
	}

	export let actions: ServerActions;
</script>

<h1>Dash</h1>

<RoomCount />
<RequestRoomButton action={actions.requestRoom} />
<RoomListForUser />
