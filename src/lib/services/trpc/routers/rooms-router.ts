import { RequestRoomUseCaseSchema } from "$lib/core/application/use-cases";
import { listRoomsForOwnerIdUseCase } from "$lib/core/infra/use-cases/list-rooms-for-owner-id";
import { requestRoomUseCase } from "$lib/core/infra/use-cases/request-room";
import { auth } from "../middleware/auth";
import { t } from "../t";
import { throwTRPCError } from "../utils";

export const rooms = t.router({
	listForOwnerId: t.procedure.use(auth).query(async ({ ctx: { auth: { userId } } }) => {
		const result = await listRoomsForOwnerIdUseCase.execute({
			ownerId: userId,
		});

		result
			.execute(throwTRPCError)
			.withData({ message: result.error() })
			.on("fail");

		return result.value();
	}),
	request: t.procedure
		.use(auth)
		.input(RequestRoomUseCaseSchema.omit({
			ownerId: true,
		}))
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
