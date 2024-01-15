import { type IResult, ID, type UID, Fail, Ok, Combine } from 'rich-domain';
import { User } from './user.aggregate-root';

export class UserBuilder {
	protected id: UID = ID.create();
	protected emailResult: IResult<string> = Fail('Email not set');
	protected nameResult: IResult<string> = Fail('Name not set');
	protected avatarResult: IResult<string> = Fail('Avatar not set');

	withId(id: string): UserBuilder {
		this.id = ID.create(id);
		return this;
	}

	withEmail(email: string): UserBuilder {
		this.emailResult = Ok(email);
		return this;
	}

	withName(name: string): UserBuilder {
		this.nameResult = Ok(name);
		return this;
	}

	withAvatarUrl(avatarUrl: string): UserBuilder {
		this.avatarResult = Ok(avatarUrl);
		return this;
	}

	public build(): IResult<User> {
		const result = Combine([this.emailResult, this.nameResult, this.avatarResult]);
		if (result.isFail()) return Fail(result.error());

		return User.create({
			id: this.id,
			email: this.emailResult.value(),
			avatarUrl: this.avatarResult.value(),
			name: this.nameResult.value()
		});
	}
}
