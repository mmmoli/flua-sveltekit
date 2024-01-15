import type { EventHandler, IDomainEvent, IHandle as DomainEvent } from 'rich-domain';
import type { User } from './user.aggregate-root';

export class UserRegisteredEvent implements DomainEvent<User> {
	dispatch(event: IDomainEvent<User>, handler: EventHandler<User, void>): void {
		const { aggregate } = event;
		console.log(`EVENT DISPATCH: UserRegistered. ${aggregate.hashCode().value()}`);
		handler.execute({
			aggregate,
			eventName: UserRegisteredEvent.name
		});
	}
}
