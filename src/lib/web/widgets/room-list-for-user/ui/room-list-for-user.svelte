<script lang="ts">
	import { createQuery } from '../api/query';
	import { page } from '$app/stores';
	import { RoomCard } from '$lib/web/entities/room-card';
	import ItemPending from './item-pending.svelte';
	const rooms = createQuery($page);
</script>

{#if $rooms.isLoading}
	<ItemPending />
{:else if $rooms.error}
	<p>{$rooms.error.message}</p>
{/if}

{#if $rooms.data}
	{#each $rooms.data as room}
		<RoomCard {room} />
	{/each}
{/if}
