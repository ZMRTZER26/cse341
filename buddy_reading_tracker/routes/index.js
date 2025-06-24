const express = require("express");
const router = express.Router();

router.use("/auth", require("./authRoutes"));
router.use("/books", require("./bookRoutes"));
router.use("/friend", require("./friendRoutes"));
router.use("/note", require("./noteRoutes"));
router.use("/progress", require("./progressRoutes"));

module.exports = router;
