import { Ok, type IResult, type IUseCase, type EventHandler, Fail } from 'rich-domain';
import { z } from 'zod';
import { Room, RoomRequestedEvent } from '../../../domain/rooms';

export interface RequestRoomUseCaseDeps {
	afterRoomRequestedPolicy?: EventHandler<Room, void>;
}

export const RequestRoomUseCaseDTOSchema = z.object({
	name: z.string().optional(),
	ownerId: z.string()
});

export type RequestRoomUseCaseDTO = z.infer<typeof RequestRoomUseCaseDTOSchema>;

export class RequestRoomUseCase implements IUseCase<RequestRoomUseCaseDTO, IResult<string>> {
	constructor(protected readonly deps?: RequestRoomUseCaseDeps) {}

	async execute(dto: RequestRoomUseCaseDTO): Promise<IResult<string>> {
		const parseResult = RequestRoomUseCaseDTOSchema.safeParse(dto);
		if (!parseResult.success) return Fail('Invalid input');
		const data = parseResult.data;

		const builder = Room.builder({ ownerId: data.ownerId });
		if (data.name) builder.withName(data.name);

		const roomResult = builder.build();
		if (roomResult.isFail()) return Fail(roomResult.error());
		const room = roomResult.value();
		room.dispatchEvent(RoomRequestedEvent.name, this.deps?.afterRoomRequestedPolicy);
		return Ok(room.slug);
	}
}
