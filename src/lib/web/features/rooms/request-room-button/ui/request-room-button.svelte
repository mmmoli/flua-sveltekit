<script lang="ts">
	import { page } from '$app/stores';
	import { createMutation } from '../api/mutation';
	const mutation = createMutation($page);

	const handleClick = () => {
		$mutation.mutate({
			name: {
				value: 'My Awesome Room'
			}
		});
	};
</script>

<button on:click|preventDefault={handleClick}>Request Room</button>
