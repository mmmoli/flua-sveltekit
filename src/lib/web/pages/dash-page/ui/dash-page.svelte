<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { Banner } from '~entities/banner';
	import type { PageData } from '../../../../../routes/dash/$types';
	export let data: PageData;
	const currentUrl = data?.pathname;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<NavLayout {currentUrl}>
	<Banner heading="Dash" lead="Do stuff here" />
</NavLayout>
