import Google from '@auth/sveltekit/providers/google';
import GitHub from '@auth/sveltekit/providers/github';
import {
	AUTH_GITHUB_CLIENT_ID,
	AUTH_GITHUB_CLIENT_SECRET,
	AUTH_GOOGLE_CLIENT_ID,
	AUTH_GOOGLE_CLIENT_SECRET
} from '$env/static/private';
import type { Provider } from '@auth/core/providers';

export const providers: Provider[] = [
	Google({
		clientId: AUTH_GOOGLE_CLIENT_ID,
		clientSecret: AUTH_GOOGLE_CLIENT_SECRET,
		// See https://authjs.dev/reference/core/providers/google#notes
		authorization: {
			params: {
				prompt: 'consent',
				access_type: 'offline',
				response_type: 'code'
			}
		}
	}),
	GitHub({ clientId: AUTH_GITHUB_CLIENT_ID, clientSecret: AUTH_GITHUB_CLIENT_SECRET })
];
