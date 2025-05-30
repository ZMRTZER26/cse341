const Vtuber = require("../models/vtubersModel");

module.exports.createVtuber = (req, res) => {
  try {
    const { name, debut, agency, bio, language, status, channel } = req.body;

    // Manual validation like your prof's example
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

    const vtuber = new Vtuber(req.body);
    vtuber
      .save()
      .then((data) => res.status(201).json(data))
      .catch((err) =>
        res
          .status(500)
          .json({ message: err.message || "Error creating vtuber" })
      );
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getVtubers = (req, res) => {
  try {
    Vtuber.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res
          .status(500)
          .json({ message: err.message || "Error retrieving vtubers" })
      );
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getSingleVtuber = (req, res) => {
  try {
    Vtuber.findById(req.params.id)
      .then((data) => {
        if (!data) return res.status(404).json({ message: "Vtuber not found" });
        res.status(200).json(data);
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: err.message || "Error retrieving vtuber" })
      );
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateVtuber = (req, res) => {
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
      return res.status(400).json({ message: "All fields are required" });
    }

    Vtuber.findById(id)
      .then((vtuber) => {
        if (!vtuber)
          return res.status(404).json({ message: "Vtuber not found" });

        vtuber.name = name;
        vtuber.debut = debut;
        vtuber.agency = agency;
        vtuber.bio = bio;
        vtuber.language = language;
        vtuber.status = status;
        vtuber.channel = channel;

        return vtuber.save();
      })
      .then(() => res.status(204).send())
      .catch((err) =>
        res
          .status(500)
          .json({ message: err.message || "Error updating vtuber" })
      );
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteVtuber = (req, res) => {
  try {
    const { id } = req.params;
    Vtuber.deleteOne({ _id: id })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Vtuber not found" });
        }
        res.status(204).send();
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: err.message || "Error deleting vtuber" })
      );
  } catch (err) {
    res.status(500).json(err);
  }
};
