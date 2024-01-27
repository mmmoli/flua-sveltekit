<script lang="ts">
	import Video from './video.svelte';
	import type { Peer } from '~shared/services/conference-calls';
	export let peer: Peer;
</script>

<div>
	<Video isLocal={peer.isLocal} peerId={peer.id} />
	<div>
		{peer.name}
	</div>
</div>
