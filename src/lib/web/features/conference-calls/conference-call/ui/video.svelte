<script lang="ts">
	import { onMount } from 'svelte';
	import { attachOrDetachVideo } from '~shared/services/conference-calls';

	export let isLocal: Boolean;
	export let peerId: string;

	let videoElement: HTMLVideoElement;

	onMount(() =>
		attachOrDetachVideo({
			peerId,
			videoElement
		})
	);
</script>

<video class="peer-video" class:local={isLocal} bind:this={videoElement} autoPlay muted playsInline>
</video>

<style>
	.peer-video {
		height: 250px;
		width: 250px;

		margin-bottom: 10px;

		border-radius: 40%;

		object-fit: cover;
	}

	.peer-video.local {
		transform: scaleX(-1);
	}
</style>
