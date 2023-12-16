import { RoomCreationPolicy } from "../application/policies";
import { LockRoomUseCase, RequestRoomUseCase } from "../application/use-cases";
import { RoomRepo } from "./db/room-repo";
import { RoomService } from "./services/room-service";

const roomService = new RoomService();
const roomRepo = new RoomRepo();

export const createRoomUseCase = new RequestRoomUseCase()
export const lockRoomUseCase = new LockRoomUseCase({
    roomRepo
})

new RoomCreationPolicy({
    roomService
})