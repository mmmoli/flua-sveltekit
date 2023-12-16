import { type IResult, Combine, Fail, ID, type UID } from "rich-domain";
import { Room } from "./room.aggregate-root";
import { RoomName } from "./room-name.value-object";

export interface RoomBuilderProps {
    ownerId: string;
}

export class RoomBuilder {
    protected nameResult: IResult<RoomName>;
    protected id: UID = ID.create();
    protected ownerId: UID;

    constructor(props: RoomBuilderProps) {
        this.ownerId = ID.create(props.ownerId)
        this.nameResult = RoomName.createWithDefaults()
    }

    withName(name: string): RoomBuilder {
        this.nameResult = RoomName.create({ value: name })
        return this
    }

    withId(id: string): RoomBuilder {
        this.id = ID.create(id)
        return this
    }

    public build(): IResult<Room> {
        const result = Combine([this.nameResult])
        if (result.isFail()) return Fail(result.error())

        return Room.create({
            id: this.id,
            name: this.nameResult.value(),
            ownerId: this.ownerId,
        });
    }
}