import { superValidate } from 'sveltekit-superforms/client';
import { roomFormSchema, type RoomFormValues } from '../model/form-schema';

export interface Params {
	room?: RoomFormValues;
}

export const load = async ({ room }: Params) => {
	const roomForm = room
		? await superValidate(room, roomFormSchema)
		: await superValidate(roomFormSchema);

	return {
		roomForm
	};
};
