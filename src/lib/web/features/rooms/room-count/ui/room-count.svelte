<script lang="ts">
	import type { RouterOutputs } from '$lib/services/trpc/router';
	export let rooms: RouterOutputs['rooms']['listForOwnerId'];
</script>

<p>{rooms.length}</p>
