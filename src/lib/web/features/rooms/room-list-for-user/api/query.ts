import { trpc } from '$lib/services/trpc/client';

export const query = async (api: ReturnType<typeof trpc>) => {
    return {
        roomsForUser: await api.rooms.listForOwnerId.createServerQuery()
    };
};
