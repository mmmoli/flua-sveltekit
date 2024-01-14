<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { T } from '~ui/typography';
	import type { PageData } from '../../../../../routes/dash/$types';

	export let data: PageData;
	const currentUrl = data?.pathname;

	interface ServerActions {}
	export let actions: ServerActions;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<NavLayout {currentUrl}>
	<div class="flex flex-col space-y-8">
		<T.H1>Dash</T.H1>
	</div>
</NavLayout>
