import type { LoadEvent } from '@sveltejs/kit';
import type { RouterOutputs } from '$lib/services/trpc/router';
import { useQueryClient } from '@tanstack/svelte-query';
import { trpc } from '$lib/services/trpc/client';
import { browser } from '$app/environment';

export type Response = RouterOutputs['rooms']['listForOwnerId'];

export const prefetch = async (event: LoadEvent) => {
    // const queryClient = useQueryClient();
    // console.log('queryClient', queryClient);

    // const api = trpc(event);
    // await queryClient.prefetchQuery({
    //     queryKey: api.rooms.listForOwnerId.getQueryKey(),
    //     queryFn: async () => await api.rooms.listForOwnerId.createServerQuery(undefined, {
    //         trpc: {
    //             abortOnUnmount: true,
    //         },
    //         ssr: true,
    //     })
    // });
    console.log(`prefetch. Browser: ${browser}`)
};
