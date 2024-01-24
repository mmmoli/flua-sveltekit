<script lang="ts">
	import { cn } from '$lib/web/shared/design-system/utils';
	import { boxVariants, type Props } from '.';

	type $$Props = Props;

	let className: string | undefined = undefined;
	export let padding: $$Props['padding'] = 'md';
	export let thickness: $$Props['thickness'] = 'thin';
	export let pattern: $$Props['pattern'] = 'trbl';
	export { className as class };
</script>

<div
	class={cn(boxVariants({ padding, thickness, className }), {
		'border-0 ': pattern === undefined,
		'border-t-0': !pattern?.includes('t'),
		'border-r-0': !pattern?.includes('r'),
		'border-b-0': !pattern?.includes('b'),
		'border-l-0': !pattern?.includes('l')
	})}
	{...$$restProps}
>
	<slot />
</div>
