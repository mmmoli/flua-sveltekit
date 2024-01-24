import { superValidate } from 'sveltekit-superforms/client';
import { roomFormSchema, type RoomFormValues } from '../model/form-schema';

export interface LoadRoomFormSSRParams {
	room?: RoomFormValues;
}

export const loadRoomFormSSR = async ({ room }: LoadRoomFormSSRParams) => {
	const roomForm = room
		? await superValidate(room, roomFormSchema)
		: await superValidate(roomFormSchema);

	return {
		roomForm
	};
};
