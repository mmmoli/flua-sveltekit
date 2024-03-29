import type { EventHandler, HandlerPayload } from 'rich-domain';
import type { Room, RoomRepoTrait } from '../../domain/rooms';
import { emailService } from '$lib/server/services/email';
import Welcome from '$lib/server/services/email/emails/welcome.svelte';

export interface AfterRoomReadyPolicyDeps {
	roomRepo: RoomRepoTrait;
}

export class AfterRoomReadyPolicy implements EventHandler<Room, void> {
	constructor(protected readonly deps: AfterRoomReadyPolicyDeps) {}
	async execute(data: HandlerPayload<Room>): Promise<void> {
		try {
			emailService.sendEmail({
				template: Welcome,
				props: {
					firstName: 'Michele'
				},
				to: 'michele.memoli@gmail.com',
				subject: 'Room is Ready!'
			});
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
		}
	}
}
