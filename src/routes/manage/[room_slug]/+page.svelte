<script lang="ts">
	import { RoomManagePage } from '~pages/manage-room-page';
	import type { PageData } from '../../manage/[room_slug]/$types';
	export let data: PageData;
</script>

<RoomManagePage {data} />
