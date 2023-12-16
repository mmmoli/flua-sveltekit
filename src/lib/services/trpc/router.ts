import { rooms } from './routers/rooms-router';
import { t } from './t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const router = t.router({
	rooms
});

export type Router = typeof router;

export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
