import { Fail, Ok, type IResult, type IUseCase, type IAdapter } from 'rich-domain';
import type { FetchRoomForSlugUseCaseDTO } from './fetch-room-for-slug-use-case-dto';
import { Room, type RoomRepoTrait } from '$lib/server/core/domain/rooms';

export interface FetchRoomForSlugUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	presenter: IAdapter<Room, T>;
}

export class FetchRoomForSlugUseCase<T>
	implements IUseCase<FetchRoomForSlugUseCaseDTO, IResult<T>>
{
	constructor(protected readonly deps: FetchRoomForSlugUseCaseDeps<T>) {}

	async execute(dto: FetchRoomForSlugUseCaseDTO): Promise<IResult<T>> {
		try {
			const roomResult = await this.deps.roomRepo.fetchBySlug(dto.slug.value);
			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();

			const presentResult: IResult<T, string> = this.deps.presenter.build(room);
			if (presentResult.isFail()) return Fail(presentResult.error());
			const presenter = presentResult.value() as T extends void ? null : T;
			return Ok(presenter);
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return Fail('Failed list rooms for owner id');
		}
	}
}
