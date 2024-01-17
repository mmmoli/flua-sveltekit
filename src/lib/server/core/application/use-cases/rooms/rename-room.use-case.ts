import { Ok, type IResult, type IUseCase, Fail } from 'rich-domain';
import { z } from 'zod';
import { RoomName, type RoomRepoTrait } from '../../../domain/rooms';

export interface RenameRoomUseCaseDeps {
	roomRepo: RoomRepoTrait;
}

export const RenameRoomUseCaseDTOSchema = z.object({
	roomId: z.string(),
	name: z.string(),
	userId: z.string()
});

export type RenameRoomUseCaseDTO = z.infer<typeof RenameRoomUseCaseDTOSchema>;

export class RenameRoomUseCase implements IUseCase<RenameRoomUseCaseDTO, IResult<void>> {
	constructor(protected readonly deps: RenameRoomUseCaseDeps) {}

	async execute(dto: RenameRoomUseCaseDTO): Promise<IResult<void>> {
		const parseResult = RenameRoomUseCaseDTOSchema.safeParse(dto);
		if (!parseResult.success) return Fail('Invalid input');
		const data = parseResult.data;

		// TODO: Check if user is owner of room

		try {
			const roomResult = await this.deps.roomRepo.fetchById(data.roomId);
			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();

			const nameResult = RoomName.create({
				value: data.name
			});
			if (nameResult.isFail()) return Fail(nameResult.error());
			const newName = nameResult.value();
			room.set('name').to(newName);

			const saveResult = await this.deps.roomRepo.save(room);
			if (saveResult.isFail()) return Fail(saveResult.error());

			return Ok();
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return Fail('Failed to rename room');
		}
	}
}
