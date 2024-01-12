<script lang="ts">
	import { Masthead } from '$lib/web/widgets/masthead';
	import { Toaster } from '~ui/sonner';
	import '@fontsource-variable/overpass-mono';
</script>

<Toaster />
<Masthead />
<div class="m-4">
	<slot />
</div>
