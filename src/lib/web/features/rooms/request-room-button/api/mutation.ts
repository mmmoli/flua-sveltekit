import { trpc } from '$lib/services/trpc/client';
import type { Page } from '@sveltejs/kit';
import { useQueryClient } from '@tanstack/svelte-query';

export const createMutation = (page: Page) => {
	const client = useQueryClient();
	const api = trpc(page);
	return api.rooms.request.createMutation({
		onSuccess: () => {
			client.invalidateQueries({ queryKey: [...api.rooms.listForOwnerId.getQueryKey()] });
		}
	});
};
