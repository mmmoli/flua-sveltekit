import { Fail, Ok, type IResult, type IUseCase, type IAdapter } from 'rich-domain';
import type { FetchRoomForSlugUseCaseDTO } from './fetch-room-for-slug-use-case-dto';
import { Room, type RoomRepoTrait } from '$lib/server/core/domain/rooms';

export interface FetchRoomForSlugUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	presenter: IAdapter<Room, T>;
}

export class FetchRoomForSlugUseCase<T extends Record<string, unknown>>
	implements IUseCase<FetchRoomForSlugUseCaseDTO, IResult<Room | T>>
{
	constructor(protected readonly deps: FetchRoomForSlugUseCaseDeps<Room | T>) {}

	async execute(dto: FetchRoomForSlugUseCaseDTO): Promise<IResult<Room | T>> {
		try {
			const roomResult = await this.deps.roomRepo.fetchBySlug(dto.slug.value);
			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();
			if (!this.deps.presenter) return Ok(room);
			const presentResult: IResult<T, string> = this.deps.presenter.build(room);
			if (presentResult.isFail()) return Fail(presentResult.error());
			const presenter = presentResult.value();
			return Ok(presenter);
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return Fail('Failed list rooms for owner id');
		}
	}
}
