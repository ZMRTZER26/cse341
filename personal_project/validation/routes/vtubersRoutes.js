const express = require("express");
const router = express.Router();
const vtubersController = require("../controllers/vtubers");
const { validateVtuber } = require("../middleware/validate");

router.get("/", vtubersController.getVtubers);
router.get("/:id", vtubersController.getSingleVtuber);
router.post("/", validateVtuber, vtubersController.createVtuber);
router.put("/:id", validateVtuber, vtubersController.updateVtuber);
router.delete("/:id", vtubersController.deleteVtuber);

module.exports = router;
