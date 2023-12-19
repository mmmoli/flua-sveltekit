import { Fail, Ok, type IResult, type IUseCase, type IAdapter, Combine } from 'rich-domain';
import type { ListRoomsForOwnerIdUseCaseDTO } from './list-rooms-for-owner-id-use-case-dto';
import { Room, type RoomRepoTrait } from '$lib/core/domain/rooms';

export interface ListRoomsForOwnerIdUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	presenter: IAdapter<Room, T>;
}

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
