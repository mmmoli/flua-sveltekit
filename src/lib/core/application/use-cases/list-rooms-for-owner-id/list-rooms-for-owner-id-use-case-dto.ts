import { z } from 'zod'

export const ListRoomsForOwnerIdUseCaseSchema = z.object({
    ownerId: z.string().min(4)
})

export type ListRoomsForOwnerIdUseCaseDTO = z.infer<typeof ListRoomsForOwnerIdUseCaseSchema>