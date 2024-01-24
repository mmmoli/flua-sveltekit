<script lang="ts">
	import { RealtimeProvider } from '~shared/services/realtime';
	import Call from './call.svelte';
	export let roomId: string;
</script>

<RealtimeProvider id={roomId}>
	<Call>
		<slot />
	</Call>
</RealtimeProvider>
