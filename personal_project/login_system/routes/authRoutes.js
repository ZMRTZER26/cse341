const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Logout (protected or not, depends on your use)
router.post("/logout", logout);

module.exports = router;
