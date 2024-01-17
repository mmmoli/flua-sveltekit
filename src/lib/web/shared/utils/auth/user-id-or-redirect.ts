import { redirect, type RequestEvent } from '@sveltejs/kit';

export const userIdOrRedirect = async (locals: RequestEvent['locals']) => {
	const session = await locals.getSession();
	const userId = session?.user?.id;
	if (userId) return userId;
	throw redirect(303, '/');
};
