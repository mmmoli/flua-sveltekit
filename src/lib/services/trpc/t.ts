import type { Context } from '$lib/services/trpc/context';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();
