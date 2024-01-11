<script lang="ts">
	import { cn } from '$lib/web/shared/design-system/utils';
	import { typographyVariants, type Props } from './props';
	let className: string | undefined = undefined;
	export let tag: Props['type'] = 'h1';
	export { className as class };
</script>

{#if tag === 'h1'}
	<h1 {...$$restProps} class={cn(typographyVariants({ type: tag, className }))}>
		<slot />
	</h1>
{:else if tag === 'h2'}
	<h2 {...$$restProps} class={cn(typographyVariants({ type: tag, className }))}>
		<slot />
	</h2>
{:else if tag === 'p'}
	<p {...$$restProps} class={cn(typographyVariants({ type: tag, className }))}>
		<slot />
	</p>
{:else if tag === 'lead'}
	<p {...$$restProps} class={cn(typographyVariants({ type: tag, className }))}>
		<slot />
	</p>
{:else if tag === 'small'}
	<small {...$$restProps} class={cn(typographyVariants({ type: tag, className }))}>
		<slot />
	</small>
{/if}
