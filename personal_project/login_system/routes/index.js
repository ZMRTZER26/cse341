const express = require("express");
const router = express.Router();

router.use("/vtubers", require("./vtubersRoutes"));
router.use("/images", require("./imagesRoutes"));
router.use("/auth", require("./authRoutes"));

module.exports = router;
