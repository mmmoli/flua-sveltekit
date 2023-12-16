import { RoomNameSchema } from '$lib/core/domain/rooms'
import { z } from 'zod'

export const CreateRoomUseCaseSchema = z.object({
    name: RoomNameSchema,
    ownerId: z.string().min(4)
})

export type CreateRoomUseCaseDTO = z.infer<typeof CreateRoomUseCaseSchema>