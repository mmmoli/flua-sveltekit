import type { IDomainEvent, IHandle as DomainEvent, EventHandler } from 'rich-domain';
import type { User } from './user.aggregate-root';
export class UserRegisteredEvent implements DomainEvent<User> {
	public readonly eventName = 'UserRegisteredEvent';

	async dispatch(event: IDomainEvent<User>, handler: EventHandler<User, void>): Promise<void> {
		const { aggregate } = event;
		console.log(`EVENT DISPATCH: UserRegisteredEvent. ${aggregate.hashCode().value()}`);
		const eventName = this.eventName;
		await handler.execute({ aggregate, eventName });
	}
}
