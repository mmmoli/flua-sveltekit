<script lang="ts">
	import * as Button from "$lib/web/shared/design-system/ui/button";
	type $$Props = Button.Props;
	type $$Events = Button.Events;
</script>

<Button.Root type="submit" {...$$restProps} on:click on:keydown>
	<slot />
</Button.Root>
