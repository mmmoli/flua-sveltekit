import { TRPCError } from "@trpc/server";
import type { ICommand } from "rich-domain";

class ThrowTRPCErrorCommand implements ICommand<{ message: string }, void> {
	execute(data: { message: string }): void {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: data.message,
		});
	}
}

export const throwTRPCError = new ThrowTRPCErrorCommand();
