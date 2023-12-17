// +page.ts
// tRPC is setup using `trpc-sveltekit` for this example.
import { trpc } from '$lib/services/trpc/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const { queryClient } = await event.parent();
    const client = trpc(event, queryClient);

    return {
        foo: await client.rooms.listForOwnerId.createServerQuery()
    };
};
