<script lang="ts">
	import type { RoomModel } from '$lib/server/core/infra/adapters/room-adapters';
	import { routes } from '~shared/config/routes';
	import { buttonVariants } from '~ui/button';
	import * as Table from '~ui/table';
	export let rooms: RoomModel[];
</script>

<div class="h-96 overflow-y-scroll">
	<Table.Root>
		<Table.Caption>Your rooms.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-40">Room</Table.Head>
				<Table.Head>Description</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each rooms as room}
				<Table.Row>
					<Table.Cell class="font-medium">{room.name}</Table.Cell>
					<Table.Cell>{room.description}</Table.Cell>
					<Table.Cell class="text-right">
						<a
							href={routes.roomDetailPage({
								roomSlug: room.slug
							})}
							class={buttonVariants({ variant: 'link' })}>Launch</a
						>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
