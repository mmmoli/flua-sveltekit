import { z } from 'zod'

export const CloseRoomUseCaseSchema = z.object({
    roomId: z.string(),
    userId: z.string()
})

export type CloseRoomUseCaseDTO = z.infer<typeof CloseRoomUseCaseSchema>