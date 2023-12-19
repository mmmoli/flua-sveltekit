<script lang="ts">
	export let room: {
		slug: string;
		name: string;
	};
</script>

<a href={`/${room.slug}/manage`}>
	<p>{room.name}</p>
</a>
