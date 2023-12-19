<script lang="ts">
	import { page } from '$app/stores';
	import { createMutation } from '../api/mutation';
	const mutation = createMutation($page);

	const handleClick = () => {
		$mutation.mutate();
	};
</script>

<button disabled={$mutation.isPending} on:click|preventDefault={handleClick}>Request Room</button>
