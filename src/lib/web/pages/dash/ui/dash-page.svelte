<script lang="ts">
	import { RequestRoomButton } from '~features/rooms/request-room-button';
	import { RoomListForUser } from '~features/rooms/room-list-for-user';
	import { RoomCount } from '~features/rooms/room-count';
	import { T } from '~ui/typography';
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';

	interface ServerActions {
		requestRoom: string;
	}

	export let rooms: RoomModel[];

	export let actions: ServerActions;
</script>

<div class="flex flex-col space-y-8">
	<div>
		<T.H1>Dash</T.H1>
	</div>
	<RoomCount />
	<RequestRoomButton action={actions.requestRoom} />
	<RoomListForUser {rooms} />
</div>
