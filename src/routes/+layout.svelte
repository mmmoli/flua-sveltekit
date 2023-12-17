<script lang="ts">
	import '../app.pcss';
	import type { LayoutData } from './$types';
	import { MainLayout } from '$lib/web/app/layouts/main-layout';
	export let data: LayoutData;
</script>

<MainLayout {...data}>
	<slot />
</MainLayout>
