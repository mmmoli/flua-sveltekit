<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/web/shared/design-system/ui';
	import { createMutation } from '../api/mutation';
	const mutation = createMutation($page);

	const handleClick = () => {
		$mutation.mutate();
	};
</script>

<Button variant="secondary" disabled={$mutation.isPending} on:click={handleClick}
	>Request Room</Button
>
