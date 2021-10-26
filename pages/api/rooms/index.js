import nc from "next-connect";
import { getAllRooms, createRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
