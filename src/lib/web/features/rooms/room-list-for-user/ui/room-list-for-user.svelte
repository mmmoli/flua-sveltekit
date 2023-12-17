<script lang="ts">
	import type { RouterOutputs } from '$lib/services/trpc/router';
	export let rooms: RouterOutputs['rooms']['listForOwnerId'];
</script>

<pre>{JSON.stringify(rooms, null, 2)}</pre>
