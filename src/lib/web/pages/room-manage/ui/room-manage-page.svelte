<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	export let room: RoomModel;
</script>

<h1 class="text-xl font-bold">{room.name}</h1>
<p>{room.description}</p>
