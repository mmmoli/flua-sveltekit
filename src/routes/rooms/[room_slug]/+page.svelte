<script lang="ts">
	import type { PageData } from '../../rooms/[room_slug]/$types';
	import { NavLayout } from '~pages/nav-layout';
	import { Box } from '~ui/box';
	import { Button } from '~ui/button';
	import { Banner } from '~entities/banner';
	import { RoomForm } from '~widgets/rooms/room-form';
	import { routes } from '~shared/config/routes';

	export let data: PageData;
	const room = data?.room;
	const form = data?.roomForm;
	const currentUrl = data?.pathname;

	const callPageUrl = routes.callPage({
		roomSlug: String(room?.slug)
	});

	let key = 0;
	$: if (data) key++;
</script>

<NavLayout {currentUrl}>
	{#key key}
		<Banner heading={`Change ${room.name}`} lead={room.description}>
			<slot slot="actions">
				<Button size="lg" variant="secondary" href={callPageUrl}>Enter Room</Button>
			</slot>
		</Banner>
		<Box thickness="none">
			<RoomForm {form} />
		</Box>
	{/key}
</NavLayout>
