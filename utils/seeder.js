const Room = require("../models/rooms");
const rooms = require("../data/rooms.json");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bookit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Romms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
