<script lang="ts">
	import { RoomsPage } from '~pages/rooms-page';
	import type { PageData } from '../rooms/$types';
	export let data: PageData;
</script>

<RoomsPage
	{data}
	actions={{
		requestRoom: '?/requestRoom'
	}}
/>
