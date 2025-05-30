const Vtuber = require("../models/vtubersModel");

const getVtubers = async (req, res, next) => {
  try {
    const vtubers = await Vtuber.find();
    res.status(200).json(vtubers);
  } catch (err) {
    next(err);
  }
};

const getSingleVtuber = async (req, res, next) => {
  try {
    const vtuber = await Vtuber.findById(req.params.id);
    if (!vtuber) {
      return res.status(404).json({ message: "Vtuber not found" });
    }
    res.status(200).json(vtuber);
  } catch (err) {
    next(err);
  }
};

const createVtuber = async (req, res, next) => {
  try {
    const vtuber = await Vtuber.create(req.body);
    console.log("REQ.BODY:", req.body);
    res.status(201).json(vtuber);
  } catch (err) {
    next(err);
  }
};

const updateVtuber = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedVtuber = await Vtuber.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedVtuber) {
      return res.status(404).json({ message: "Vtuber not found" });
    }

    res.status(200).json(updatedVtuber);
  } catch (err) {
    next(err);
  }
};

const deleteVtuber = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedVtuber = await Vtuber.findByIdAndDelete(id);

    if (!deletedVtuber) {
      return res.status(404).json({ message: "Vtuber not found" });
    }

    res.status(200).json({ message: "Vtuber successfully deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getVtubers,
  getSingleVtuber,
  createVtuber,
  updateVtuber,
  deleteVtuber,
};
