import { RoomCreationPolicy } from "../application/policies";
import { RoomRepo } from "./db/room-repo";
import { RoomService } from "./services/room-service";

const roomService = new RoomService();
const roomRepo = new RoomRepo();

new RoomCreationPolicy({
    roomService
})