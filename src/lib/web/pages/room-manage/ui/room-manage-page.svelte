<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/services/trpc/client';
	const room = trpc($page).rooms.listForOwnerId.createQuery();
</script>

<h1>Manage Room</h1>
