const express = require("express");
const router = express.Router();
const readingProgressController = require("../controllers/readingProgress");
const authenticate = require("../middleware/authenticate");
router.get("/", authenticate, readingProgressController.getAllReadingProgress);

router.get("/", readingProgressController.getAllReadingProgress);
router.get("/:id", readingProgressController.getReadingProgressById);
router.post("/", readingProgressController.addReadingProgress);
router.put("/:id", readingProgressController.updateReadingProgress);
router.delete("/:id", readingProgressController.deleteReadingProgress);

module.exports = router;
