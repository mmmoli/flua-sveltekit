<script lang="ts">
	// import '../../../../../app.pcss';
	import { QueryClientProvider } from '$lib/web/app/providers';
</script>

<QueryClientProvider>
	<slot />
</QueryClientProvider>
