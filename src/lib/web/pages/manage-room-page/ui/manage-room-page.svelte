<script lang="ts">
	import { T } from '~ui/typography';
	import { buttonVariants } from '~ui/button';
	import { routes } from '$lib/web/shared/config/routes';

	import type { PageData } from '../../../../../routes/manage/[room_slug]/$types';

	export let data: PageData;
	const room = data?.room;

	const callPageUrl = routes.callPage({
		roomSlug: String(room?.slug)
	});

	const dashPageUrl = routes.dashPage();
</script>

<a href={dashPageUrl} class={buttonVariants({ variant: 'link' })}>Rooms</a>

<T.H1>{room.name}</T.H1>
<T.Lead>{room.description}</T.Lead>

<a href={callPageUrl} class={buttonVariants({ variant: 'link' })}>Join</a>
