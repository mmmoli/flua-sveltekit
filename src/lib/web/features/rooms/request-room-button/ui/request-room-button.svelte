<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '~ui/button';
	export let action: string;
</script>

<form method="POST" {action} use:enhance>
	<Button variant="default" type="submit">Request Room</Button>
</form>
