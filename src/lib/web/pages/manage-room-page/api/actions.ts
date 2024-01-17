import { type Actions } from '@sveltejs/kit';
import { actions as roomFormActions } from '~widgets/rooms/room-form/api';

export const actions: Actions = {
	...roomFormActions
};
