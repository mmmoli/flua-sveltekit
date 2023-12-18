<script lang="ts">
	import { Masthead } from '$lib/web/widgets/masthead';
	import { QueryClientProvider } from '$lib/web/app/providers/query-client';
</script>

<QueryClientProvider>
	<Masthead />
	<slot />
</QueryClientProvider>
