<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { T } from '~ui/typography';
	import { buttonVariants } from '~ui/button';
	import { routes } from '$lib/web/shared/config/routes';
	export let room: RoomModel;
	const roomDetailUrl = routes.roomDetailPage({
		roomSlug: room.slug
	});
</script>

<T.H1>{room.name}</T.H1>
<T.Lead>{room.description}</T.Lead>

<a href={roomDetailUrl} class={buttonVariants({ variant: 'link' })}>View</a>
