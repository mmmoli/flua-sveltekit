<script lang="ts">
	import { Button } from '~ui/button';
	import { Box } from '~ui/box';
	import { Banner } from '~entities/banner';
	import { routes } from '~shared/config/routes';
	import type { PageData } from '../../../../../routes/rooms/[room_slug]/$types';
	import { NavLayout } from '~pages/nav-layout';

	export let data: PageData;
	const room = data?.room;
	const currentUrl = data?.pathname;

	const callPageUrl = routes.callPage({
		roomSlug: String(room?.slug)
	});

	const dashPageUrl = routes.dashPage();
</script>

<NavLayout {currentUrl}>
	<Banner heading={`Change ${room.name}`} lead={room.description}>
		<slot slot="actions">
			<Button size="lg" variant="secondary" href={callPageUrl}>Enter Room</Button>
		</slot>
	</Banner>
	<Box thickness="none">Form Here</Box>
</NavLayout>
