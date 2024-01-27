<script lang="ts">
	import { videoPeers } from '~shared/services/conference-calls';
	import Peer from './peer.svelte';
</script>

<div>
	{#each $videoPeers as peer (peer.id)}
		<Peer {peer} />
	{/each}
</div>
