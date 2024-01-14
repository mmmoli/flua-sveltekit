<script lang="ts">
	import { Box } from '~ui/box';
	import { Nav } from '~entities/nav';
	export let currentUrl: string | undefined;
</script>

<div class="flex flex-wrap">
	<Box thickness="none" class="w-full md:w-1/6">
		<Nav activeUrl={currentUrl} />
	</Box>
	<Box class="w-full md:w-5/6" pattern="l" padding="none">
		<slot />
	</Box>
</div>
