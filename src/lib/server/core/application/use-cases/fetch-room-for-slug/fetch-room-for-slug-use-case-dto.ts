import { RoomSlugSchema } from '$lib/server/core/domain/rooms';
import { z } from 'zod';

export const FetchRoomForSlugUseCaseSchema = z.object({
	slug: RoomSlugSchema,
	userId: z.string()
});

export type FetchRoomForSlugUseCaseDTO = z.infer<typeof FetchRoomForSlugUseCaseSchema>;
