<script lang="ts">
	import { Masthead } from '$lib/web/widgets/masthead';
	import { QueryClientProvider } from '$lib/web/app/providers/query-client';
	import type { QueryClient } from '@tanstack/svelte-query';
	export let queryClient: QueryClient;
</script>

<QueryClientProvider {queryClient}>
	<Masthead />
	<slot />
</QueryClientProvider>
