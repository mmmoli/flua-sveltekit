<script lang="ts">
	import { cn } from '$lib/web/shared/design-system/utils';
	import { logomarkVariants, type Props } from '.';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let size: $$Props['size'] = 'sm';
	export { className as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 360 360"
	class={cn(logomarkVariants({ size, className }))}
>
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M25 0C11 0 0 11 0 25v310c0 14 11 25 25 25h310c14 0 25-11 25-25V25c0-14-11-25-25-25H25Zm55 55h200V30H80v25Zm-37 0a12 12 0 1 0 0-25 12 12 0 0 0 0 25Zm162 125a25 25 0 1 1-50 0 25 25 0 0 1 50 0Zm25 0a50 50 0 1 1-100 0 50 50 0 0 1 100 0ZM55 318a12 12 0 1 1-25 0 12 12 0 0 1 25 0Zm226 12H80v-25h201v25Zm37-275a12 12 0 1 0 0-25 12 12 0 0 0 0 25Zm12 263a12 12 0 1 1-25 0 12 12 0 0 1 25 0ZM55 280V80H30v200h25Zm275 0v-25H180v25h150ZM280 80v100h-25v-75H105v100H80V80h200Zm25 0h25v150h-25V80Z"
		clip-rule="evenodd"
	/>
</svg>
