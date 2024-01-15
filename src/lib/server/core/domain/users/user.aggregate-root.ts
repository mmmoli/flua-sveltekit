import { Aggregate, type IResult, Ok, type UID } from 'rich-domain';
import { UserBuilder } from './user.builder';
import { UserRegisteredEvent } from './user-registered.domain-event';

export interface UserProps {
	id: UID;
	email: string;
	name: string;
	avatarUrl: string;
}

export class User extends Aggregate<UserProps> {
	private constructor(props: UserProps) {
		super(props);
		if (props.id?.isNew()) {
			this.addEvent(new UserRegisteredEvent());
		}
	}

	public static create(props: UserProps): IResult<User> {
		return Ok(new User(props));
	}

	public static builder(): UserBuilder {
		return new UserBuilder();
	}
}
