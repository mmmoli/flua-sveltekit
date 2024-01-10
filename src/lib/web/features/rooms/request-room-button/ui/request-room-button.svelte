<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '~ui/button';
	export let action: string;
</script>

<form method="POST" {action} class="m-3 inline-block border-2 p-3" use:enhance>
	<Button variant="secondary" type="submit">Request Room</Button>
</form>
