import { CLERK_SECRET_KEY } from "$env/static/private";
import { handleClerk } from "clerk-sveltekit/server";
import { createContext } from "$lib/services/trpc/context";
import { createTRPCHandle } from "trpc-sveltekit";
import { router } from "$lib/services/trpc/router";
import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = sequence(
	handleClerk(CLERK_SECRET_KEY, {
		debug: true,
		protectedPaths: ["/dash"],
		signInUrl: "/sign-in",
	}),
	createTRPCHandle({
		router,
		createContext,
		onError(opts) {
			console.error(opts.error);
		},
	}),
);
