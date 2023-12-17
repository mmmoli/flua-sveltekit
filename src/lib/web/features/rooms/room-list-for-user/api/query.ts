import { trpc } from "$lib/services/trpc/client";
import type { Page } from "@sveltejs/kit";
import { useQueryClient } from "@tanstack/svelte-query";

export const createQuery = (page: Page) => {
    const queryClient = useQueryClient()
    const api = trpc(page, queryClient)
    return api.rooms.listForOwnerId.createQuery();
}
