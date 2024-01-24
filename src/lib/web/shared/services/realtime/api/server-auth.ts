import { error, type RequestEvent } from '@sveltejs/kit';
import { Liveblocks } from '@liveblocks/node';
import { LIVEBLOCKS_API_SECRET_KEY } from '$env/static/private';
import { db } from '$lib/server/services/drizzle';

export async function POST({ request, locals }: RequestEvent) {
	const session = await locals.getSession();
	const userId = session?.user?.id;
	if (!userId) error(401, 'Unauthorized');

	// Get the current user from your database
	const user = await db.query.users.findFirst({
		where: (users, { eq }) => eq(users.id, userId)
	});
	if (!user) error(400, 'User not found');

	const liveblocks = new Liveblocks({
		secret: LIVEBLOCKS_API_SECRET_KEY
	});

	// Start an auth session inside your endpoint
	const liveblocksSession = liveblocks.prepareSession(user.id, {
		userInfo: {
			name: String(user.name),
			avatar: String(user.image)
		}
	});

	// Implement your own security, and give the user access to the room
	const { room } = await request.json();
	const shouldHaveFullAccess = true;
	if (room && shouldHaveFullAccess) {
		liveblocksSession.allow(room, liveblocksSession.READ_ACCESS);
	}

	// Authorize the user and return the result
	const { status, body } = await liveblocksSession.authorize();
	return new Response(body, { status });
}
