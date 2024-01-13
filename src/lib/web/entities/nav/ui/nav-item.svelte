<script lang="ts">
	import { Button, type ButtonProps } from '~ui/button';
	export let isActive: boolean;

	const variant: ButtonProps['variant'] = isActive ? 'default' : 'secondary';
	export let href: string;
	export let label: string;
</script>

<Button {href} {variant}>
	{label}
</Button>
