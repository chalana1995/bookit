import nc from "next-connect";
import { getAllRooms, createRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
