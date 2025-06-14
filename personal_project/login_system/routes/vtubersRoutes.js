const express = require("express");
const router = express.Router();
const vtubersController = require("../controllers/vtubers");
const { validateVtuber } = require("../middleware/validate");
const ensureAuthenticated = require("../middleware/authCheck");

router.post(
  "/",
  ensureAuthenticated,
  validateVtuber,
  vtubersController.createVtuber
);

router.get("/", vtubersController.getVtubers);
router.get("/:id", vtubersController.getSingleVtuber);

router.put(
  "/:id",
  ensureAuthenticated,
  validateVtuber,
  vtubersController.updateVtuber
);

router.delete("/:id", ensureAuthenticated, vtubersController.deleteVtuber);

module.exports = router;
