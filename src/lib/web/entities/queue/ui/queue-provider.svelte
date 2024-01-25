<script lang="ts">
	import { RealtimeProvider } from '~shared/services/realtime';
	import Queue from './queue.svelte';
	export let roomId: string;
</script>

<RealtimeProvider id={roomId}>
	<Queue>
		<slot />
	</Queue>
</RealtimeProvider>
