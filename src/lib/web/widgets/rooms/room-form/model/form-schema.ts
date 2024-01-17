import { z } from 'zod';

export const roomFormSchema = z.object({
	name: z.string(),
	description: z.string().nullable(),
	id: z.string()
});

export type RoomFormValues = z.infer<typeof roomFormSchema>;
