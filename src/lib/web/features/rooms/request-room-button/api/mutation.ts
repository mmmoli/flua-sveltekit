import { trpc } from "$lib/services/trpc/client";
import type { Page } from "@sveltejs/kit";

export const createMutation = (page: Page) => trpc(page).rooms.request.createMutation({
    mutationKey: ['requestRoomButtonHandler']
});