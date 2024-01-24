<script lang="ts">
	import { Banner } from '~entities/banner';
	import { NavLayout } from '~pages/nav-layout';
	import type { PageData } from '../dash/$types';
	export let data: PageData;
	const currentUrl = data?.pathname;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<NavLayout {currentUrl}>
	<Banner heading="Dash" lead="Do stuff here" />
</NavLayout>
