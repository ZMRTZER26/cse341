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

const createVtuber = async (req, res) => {
  try {
    const { name, debut, agency, bio, language, status, channel } = req.body;

    if (
      !name ||
      !debut ||
      !agency ||
      !bio ||
      !language ||
      !status ||
      !channel
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVtuber = new Vtuber({
      name,
      debut,
      agency,
      bio,
      language,
      status,
      channel,
    });
    const savedVtuber = await newVtuber.save();

    res.status(201).json(savedVtuber);
  } catch (err) {
    next(err);
  }
};

const updateVtuber = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, debut, agency, bio, language, status, channel } = req.body;

    if (
      !name ||
      !debut ||
      !agency ||
      !bio ||
      !language ||
      !status ||
      !channel
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required for update" });
    }

    const updatedVtuber = await Vtuber.findByIdAndUpdate(
      id,
      { name, debut, agency, bio, language, status, channel },
      { new: true, runValidators: true }
    );

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
