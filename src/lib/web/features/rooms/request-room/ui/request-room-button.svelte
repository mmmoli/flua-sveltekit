<script lang="ts">
	import { enhance } from '$app/forms';
	import { I } from '~ui/icons';
	import { Button, type ButtonProps } from '~ui/button';
	export let action: string;
	let sending = false;

	export let variant: ButtonProps['variant'] = 'secondary';
	export let size: ButtonProps['size'] = 'default';
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
	<Button {variant} {size} type="submit" disabled={sending} {...$$restProps}>
		{#if sending}
			<I.Loader class="mr-2 h-4 w-4 animate-spin" />
		{/if}
		Request Room
	</Button>
</form>
