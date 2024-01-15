import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { AUTH_GITHUB_CLIENT_ID, AUTH_GITHUB_CLIENT_SECRET } from '$env/static/private';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '../drizzle';
import { User } from '$lib/server/core/domain/users';
import { UserRegisteredEvent } from '$lib/server/core/domain/users/user-registered.domain-event';
import { UserRegisteredPolicy } from '$lib/server/core/application/policies/after-user-registered-policy';
import { DomainEvents } from 'rich-domain';

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
		createUser: async ({ user: data }) => {
			const userResult = User.builder()
				.withAvatarUrl(data.image!)
				.withEmail(data.email!)
				.withId(data.id!)
				.withName(data.name ?? data.email!)
				.build();
			if (userResult.isFail()) throw new Error(userResult.error());
			const user = userResult.value();
			user.addEvent(new UserRegisteredEvent(), 'REPLACE_DUPLICATED');
			user.dispatchEvent(UserRegisteredEvent.name, new UserRegisteredPolicy());
		}
	},
	adapter: DrizzleAdapter(db),
	providers: [GitHub({ clientId: AUTH_GITHUB_CLIENT_ID, clientSecret: AUTH_GITHUB_CLIENT_SECRET })]
});
