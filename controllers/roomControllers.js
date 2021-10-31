import Room, { geoSearch } from "../models/rooms";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";
import ApiFeature from "../utils/apiFeature";

const getAllRooms = catchAsyncError(async (req, res) => {
  const apiFeature = new ApiFeature(Room.find(), req.query).search().filter();

  const rooms = await apiFeature.query;

  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// create rooms   => /api/room
const createRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// Get room Details   => /api/room/:id
const getRoomById = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room Details   => /api/room/:id
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room Details   => /api/room/:id
const deleteRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is Deleted",
  });
});

export { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom };
