import { trpc } from '$lib/services/trpc/client';
import { query as roomListQuery } from '$lib/web/features/rooms/room-list-for-user/api/query'

export const query = async (api: ReturnType<typeof trpc>) => {
    return {
        ...(await roomListQuery(api))
    };
};
