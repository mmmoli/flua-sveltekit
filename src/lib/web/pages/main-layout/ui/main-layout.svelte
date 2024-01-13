<script lang="ts">
	import { Masthead } from '$lib/web/widgets/masthead';
	import { Toaster } from '~ui/sonner';
	import { Box } from '~ui/box';
	import '@fontsource-variable/overpass-mono';
</script>

<Box padding="none" class="m-1">
	<Masthead />
	<slot />
</Box>

<Toaster />
