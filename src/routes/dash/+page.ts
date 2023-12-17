import { trpc } from '$lib/services/trpc/client';
import type { PageLoad } from './$types';
import { query } from '$lib/web/pages/dash/api/query';

export const load: PageLoad = async (event) => {
    const { queryClient } = await event.parent();
    const client = trpc(event, queryClient);
    return query(client)
};
