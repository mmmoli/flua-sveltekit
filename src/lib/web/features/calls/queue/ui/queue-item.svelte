<script lang="ts">
	import { page } from '$app/stores';
	import type { FluaRealtimeUser } from '~shared/services/realtime';
	$: currentUserId = $page.data.session?.user?.id;

	function isMe(user: FluaRealtimeUser) {
		return user.id === currentUserId;
	}

	export let person: Readonly<FluaRealtimeUser>;
</script>

{#if isMe(person)}
	<strong>Me</strong>
{:else}
	{String(person.info?.name)}
{/if}
