<script lang="ts">
	const handleClick = (_event: MouseEvent) => {
		console.log('Request Room');
	};
</script>

<button on:click|preventDefault={handleClick}>Request Room</button>
