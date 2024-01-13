<script lang="ts">
	import { Box } from '~ui/box';
	import { Nav } from '~entities/nav';
</script>

<div class="flex flex-wrap">
	<Box thickness="none" class="w-full md:w-1/6">
		<Nav />
	</Box>
	<Box class="w-full md:w-5/6" pattern="l">
		<slot />
	</Box>
</div>
