<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';

	export let rooms: RoomModel[];
</script>

<h1>Room List</h1>

<pre>{JSON.stringify(rooms, null, 2)}</pre>
