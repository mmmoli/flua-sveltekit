<script lang="ts">
	import type { PageData } from '../../join/[room_slug]/$types';
	import { QueuedConferenceCall } from '~widgets/calls/queued-conference-call';
	import { routes } from '~shared/config/routes';
	import { Button } from '~ui/button';
	import { I } from '~ui/icons';
	import { CallHeading } from '~features/conference-calls/call-heading';
	import { Gate } from '~widgets/gate';
	import { writable } from 'svelte/store';
	import JoinCall from '~widgets/calls/join-call/ui/join-call.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const room = data?.room;

	const redirectUrl = routes.dashPage();

	let granted = false;

	function handleAccept() {
		granted = true;
	}

	function handleReject() {
		goto(redirectUrl);
	}
</script>

<svelte:head>
	<title>{room?.name} / Uninterrupted / Flua</title>
</svelte:head>

<!--
<CallHeading let:C>
	<div slot="navigation">
		<Button href={roomsPageUrl} class="px-0" variant="link">
			<I.ArrowLeft class="mr-1" />My Rooms
		</Button>
	</div>
	<C.Title>{room?.name}</C.Title>
	<C.Description>{room?.description}</C.Description>
</CallHeading>
-->

<Gate {granted}>
	<svelte:fragment slot="granted">
		<QueuedConferenceCall {room} />
	</svelte:fragment>
	<svelte:fragment slot="pending">
		<JoinCall {room} {handleAccept} {handleReject} />
	</svelte:fragment>
</Gate>
