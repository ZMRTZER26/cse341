const express = require("express");
const router = express.Router();

router.use("/vtubers", require("./vtubersRoutes"));
router.use("/images", require("./imagesRoutes"));

module.exports = router;
