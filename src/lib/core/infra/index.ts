import { RoomRequestPolicy } from "../application/policies";
import { LockRoomUseCase, RequestRoomUseCase, type LockRoomUseCaseDTO, type RequestRoomUseCaseDTO } from "../application/use-cases";
import { RoomRepo } from "./db/room-repo";
import { RoomService } from "./services/room-service";

const roomService = new RoomService();
const roomRepo = new RoomRepo();

const createRoomUseCase = new RequestRoomUseCase({
    roomRequestPolicy: new RoomRequestPolicy({
        roomService
    })
})

export const createRoom = async (dto: RequestRoomUseCaseDTO) => {
    createRoomUseCase.execute(dto).then()
}

const lockRoomUseCase = new LockRoomUseCase({
    roomRepo
})
export const lockRoom = async (dto: LockRoomUseCaseDTO) => {
    lockRoomUseCase.execute(dto).then()
}

