import type { Room } from '$lib/server/core/domain/rooms';
import { emailService } from '$lib/server/services/email';
import { type EventHandler, type HandlerPayload } from 'rich-domain';
import Welcome from '$lib/server/services/email/emails/welcome.svelte';

export class RoomReadyPolicy implements EventHandler<Room, void> {
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
