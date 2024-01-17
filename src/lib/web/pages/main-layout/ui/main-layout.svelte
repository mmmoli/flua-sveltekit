<script lang="ts">
	import { Masthead, Footer } from '~widgets/navigation';
	import { Toaster } from '~ui/sonner';
	import { Box } from '~ui/box';
	import { Analytics } from '~entities/analytics';
	import { ViewTransitions } from '~ui/view-transitions';
	import '@fontsource-variable/overpass-mono';
</script>

<Box padding="none" class="m-1">
	<Masthead />
	<slot />
	<Footer />
</Box>

<Toaster />
<ViewTransitions />
<Analytics />
