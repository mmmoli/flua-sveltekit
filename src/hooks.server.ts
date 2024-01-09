import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { authHandle } from '$lib/server/services/auth';

export const handle: Handle = sequence(authHandle);
