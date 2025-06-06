const Image = require("../models/imagesModel");

const getImages = async (req, res, next) => {
  try {
    const imageId = await Image.find();
    res.status(200).json(imageId);
  } catch (err) {
    next(err);
  }
};

const getSingleImage = async (req, res, next) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json(image);
  } catch (err) {
    next(err);
  }
};

const linkImage = async (req, res, next) => {
  try {
    const image = await Image.create(req.body);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(201).json(image);
  } catch (err) {
    next(err);
  }
};

const updateImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedImage = await Image.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json(updatedImage);
  } catch (err) {
    next(err);
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json({ message: "Image successfully deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getImages,
  getSingleImage,
  linkImage,
  updateImage,
  deleteImage,
};
