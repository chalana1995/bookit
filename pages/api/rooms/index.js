import nc from "next-connect";
import { getAllRooms } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getAllRooms);

export default handler;
