import type { DbRoom } from '$lib/server/services/drizzle/schemas';
import { ID } from 'rich-domain';
import { UserHasActiveSubscriptionSpecification } from './billing-specifications';

/************************* */
// Types
/************************* */

export interface RoomInfo {
	roomId: DbRoom['id'];
}

/************************* */
// Specs
/************************* */

// export class UserIsRoomOwnerSpecification extends AbstractRoomSpecification {
// 	public async isSatisfiedBy(input: { userId: }): Promise<boolean> {
// 		try {
// 			const userId = ID.create(input.userId);
// 			const roomResult = await this.deps.roomRepo.fetchById(input.roomId);
// 			if (roomResult.isFail()) return false;
// 			const room = roomResult.value();
// 			const ownerId = room.get('ownerId');
// 			return ownerId.isEqual(userId);
// 		} catch (error) {
// 			console.error(JSON.stringify(error, null, 2));
// 			return false;
// 		}
// 	}
// }

// export class RoomIsReadySpecification extends AbstractRoomSpecification {
// 	public async isSatisfiedBy(input: RoomInfo): boolean {
// 		try {
// 			const roomResult = await this.deps.roomRepo.fetchById(input.roomId);
// 			if (roomResult.isFail()) return false;
// 			const room = roomResult.value();
// 			return room.status.isReady;
// 		} catch (error) {
// 			console.error(JSON.stringify(error, null, 2));
// 			return false;
// 		}
// 	}
// }

// export const userCanRequestRoomSpecification = new UserHasActiveSubscriptionSpecification();

// export const UserCanViewRoomSpecification = RoomIsReadySpecification;
