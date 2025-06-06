const express = require("express");
const router = express.Router();
const imagesController = require("../controllers/images");
const { validateImage } = require("../middleware/validate");
const ensureAuthenticated = require("../middleware/authCheck");

router.post(
  "/",
  ensureAuthenticated,
  validateImage,
  imagesController.linkImage
);

router.get("/", imagesController.getImages);
router.get("/:id", imagesController.getSingleImage);
router.post("/", validateImage, imagesController.linkImage);
router.put("/:id", validateImage, imagesController.updateImage);
router.delete("/:id", imagesController.deleteImage);

module.exports = router;
