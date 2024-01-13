import { Fail, type IResult, Ok, ValueObject } from 'rich-domain';
import { z } from 'zod';
import slugify from 'slugify';
import { RoomName } from './room-name.value-object';

export const RoomSlugSchema = z.object({
	value: z
		.string()
		.max(128, {
			message: 'This is a bit long. Room slug must be less than 128 characters'
		})
		.regex(
			/^[a-zA-Z0-9.\-_]+$/,
			'Invalid Slug. The only accepted characters are "a-z", "A-Z", "0-9", and ".", "-", & "_"'
		)
});

export type RoomSlugProps = z.infer<typeof RoomSlugSchema>;

export class RoomSlug extends ValueObject<RoomSlugProps> {
	private static validate(props: RoomSlugProps) {
		return RoomSlugSchema.safeParse(props);
	}

	static override isValidProps(props: RoomSlugProps): boolean {
		return this.validate(props).success;
	}

	public static override create(props: RoomSlugProps): IResult<RoomSlug> {
		const parseResult = this.validate(props);
		if (!parseResult.success) return Fail(parseResult.error.issues.pop()?.message as string);
		return Ok(
			new RoomSlug({
				value: parseResult.data.value.toLowerCase()
			})
		);
	}

	public static createFromName(name: RoomName): IResult<RoomSlug> {
		const randomCode = Math.random().toString().substring(2, 7);
		const slugString = [slugify(name.get('value')), randomCode].join('-');
		return this.create({
			value: slugString
		});
	}
}
