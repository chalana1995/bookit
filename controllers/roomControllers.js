import Room from "../models/rooms";

const getAllRooms = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "All Romms",
  });
};

// create rooms   => /api/room
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, createRoom };
