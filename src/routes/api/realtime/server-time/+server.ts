import type { RequestHandler } from '../$types';

export const GET: RequestHandler = () => {
	const now = new Date().getTime();
	const response = now;
	return new Response(String(response));
};
