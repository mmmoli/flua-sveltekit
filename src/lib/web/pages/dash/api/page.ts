import { prefetch as prefetchRoomList } from "$lib/web/features/rooms/room-list-for-user/api/prefetch-query";
import type { LoadEvent } from "@sveltejs/kit";

export const load = async (event: LoadEvent) => {
    console.log('Page: dash');
    await prefetchRoomList(event)
}