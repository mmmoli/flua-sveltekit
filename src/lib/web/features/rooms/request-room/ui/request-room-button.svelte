<script lang="ts">
	import { enhance } from '$app/forms';
	import { I } from '~ui/icons';
	import { Button } from '~ui/button';
	export let action: string;
	let sending = false;
</script>

<form
	method="POST"
	{action}
	use:enhance={() => {
		sending = true;
		// return ({ update }) => {
		// 	update().finally(async () => {
		// 		sending = false;
		// 	});
		// };
	}}
>
	<Button variant="secondary" type="submit" disabled={sending}>
		{#if sending}
			<I.Loader class="mr-2 h-4 w-4 animate-spin" />
		{/if}
		Request Room
	</Button>
</form>
