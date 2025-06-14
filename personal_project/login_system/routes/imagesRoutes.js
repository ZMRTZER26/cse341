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

router.put(
  "/:id",
  ensureAuthenticated,
  validateImage,
  imagesController.updateImage
);

router.delete("/:id", ensureAuthenticated, imagesController.deleteImage);

module.exports = router;
