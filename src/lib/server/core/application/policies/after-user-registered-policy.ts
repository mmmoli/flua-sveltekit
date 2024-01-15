import { type EventHandler, type HandlerPayload } from 'rich-domain';
import type { User } from '../../domain/users';

export class AfterUserRegisteredPolicy implements EventHandler<User, void> {
	async execute(data: HandlerPayload<User>): Promise<void> {
		console.log('AfterUserRegisteredPolicy!');
	}
}
