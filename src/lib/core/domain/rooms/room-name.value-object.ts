import { Fail, Ok, ValueObject, type IResult } from 'rich-domain';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const RoomNameSchema = z.object({
	value: z
		.string()
		.min(5, {
			message: 'Too short. Give your Room a more descriptive name.'
		})
		.max(256, {
			message: 'Too long. Give your Room a shorter name.'
		})
});

const DEFAULT_NAMES = [
	`Aesthetic`,
	`Bet`,
	`Blessed`,
	`Bomb`,
	`Bussin'`,
	`Chill`,
	`Classy`,
	`Cozy`,
	`Cute`,
	`Dope`,
	`Excellent`,
	`Extra`,
	`Fire`,
	`Fire`,
	`Fresh`,
	`Glow up`,
	`Goals`,
	`Good vibes`,
	`Great`,
	`Gucci`,
	`Hype`,
	`Iconic`,
	`Incredible`,
	`Legendary`,
	`Lit`,
	`Majestic`,
	`Marvelous`,
	`Mood`,
	`No cap`,
	`On fleek`,
	`Opulent`,
	`Outstanding`,
	`Perfekt`,
	`Poppin'`,
	`Positive vibes`,
	`Preppy`,
	`Purr`,
	`Rad`,
	`Sick`,
	`Slay`,
	`Snatched`,
	`Solid`,
	`Splendid`,
	`Stunning`,
	`Superior`,
	`Supreme`,
	`Swag`,
	`Sweet`,
	`Tasteful`,
	`Totes`,
	`Tremendous`,
	`Ultimate`,
	`Vibes`,
	`Vibes`,
	`Woke`,
	`Worth it`,
	`Yass`,
	`Yolo`,
	`Zesty`
];

export type RoomNameProps = z.infer<typeof RoomNameSchema>;

export class RoomName extends ValueObject<RoomNameProps> {
	static isValidProps(props: RoomNameProps): boolean {
		return RoomNameSchema.safeParse(props).success;
	}

	static createWithDefaults(props?: RoomNameProps): IResult<RoomName> {
		const randomIndex = Math.floor(Math.random() * DEFAULT_NAMES.length);
		const value = `${DEFAULT_NAMES[randomIndex]} Room`;

		const defaultProps: RoomNameProps = {
			value,
			...props
		};
		return RoomName.create({
			...defaultProps
		});
	}

	static create(props: RoomNameProps): IResult<RoomName> {
		const result = RoomNameSchema.safeParse(props);
		if (!result.success) {
			const error = fromZodError(result.error, {
				maxIssuesInMessage: 1,
				prefix: 'Ooops!',
				includePath: false
			});
			return Fail(error.message);
		}

		return Ok(new RoomName(props));
	}
}
