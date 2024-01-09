import { Fail, type IResult, Ok, ValueObject } from 'rich-domain';
import { z } from 'zod';

export const RoomDescriptionSchema = z.object({
	value: z
		.string()
		.min(3, {
			message: 'This is too short. Give your Room a longer description.'
		})
		.max(256, {
			message: 'This is too long. Give your Room a shorter description.'
		})
});

const DEFAULT_DESCRIPTIONS = [
	`Good vibes only.`,
	`No bad vibes.`,
	`Positive vibes only.`,
	`Good energy only.`,
	`Positive energy only.`,
	`Vibe check.`,
	`Manifesting good things.`,
	`Positive affirmations.`,
	`Sending good vibes.`,
	`Keep it positive.`,
	`No negativity.`,
	`All good vibes.`,
	`Shoot your shot.`,
	`Go for it.`,
	`No such thing as a bad idea.`,
	`Every idea is valid.`,
	`Don't be afraid to think outside the box.`,
	`The crazier the idea, the better.`,
	`Let's brainstorm.`,
	`Let's hear it.`,
	`No judgment.`,
	`All ideas are welcome.`,
	`Let's just see where it goes.`,
	`You never know until you try.`
];

export type RoomDescriptionProps = z.infer<typeof RoomDescriptionSchema>;

export class RoomDescription extends ValueObject<RoomDescriptionProps> {
	private static validate(props: RoomDescriptionProps) {
		return RoomDescriptionSchema.safeParse(props);
	}

	static override isValidProps(props: RoomDescriptionProps): boolean {
		return this.validate(props).success;
	}

	static override create(props: RoomDescriptionProps): IResult<RoomDescription> {
		const parseResult = this.validate(props);
		if (!parseResult.success) return Fail(parseResult.error.issues.pop()?.message as string);
		return Ok(new RoomDescription(props));
	}

	static createWithDefaults(props?: RoomDescriptionProps): IResult<RoomDescription> {
		const randomIndex = Math.floor(Math.random() * DEFAULT_DESCRIPTIONS.length);
		const description = DEFAULT_DESCRIPTIONS[randomIndex] as string;
		return this.create({ value: description, ...props });
	}
}
