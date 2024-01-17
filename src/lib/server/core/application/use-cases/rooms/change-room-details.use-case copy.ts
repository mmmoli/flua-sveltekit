import { Ok, type IResult, type IUseCase, Fail } from 'rich-domain';
import { z } from 'zod';
import { Room, type RoomRepoTrait } from '../../../domain/rooms';

export interface ChangeRoomDetailsUseCaseDeps {
	roomRepo: RoomRepoTrait;
}

export const ChangeRoomDetailsUseCaseDTOSchema = z.object({
	roomId: z.string(),
	name: z.string(),
	description: z.string().optional(),
	userId: z.string()
});

export type ChangeRoomDetailsUseCaseDTO = z.infer<typeof ChangeRoomDetailsUseCaseDTOSchema>;

export class ChangeRoomDetailsUseCase
	implements IUseCase<ChangeRoomDetailsUseCaseDTO, IResult<void>>
{
	constructor(protected readonly deps: ChangeRoomDetailsUseCaseDeps) {}

	async execute(dto: ChangeRoomDetailsUseCaseDTO): Promise<IResult<void>> {
		const parseResult = ChangeRoomDetailsUseCaseDTOSchema.safeParse(dto);
		if (!parseResult.success) return Fail('Invalid input');
		const data = parseResult.data;

		// TODO: Check if user is owner of room

		try {
			const baseRoomResult = await this.deps.roomRepo.fetchById(data.roomId);
			if (baseRoomResult.isFail()) return Fail(baseRoomResult.error());
			const baseRoom = baseRoomResult.value();

			const builder = Room.builder({ ownerId: baseRoom.get('ownerId').value() })
				.fromRoom(baseRoom)
				.withName(data.name);

			if (data.description) builder.withDescription(data.description);

			const roomResult = builder.build();

			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();

			const saveResult = await this.deps.roomRepo.save(room);
			if (saveResult.isFail()) return Fail(saveResult.error());

			return Ok();
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return Fail('Failed to change Room details');
		}
	}
}
