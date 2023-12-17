import { trpc } from "$lib/services/trpc/client";
import type { Page } from "@sveltejs/kit";
import { useQueryClient } from '@tanstack/svelte-query'

export const createMutation = (page: Page) => {
    const client = useQueryClient()
    return trpc(page).rooms.request.createMutation({
        onSuccess: () => {
            client.invalidateQueries({
                stale: true,
            })
        }
    })
}