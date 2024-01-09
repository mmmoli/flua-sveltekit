<script lang="ts">
	export let room: {
		slug: string;
		name: string;
	};
</script>

<a href={`/rooms/${room.slug}/manage`}>
	<p>{room.name}</p>
</a>
