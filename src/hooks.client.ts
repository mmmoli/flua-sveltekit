import type { HandleClientError } from '@sveltejs/kit';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
import { initializeClerkClient } from 'clerk-sveltekit/client';

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
	afterSignInUrl: '/',
	afterSignUpUrl: '/',
	signInUrl: '/sign-in',
	signUpUrl: '/sign-up'
});

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event);
};
