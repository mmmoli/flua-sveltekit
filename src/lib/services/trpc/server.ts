import type { RequestEvent } from '@sveltejs/kit';
import { createContext } from './context';
import { router } from './router';

export const getTrpcServer = async (event: RequestEvent) => {
	const context = await createContext(event);
	return router.createCaller(context);
};
