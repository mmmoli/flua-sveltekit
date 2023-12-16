import { z } from 'zod'

export const LockRoomUseCaseSchema = z.object({
    roomId: z.string(),
    userId: z.string()
})

export type LockRoomUseCaseDTO = z.infer<typeof LockRoomUseCaseSchema>