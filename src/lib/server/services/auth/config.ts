import { SvelteKitAuth } from '@auth/sveltekit';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '../drizzle';
import { User } from '$lib/server/core/domain/users';
import { UserRegisteredEvent } from '$lib/server/core/domain/users/user-registered.domain-event';
import { AfterUserRegisteredPolicy } from '$lib/server/core/application/policies/after-user-registered-policy';
import { providers } from './providers';

export const authHandle = SvelteKitAuth({
	callbacks: {
		// @ts-ignore
		// eslint-disable-next-line
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
			user.dispatchEvent(UserRegisteredEvent.name, new AfterUserRegisteredPolicy());
		}
	},
	adapter: DrizzleAdapter(db),
	providers
});
