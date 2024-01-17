<script lang="ts">
	import { Button } from '~ui/button';
	import { Box } from '~ui/box';
	import { Banner } from '~entities/banner';
	import { routes } from '~shared/config/routes';

	import type { PageData } from '../../../../../routes/rooms/[room_slug]/$types';
	import { NavLayout } from '~pages/nav-layout';
	import { RoomForm } from '~widgets/rooms/room-form';

	export let data: PageData;
	const room = data?.room;
	const form = data?.roomForm;
	const currentUrl = data?.pathname;

	console.log(data.room.name);

	const callPageUrl = routes.callPage({
		roomSlug: String(room?.slug)
	});
</script>

<NavLayout {currentUrl}>
	<Banner heading={`Change ${room.name}`} lead={room.description}>
		<slot slot="actions">
			<Button size="lg" variant="secondary" href={callPageUrl}>Enter Room</Button>
		</slot>
	</Banner>
	<Box thickness="none">
		<RoomForm {form} />
	</Box>
</NavLayout>
