<script lang="ts">
	import { Button, type ButtonProps } from '~ui/button';
	import { I } from '~ui/icons';
	export let isActive: boolean;

	const variant: ButtonProps['variant'] = isActive ? 'default' : 'secondary';
	export let href: string;
	export let label: string;
</script>

<Button {href} {variant}>
	{#if isActive}
		<I.Squirrel class="mr-1 w-4" />
	{/if}
	{label}
</Button>
