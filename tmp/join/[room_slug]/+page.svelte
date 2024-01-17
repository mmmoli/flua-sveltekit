<script lang="ts">
	import { CallPage } from '~pages/call-page';
	import type { PageData } from '../../join/[room_slug]/$types';
	export let data: PageData;
</script>

<CallPage {data} />
