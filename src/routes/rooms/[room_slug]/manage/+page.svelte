<script lang="ts">
	import { RoomManagePage } from '$lib/web/pages/room-manage';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<RoomManagePage />

<pre>
	{JSON.stringify(data, null, 2)}
</pre>
