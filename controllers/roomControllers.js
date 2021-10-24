const getAllRooms = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "All Romms",
  });
};

export { getAllRooms };
