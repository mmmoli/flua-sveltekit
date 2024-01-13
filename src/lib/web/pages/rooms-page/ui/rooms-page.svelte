<script lang="ts">
	import { NavLayout } from '~pages/nav-layout';
	import { T } from '~ui/typography';
	import type { PageData } from '../../../../../routes/account/$types';
	export let data: PageData;
	const currentUrl = data?.pathname;
</script>

<svelte:head>
	<title>Rooms</title>
</svelte:head>

<NavLayout {currentUrl}>
	<div class="flex flex-col space-y-8">
		<T.H1>Rooms</T.H1>
	</div>
</NavLayout>
