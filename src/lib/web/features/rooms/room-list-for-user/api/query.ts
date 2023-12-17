import { trpc } from "$lib/services/trpc/client";
import type { Page } from "@sveltejs/kit";

export const createQuery = (page: Page) => trpc(page).rooms.listForOwnerId.createQuery();