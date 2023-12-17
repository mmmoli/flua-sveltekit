<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	export let queryClient: QueryClient;
</script>

<QueryClientProvider client={queryClient}>
	<slot />
	<SvelteQueryDevtools />
</QueryClientProvider>
