import { RoomNameSchema } from '$lib/core/domain/rooms'
import { z } from 'zod'

export const CreateRoomUseCaseSchema = z.object({
    name: RoomNameSchema
})

export type CreateRoomUseCaseDTO = z.infer<typeof CreateRoomUseCaseSchema>