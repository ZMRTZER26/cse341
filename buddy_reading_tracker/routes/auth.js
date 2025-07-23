const express = require("express");
const passport = require("passport");
require("../middleware/authGoogle");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  // Redirect to Swagger with token or return token in JSON
  res.json({ token: req.user.token, user: req.user.user });
});

router.get("/logout", (req, res) => {
  const googleLogoutURL = "https://accounts.google.com/Logout";
  const redirectBack = "https://cse341-tpkb.onrender.com/api-docs";
  res.redirect(
    `${googleLogoutURL}?continue=${encodeURIComponent(redirectBack)}`
  );
});

module.exports = router;
