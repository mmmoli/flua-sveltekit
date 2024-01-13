<script lang="ts">
	import { DashPage } from '~pages/dash-page';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<DashPage
	{data}
	actions={{
		requestRoom: '?/requestRoom'
	}}
/>
