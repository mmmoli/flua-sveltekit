import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { AUTH_GITHUB_CLIENT_ID, AUTH_GITHUB_CLIENT_SECRET } from '$env/static/private';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '../drizzle';

export const authHandle = SvelteKitAuth({
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id
			}
		})
	},
	events: {
		createUser: async ({ user }) => {
			console.log('createUser', user);
			// await registerUserCommand({
			// 	id: user.id,
			// 	email: String(user.email),
			// 	name: String(user.name),
			// 	avatarUrl: String(user.image)
			// });
		}
	},
	adapter: DrizzleAdapter(db),
	providers: [GitHub({ clientId: AUTH_GITHUB_CLIENT_ID, clientSecret: AUTH_GITHUB_CLIENT_SECRET })]
});
