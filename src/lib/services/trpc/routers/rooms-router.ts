import { RequestRoomUseCaseSchema } from "$lib/core/application/use-cases";
import { requestRoomUseCase } from "$lib/core/infra/use-cases/request-room";
import { auth } from "../middleware/auth";
import { t } from "../t";
import { throwTRPCError } from "../utils";

export const rooms = t.router({
	request: t.procedure
		.use(auth)
		.input(RequestRoomUseCaseSchema)
		.mutation(async ({ ctx: { auth: { userId } }, input }) => {
			const result = await requestRoomUseCase.execute({
				...input,
				ownerId: userId,
			});

			result
				.execute(throwTRPCError)
				.withData({ message: result.error() })
				.on("fail");

			return result.value();
		}),
});
