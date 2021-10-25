import nc from "next-connect";
import {
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getRoomById);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
