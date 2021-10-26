import nc from "next-connect";
import {
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getRoomById);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
