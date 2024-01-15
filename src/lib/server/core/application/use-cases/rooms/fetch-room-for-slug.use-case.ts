import { Ok, type IResult, type IUseCase, Fail, type IAdapter } from 'rich-domain';
import { z } from 'zod';
import { Room, type RoomRepoTrait } from '../../../domain/rooms';

export interface FetchRoomForSlugUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	presenter: IAdapter<Room, T>;
}

export const FetchRoomForSlugUseCaseSchema = z.object({
	slug: z.string(),
	userId: z.string()
});

export type FetchRoomForSlugUseCaseDTO = z.infer<typeof FetchRoomForSlugUseCaseSchema>;

export class FetchRoomForSlugUseCase<T>
	implements IUseCase<FetchRoomForSlugUseCaseDTO, IResult<T>>
{
	constructor(protected readonly deps: FetchRoomForSlugUseCaseDeps<T>) {}

	async execute(dto: FetchRoomForSlugUseCaseDTO): Promise<IResult<T>> {
		try {
			const roomResult = await this.deps.roomRepo.fetchBySlug(dto.slug);
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
