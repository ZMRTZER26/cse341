// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middleware/authCheck");

router.get("/profile", ensureAuthenticated, (req, res) => {
  res.status(200).json({
    message: "This is a protected route",
    user: req.user,
  });
});

module.exports = router;
