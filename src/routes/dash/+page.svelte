<script lang="ts">
	import { DashPage } from '$lib/web/pages/dash';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<DashPage
	actions={{
		requestRoom: '?/requestRoom'
	}}
/>
