<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { Call } from '~entities/call';
	import { T } from '~ui/typography';
	export let room: RoomModel;
</script>

<T.H1>{room.name}</T.H1>
<T.Lead>{room.description}</T.Lead>

<Call />
