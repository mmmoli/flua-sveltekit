<script lang="ts">
	import { RequestRoomButton } from '$lib/web/features/rooms/request-room-button';
	import { RoomListForUser } from '$lib/web/widgets/room-list-for-user';
	import { RoomCount } from '$lib/web/features/rooms/room-count';
	import { T } from '~ui/typography';

	interface ServerActions {
		requestRoom: string;
	}

	export let actions: ServerActions;
</script>

<T.H1>Dash</T.H1>
<T.H2>Something else</T.H2>
<T.Lead>Something else</T.Lead>
<T.P>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab reprehenderit culpa necessitatibus
	quas, molestiae perferendis fugit labore molestias voluptas enim ipsum. Natus, laborum! Veniam
	labore repellat impedit voluptatum exercitationem.
</T.P>
<T.Small>Something else</T.Small>

<RoomCount />
<RequestRoomButton action={actions.requestRoom} />
<RoomListForUser />
