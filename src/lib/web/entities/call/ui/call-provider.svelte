<script lang="ts">
	import { RealtimeProvider } from '~shared/services/realtime';
	import Call from './call.svelte';
	export let roomId: string;
</script>

<RealtimeProvider id={roomId}>
	<Call>
		<svelte:fragment slot="call-queue"><slot name="call-queue" /></svelte:fragment>
		<svelte:fragment slot="call-video"><slot name="call-video" /></svelte:fragment>
		<svelte:fragment slot="call-titles"><slot name="call-titles" /></svelte:fragment>
	</Call>
</RealtimeProvider>
