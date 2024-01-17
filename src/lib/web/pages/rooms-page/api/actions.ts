import { actions as requestRoomActions } from '~features/rooms/request-room/api/actions';
import { type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	...requestRoomActions
};
