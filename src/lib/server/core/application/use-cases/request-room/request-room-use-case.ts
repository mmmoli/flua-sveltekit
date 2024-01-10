import {
	Fail,
	Ok,
	type IResult,
	type IUseCase,
	type EventHandler,
	type IAdapter
} from 'rich-domain';
import type { RequestRoomUseCaseDTO } from './request-room-use-case-dto';
import {
	type Room,
	RoomBuilder,
	RoomRequestedEvent,
	type RoomRepoTrait
} from '$lib/server/core/domain/rooms';

export interface RequestRoomUseCaseDeps<T> {
	roomRepo: RoomRepoTrait;
	roomRequestPolicy?: EventHandler<Room, void>;
	presenter: IAdapter<Room, T>;
}

export class RequestRoomUseCase<T> implements IUseCase<RequestRoomUseCaseDTO, IResult<T>> {
	constructor(protected readonly deps: RequestRoomUseCaseDeps<T>) {}

	async execute(dto: RequestRoomUseCaseDTO): Promise<IResult<T>> {
		try {
			const builder = new RoomBuilder({
				ownerId: dto.ownerId
			});
			if (dto.name) {
				builder.withName(dto.name.value);
			}
			const roomResult = builder.build();
			if (roomResult.isFail()) return Fail(roomResult.error());
			const room = roomResult.value();

			const saveResult = await this.deps.roomRepo.save(room);
			if (saveResult.isFail()) return Fail(saveResult.error());

			room.dispatchEvent(RoomRequestedEvent.name, this.deps?.roomRequestPolicy);

			const roomModelResult = this.deps.presenter.build(room);
			if (roomModelResult.isFail()) return Fail(roomModelResult.error());
			const roomModel = roomModelResult.value() as T extends void ? null : T;
			return Ok(roomModel);
		} catch (error) {
			console.log(error);
			return Fail('Failed to create Room');
		}
	}
}
