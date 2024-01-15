import { Ok, type IResult, type IUseCase, Fail, type IAdapter, Combine } from 'rich-domain';
import { z } from 'zod';
import { Room, type RoomRepoTrait } from '../../../domain/rooms';

export interface ListRoomsForOwnerIdUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	presenter: IAdapter<Room, T>;
}

export const ListRoomsForOwnerIdUseCaseSchema = z.object({
	ownerId: z.string().min(4)
});

export type ListRoomsForOwnerIdUseCaseDTO = z.infer<typeof ListRoomsForOwnerIdUseCaseSchema>;

export class ListRoomsForOwnerIdUseCase<T>
	implements IUseCase<ListRoomsForOwnerIdUseCaseDTO, IResult<T[]>>
{
	constructor(protected readonly deps: ListRoomsForOwnerIdUseCaseDeps<T>) {}

	async execute(dto: ListRoomsForOwnerIdUseCaseDTO): Promise<IResult<T[]>> {
		try {
			const roomsResult = await this.deps.roomRepo.fetchListForOwnerId(dto.ownerId);
			if (roomsResult.isFail()) return Fail(roomsResult.error());
			const rooms = roomsResult.value();

			if (rooms.length === 0) return Ok([]);
			const roomsPresentResults = rooms.map((room) => this.deps.presenter.build(room));

			if (Combine(roomsPresentResults).isFail()) return Fail('Failed to fetch rooms for owner id');
			const roomsPresent = roomsPresentResults.map((result) => result.value());

			return Ok(roomsPresent);
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return Fail('Failed list rooms for owner id');
		}
	}
}
