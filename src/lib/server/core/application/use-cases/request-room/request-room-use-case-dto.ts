import { RoomNameSchema } from '$lib/server/core/domain/rooms';
import { z } from 'zod';

export const RequestRoomUseCaseSchema = z.object({
	name: RoomNameSchema.optional(),
	ownerId: z.string().min(4)
});

export type RequestRoomUseCaseDTO = z.infer<typeof RequestRoomUseCaseSchema>;
