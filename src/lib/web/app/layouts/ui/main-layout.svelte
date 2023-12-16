<script lang="ts">
	// import '../../../../../app.pcss';
	import { QueryClientProvider } from '$lib/web/app/providers';
	import { Masthead } from '$lib/web/widgets/masthead';
</script>

<QueryClientProvider>
	<Masthead />
	<slot />
</QueryClientProvider>
