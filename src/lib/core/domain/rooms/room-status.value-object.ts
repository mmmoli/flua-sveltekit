import { Fail, Ok, ValueObject, type IResult } from "rich-domain";
import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export const RoomStatusSchema = z.discriminatedUnion('label', [
    z.object({ label: z.literal('preparing') }),
    z.object({ label: z.literal('ready') }),
    z.object({ label: z.literal('locked') }),
]);

export type RoomStatusProps = z.infer<typeof RoomStatusSchema>
export type RoomStatusValue = RoomStatusProps['label']

export class RoomStatus extends ValueObject<RoomStatusProps> {

    static isValidProps(props: RoomStatusProps): boolean {
        return RoomStatusSchema.safeParse(props).success
    }

    static createWithDefaults(props?: RoomStatusProps): IResult<RoomStatus> {
        const defaultProps: RoomStatusProps = {
            label: 'preparing'
        }
        return RoomStatus.create({
            ...props,
            ...defaultProps
        })
    }

    static create(props: RoomStatusProps): IResult<RoomStatus> {
        const result = RoomStatusSchema.safeParse(props);
        if (!result.success) {
            const error = fromZodError(result.error, {
                maxIssuesInMessage: 1,
                prefix: 'Ooops!',
                includePath: false,
            });
            return Fail(error.message);
        }

        return Ok(new RoomStatus(props));
    }
}