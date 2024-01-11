<script lang="ts">
	import { Masthead } from '$lib/web/widgets/masthead';
	import { Toaster } from '~ui/sonner';
</script>

<Toaster />
<Masthead />
<div class="m-4">
	<slot />
</div>
