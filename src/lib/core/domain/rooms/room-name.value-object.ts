import { Fail, Ok, ValueObject, type IResult } from "rich-domain";
import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export const RoomNameSchema = z.object({
    value: z
        .string()
        .min(5, {
            message: 'Too short. Give your room a more descriptive name.'
        })
        .max(30)
})

export type RoomNameProps = z.infer<typeof RoomNameSchema>

export class RoomName extends ValueObject<RoomNameProps> {

    static isValidProps(props: RoomNameProps): boolean {
        return RoomNameSchema.safeParse(props).success
    }

    static createWithDefaults(props?: RoomNameProps): IResult<RoomName> {
        const defaultProps: RoomNameProps = {
            value: 'My New Room'
        }
        return RoomName.create({
            ...props,
            ...defaultProps
        })
    }

    static create(props: RoomNameProps): IResult<RoomName> {
        const result = RoomNameSchema.safeParse(props);
        if (!result.success) {
            const error = fromZodError(result.error, {
                maxIssuesInMessage: 1,
                prefix: 'Ooops!',
                includePath: false,
            });
            return Fail(error.message);
        }

        return Ok(new RoomName(props));
    }
}